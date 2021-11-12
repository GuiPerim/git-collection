import styled from "styled-components";
import { shade } from "polished";
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  /* max-width: 700px; */
  display: flex;

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 2px solid #e4e4e4;
    border-radius: 8px 0px 0px 8px;
    color: #3a3a3a;
    border-right: 0;

    //Changing placeholder text-color
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;
    background: #04d361;
    border-radius: 0px 8px 8px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    //Changes the background colocar when hover
    &:hover {
      background-color: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Repos = styled.div`
  margin-top: 80px;
  /* max-width: 700px; */

  a {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(6px);
    }

    //A partir da segunda tag <a></a> será feito o margin-top
    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
