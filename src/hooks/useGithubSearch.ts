import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDebounce } from './useDebounce';
import { Repository } from '@types';

const useGithubSearch = () => {
  const [query, setQuery] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const [sortBy, setSortBy] = useState<"name" | "owner" | "stars" | "updated">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Debounce the search query to avoid firing too many requests in a short time
  const debouncedQuery = useDebounce(query, 500);

  // Effect hook to fetch data from GitHub API based on the search query, pagination, and sorting
  useEffect(() => {
    const fetchData = async () => {
      if (debouncedQuery.trim() !== "") {
        setLoading(true);
        try {
          // Fetch repositories from GitHub API
          const response = await axios.get(
            `https://api.github.com/search/repositories`, {
            params: {
              q: debouncedQuery,
              sort: sortBy,
              order: sortOrder,
              page: page,
              per_page: perPage
            }
          }
          );
          const data = response.data;
          setRepositories(data.items);
          setTotalPages(Math.ceil(data.total_count / perPage)); // Calculate total pages based on total count of repositories
          setError("");
          setLoading(false);

          // Update URL query parameters to reflect current search state
          const queryParams = new URLSearchParams({
            q: debouncedQuery,
            sort: sortBy,
            order: sortOrder,
            page: page.toString(),
            per_page: perPage.toString(),
          });
          window.history.pushState({}, "", `?${queryParams.toString()}`); // Update browser history
        } catch (error) {
          setError("An error occurred. Please try again later.");
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [debouncedQuery, page, perPage, sortBy, sortOrder]);

  // Effect hook to initialize search parameters based on URL query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const newQuery = queryParams.get("q") || "";
    const newPage = parseInt(queryParams.get("page") || "1", 10);
    const newPerPage = parseInt(queryParams.get("per_page") || "10", 10);
    const newSortBy = (queryParams.get("sort") as "name" | "owner" | "stars" | "updated") || "name";
    const newSortOrder = (queryParams.get("order") as "asc" | "desc") || "asc";

    setQuery(newQuery);
    setPage(newPage);
    setPerPage(newPerPage);
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  }, []); // Effect runs only once when component mounts

  // Function to handle sorting of repositories based on column
  const handleSort = (column: "name" | "owner" | "stars" | "updated") => {
    if (column === sortBy) {
      // If sorting column is the same as current one, toggle sorting order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  // Return state variables and functions for external usage
  return {
    query,
    setQuery,
    repositories,
    loading,
    error,
    page,
    setPage,
    totalPages,
    perPage,
    setPerPage,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    handleSort,
  };
};

export default useGithubSearch;
