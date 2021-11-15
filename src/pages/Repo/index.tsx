import React, { FC } from "react";
import { useRouteMatch } from "react-router-dom";

interface RepositoryParams {
  repository: string;
}

export const Repo: FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return <h1>Repo : {params.repository}</h1>;
};
