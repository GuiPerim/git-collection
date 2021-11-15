import React, { FC } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { Header } from "./styles";
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
    </>
  );
};
