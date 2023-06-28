
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import store from "./store";



import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

import Inicio from "./pages/Inicio";
import Registro_paciente from "./pages/Registro_paciente";
import Personal from "./pages/Personal";
import Reportes from "./pages/Reportes";
import Calendario from "./pages/Calendario";
import Documentos from "./pages/Documentos";
import Comentarios from "./pages/Comentarios";
import Error from "./pages/Error";

import Login from "./pages/Auth/Login";
import Login_registro from "./pages/Auth/Login_registro";
import ResetPassword from "./pages/Auth/ResetPassword";
import ResetPasswordConfirm from "./pages/Auth/ResetPasswordConfirm";
import Registro_personal  from "./pages/Registro_personal";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Display paginas principales */}
          <Route path="/" element={<Inicio />} />
          <Route path="/registro_paciente" element={<Registro_paciente />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/reporte" element={<Reportes />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/comentarios" element={<Comentarios />}/>
          <Route path="/registro_personal" element={<Registro_personal />}/>
          {/* Display de Autenticacion de usuario */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login_registro" element={<Login_registro />} />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route exact path="/reset_password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          {/* Display de Error 404 */}
          <Route path="*" element={<Error />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
