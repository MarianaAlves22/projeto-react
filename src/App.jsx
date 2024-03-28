import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposLis";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario ] = useState('');

  return (
    <div className="div">
      <input className="input" type="text" placeholder="Digite aqui o nome do usuário" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario></Formulario>
    )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </div>
  )
}

export default App
