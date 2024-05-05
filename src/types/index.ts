interface Repository {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  created_at: string;
}

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

interface RepositoryTableProps {
  repositories: Repository[];
  handleSort: (column: "name" | "owner" | "stars" | "updated") => void;
}

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  perPage: number;
  setPerPage: (perPage: number) => void;
}

export type { Repository, PaginationProps, RepositoryTableProps, SearchBarProps };