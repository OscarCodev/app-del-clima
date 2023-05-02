import React from "react";
import styled from "styled-components";

function Header({ title }) {
  return (
    <ContenedorHeader>
      <h2>{title}</h2>
    </ContenedorHeader>
  );
}

const ContenedorHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  h2{
    margin-top: 40px;
  }
`;

export default Header;
