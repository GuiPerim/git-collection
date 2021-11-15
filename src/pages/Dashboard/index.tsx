import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repos, Error } from "./styles";
import { api } from "../../services/api";
import logo from "../../assets/logo.svg";
import { stringify } from "querystring";

interface GitHubRepository {
  description: string;
  full_name: string;
  owner: {
    avatar_url: string;
    link: string;
    login: string;
  };
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepository[]>(() => {
    const storageRepos = localStorage.getItem("@GitCollection:repositories");
    if (storageRepos) return JSON.parse(storageRepos);
    else return [];
  });
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  //Assim que o componente foi criado, e em toda vez que a dependencia repos for alterada, executamos o hook abaixo
  useEffect(() => {
    localStorage.setItem("@GitCollection:repositories", JSON.stringify(repos));
  }, [repos]);

  // TODO: Delete unused stuff
  // function handleSearchChanges(event: ChangeEvent<HTMLInputElement>) {
  //   console.log(event.target.value);
  //   setSearch(event.target.value);
  // }
  const handleSearchChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!search) {
      setError("Your search makes no sense!");
      return;
    }

    const response = await api.get<GitHubRepository>(`repos/${search}`);
    const repository = response.data;
    setRepos([...repos, repository]);
  }

  return (
    <>
      <img src={logo} alt="Git Repository" />
      <Title>Repositories list</Title>

      {/* TODO: Convert this to a separared component */}
      <Form onSubmit={handleSubmit} hasError={Boolean(error)}>
        <input
          placeholder="username/reposirory"
          onChange={handleSearchChanges}
        />
        <button type="submit">Search</button>
      </Form>

      {error && <Error>{error}</Error>}

      {/* TODO: Convert this to a separared component */}
      <Repos>
        {repos.map((repo) => {
          return (
            <a href="/repositories" key={repo.full_name}>
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          );
        })}
      </Repos>
    </>
  );
};
