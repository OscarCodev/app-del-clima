import React, { useState } from "react";
import styled from "styled-components";

function Formulario({ busqueda, setBusqueda, setEstadoConsulta }) {
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  //Funcion que coloca los elementos en el state
  const handleOnChange = ({ target }) => {
    setBusqueda({
      ...busqueda,
      [target.name]: target.value,
    });
    setError(false);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //establecer estado de consulta
    setEstadoConsulta(true);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {error ? (
        <ParrafoError>Todos los campos son obligatorios</ParrafoError>
      ) : null}
      <label>Ciudad:</label>
      <input
        type="text"
        name="ciudad"
        value={ciudad}
        onChange={handleOnChange}
      />
      <label>País: </label>
      <select name="pais" value={pais} onChange={handleOnChange}>
        <option value="">Seleccione un pais:</option>
        <option value="US">Estados Unidos</option>
        <option value="MX">México</option>
        <option value="AR">Argentina</option>
        <option value="CO">Colombia</option>
        <option value="CR">Costa Rica</option>
        <option value="ES">España</option>
        <option value="PE">Perú</option>
      </select>
      <input type="submit" value="Buscar clima" />
    </form>
  );
}

const ParrafoError = styled.p`
  color: coral;
`;

export default Formulario;
