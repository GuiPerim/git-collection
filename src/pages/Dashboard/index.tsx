import React, { ChangeEvent, useState } from "react";

import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repos } from "./styles";
import { api } from "../../services/api";
import logo from "../../assets/logo.svg";

interface GithubReposutory {
  description: string;
  full_name: string;
  owner: {
    avatar_url: string;
    link: string;
    login: string;
  };
}

export const Dashboard: React.FC = () => {
  const [search, setSearch] = useState("");
  const [respos, setRepos] = useState<GithubReposutory[]>([]);

  // function handleSearchChanges(event: ChangeEvent<HTMLInputElement>) {
  //   console.log(event.target.value);
  //   setSearch(event.target.value);
  // }
  const handleSearchChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <img src={logo} alt="Git Repository" />
      <Title>Repositories list</Title>
      <Form>
        <input
          placeholder="username/reposirory"
          onChange={handleSearchChanges}
        />
        <button type="submit">Search</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/16120290?v=4"
            alt="Repository"
          />
          <div>
            <strong>Teste</strong>
            <p>Some description here</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
