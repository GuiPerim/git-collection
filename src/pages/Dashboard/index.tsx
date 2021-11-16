import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repos, Error } from "./styles";
import { api } from "../../services/api";
import logo from "../../assets/logo.svg";

interface GitHubRepository {
  description: string;
  full_name: string;
  owner: {
    avatar_url: string;
    link: string;
    login: string;
  };
}

const Dashboard: React.FC = () => {
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
          placeholder="username/reposirory (eg.: GuiPerim/git-collection)"
          onChange={handleSearchChanges}
        />
        <button type="submit">Search</button>
      </Form>

      {error && <Error>{error}</Error>}

      {/* TODO: Convert this to a separared component */}
      <Repos>
        {repos.map((repo, index) => {
          return (
            <Link
              to={`/repositories/${repo.full_name}`}
              key={repo.full_name + index}
            >
              <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          );
        })}
      </Repos>
    </>
  );
};

export default Dashboard;
