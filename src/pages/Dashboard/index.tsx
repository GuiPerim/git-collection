import React from "react";

import { Title, Form } from "./styles";
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
    </>
  );
};
