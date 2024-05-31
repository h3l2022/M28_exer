import Perfil from "./Components/Perfil";
import Formulario from "./Components/Formulario";
import Tabela from "./Components/Tabela"; 

function App() {
  return (
    <>
    <Tabela />
    <Perfil nome="Calcule seu IMC" endereco="https://static.vecteezy.com/ti/vetor-gratis/p3/20717578-placa-simbolo-saude-logotipo-hospital-vermelho-cruz-e-a-coracao-icone-e-uma-simbolo-do-saude-vetor.jpg" />
    
    <Formulario />
    </>
  )
}

export default App
