//import Login from "./components/props/Login.jsx"
//import Login from "./components/state/Login.jsx"
//import Login from "./components/CSS/Login.jsx"
//import Login from "./components/tailwind/Login.jsx"
//import PessoaFisica from "./components/cadastro/PessoaFisica.jsx";
//import PessoaJuridica from "./components/cadastro/PessoaJuridica.jsx";
//import Login from "./components/antd/Login.jsx"
//import PessoaFisica from "./components/cadastro/PessoaFisica.jsx";
//import PessoaFisica from "./components/antd/PessoaFisica.jsx";
//import PessoaFisica from "./components/cadastro/PessoaFisica";
//import PessoaForm from "./components/cadastrapessoa/PessoaForm.jsx"
//import PessoaForm from "./components/cadastrapessoa/PessoaFormOO.jsx"
//import PessoaForm from "./components/cadastrapessoa/PessoaFormOO.jsx"

/// necessário apenas a partir da utilização de rotas para outras telas
import { BrowserRouter as Router } from "react-router-dom";
//import AppRoutes from "./routes/AppRoutes.jsx";
import AppRoutes from "./routes/AppRoutesV2.jsx";

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App