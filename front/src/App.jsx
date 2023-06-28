
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import store from "./store";

import Activate from "./pages/Auth/Activate";
import Login from "./pages/Auth/Login";
import Login_registro from "./pages/Auth/Login_registro";
import ResetPassword from "./pages/Auth/ResetPassword";
import ResetPasswordConfirm from "./pages/Auth/ResetPasswordConfirm";
import Calendario from "./pages/Calendario";
import Comentarios from "./pages/Comentarios";
import Documentos from "./pages/Documentos";
import Error from "./pages/Error";
import Inicio from "./pages/Inicio";
import Personal from "./pages/Personal";
import Registro_paciente from "./pages/Registro_paciente";
import Reportes from "./pages/Reportes";

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
          <Route path="/comentarios" element={<Comentarios />} />
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
