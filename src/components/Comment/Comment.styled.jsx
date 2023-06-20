import styled from "styled-components";

export const Item = styled.li`
  width: 60vw;
  background-color: #fdfb83;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  margin-top: 70px;
  padding-top: 40px;
  padding-bottom: 60px;
`;

export const AreaName = styled.p`
  background-color: #d49c03;
  padding: 10px;
  margin-bottom: 10px;
  width: 30%;
  font-weight: bold;
  position: absolute;
  padding-left: 40px;
  top: 0px;
  left: 0px;
  transform: translate(0%, -50%);
`;

export const Button = styled.button`
  background-color: transparent;
  background-color: #d49c03;
  border: none;
  font-weight: 100;
  padding: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: -22px;
  transform: translate(-50%, -50%);

  &:hover,
  &:focus {
    background-color: #c0a14d;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`;

export const Initials = styled.button`
  background-color: #d49c03;
  font-size: 30px;
  font-weight: 400;
  color: white;
  padding: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0px;
  left: -10px;
  transform: translate(-50%, -50%);
  z-index: 99;

  &:hover,
  &:focus {
    background-color: #c0a14d;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
`;
