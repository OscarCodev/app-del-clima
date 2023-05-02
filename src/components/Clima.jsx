import React from "react";
import styled from "styled-components";

function Clima({ resultado }) {
  const { name, main } = resultado;
  if (!name) return null;
  const kelvin = 273.15;
  return (
    <CardPanel>
      <h6>El clima de {name} es: </h6>
      <p>{Math.round(main.temp - kelvin)} ºC</p>

      <p>Temperatura maxima: <br/> {Math.round(main.temp_max - kelvin)} ºC</p>
      <p>Temperatura minima: <br/> {Math.round(main.temp_min - kelvin)} ºC</p>
    </CardPanel>
  );
}

const CardPanel = styled.div`
  border-radius: 15px;
  width: 250px;
  border: 1.5px solid gray;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h6, p{
    text-align: center;
  }
  
`;

export default Clima;
