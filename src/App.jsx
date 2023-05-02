import styled from "styled-components";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import { useEffect, useState } from "react";
function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const { ciudad, pais } = busqueda;
  const [estadoConsulta, setEstadoConsulta] = useState(false);
  const [resultado, setResultado] = useState({});
  const [errorClima, setErrorClima] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      if (estadoConsulta) {
        const appId = "a82e7b835a885e778255c67370b40553";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setEstadoConsulta(false);
        //detecta errores en la consulta
        if (resultado.cod === "404") {
          setErrorClima(true);
        } else {
          setErrorClima(false);
        }
      }
    };
    consultarApi();
  }, [estadoConsulta]);

  let componente;
  if (errorClima) {
    componente = <ParrafoError>No hay resultados</ParrafoError>;
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <>
      <Header title=" 🌤️ Clima react App 🌦️" />
      <Content>
        <Formulario
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          setEstadoConsulta={setEstadoConsulta}
        />
        {componente}
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 3rem;
`;

const ParrafoError = styled.p`
  color: coral;
`;

export default App;
