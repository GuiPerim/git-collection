import React, { FC, useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Header, RepoInfo, Issues } from "./styles";
import logo from "../../assets/logo.svg";
import { api } from "../../services/api";

interface RepositoryParams {
  repository: string;
}

interface GitHubRepository {
  description: string;
  full_name: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    avatar_url: string;
    link: string;
    login: string;
  };
}

interface GitHubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export const Repo: FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<GitHubRepository | null>(null);
  const [issues, setIssues] = useState<GitHubIssue[]>([]);

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then((response) => setRepository(response.data));

    api
      .get(`repos/${params.repository}/issues`)
      .then((response) => setIssues(response.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Git Repository" />

        <Link to="/">
          <FiChevronLeft size={20} />
          Back
        </Link>
      </Header>

      {repository && (
        <RepoInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.full_name}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepoInfo>
      )}

      <Issues>
        {issues.map((issue) => {
          return (
            <a
              target="_blank"
              key={issue.html_url}
              href={issue.html_url}
              rel="noreferrer"
            >
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          );
        })}
      </Issues>
    </>
  );
};
