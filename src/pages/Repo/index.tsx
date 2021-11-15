import React, { FC } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header, RepoInfo } from "./styles";
import logo from "../../assets/logo.svg";

interface RepositoryParams {
  repository: string;
}

export const Repo: FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Git Repository" />

        <Link to="/">
          <FiChevronLeft size={20} />
          Back
        </Link>
      </Header>

      <RepoInfo>
        <header>
          <img src="" alt="NAME" />
          <div>
            <strong>Full name</strong>
            <p>Descrição do rep.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>231321</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>14</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>231321</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepoInfo>
    </>
  );
};
