import React from "react";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import RepositoryTable from "./components/RepositoryTable";
import useGithubSearch from "./hooks/useGithubSearch";
import "./styles/App.css";

const App: React.FC = () => {
  const {
    query,
    setQuery,
    perPage,
    setPerPage,
    page,
    setPage,
    totalPages,
    repositories,
    loading,
    error,
    handleSort,
  } = useGithubSearch();

  return (
    <main className="App">
      <h1 className="App_header">GitHub Repository Search</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        perPage={perPage}
        setPerPage={setPerPage}
      />

      {error ? (
        <p className="error">{error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : repositories.length === 0 ? (
        <p className="error">No results found.</p>
      ) : (
        <>
          <RepositoryTable
            repositories={repositories}
            handleSort={handleSort}
          />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </main>
  );
};

export default App;
