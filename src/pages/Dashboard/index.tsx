import React from "react";

import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repos } from "./styles";

import logo from "../../assets/logo.svg";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Git Repository" />
      <Title>Repositories list</Title>
      <Form>
        <input placeholder="username/reposirory" />
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
