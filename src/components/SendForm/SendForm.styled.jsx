import styled from "styled-components";

export const Button = styled.button`
  background-color: #691212;
  width: 80px;
  height: 40px;

  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0;

  position: absolute;
  bottom: -10px;
  right: -25px;

  &:hover,
  &:focus {
    background-color: #b71c1c;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #691212;
  resize: none;
`;

export const Form = styled.form`
  position: relative;
  margin-top: 60px;
`;
