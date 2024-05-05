import React from "react";
import { RepositoryTableProps } from "@types";
import "../styles/App.css";

const RepositoryTable: React.FC<RepositoryTableProps> = ({
  repositories,
  handleSort,
}) => {
  return (
    <table className="Table_container">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("owner")}>Owner</th>
          <th onClick={() => handleSort("stars")}>Stars</th>
          <th onClick={() => handleSort("updated")}>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {repositories.map((repo) => (
          <tr key={repo.id}>
            <td>{repo.name}</td>
            <td>{repo.owner.login}</td>
            <td>{repo.stargazers_count}</td>
            <td>{new Date(repo.created_at).toISOString().split("T")[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RepositoryTable;
