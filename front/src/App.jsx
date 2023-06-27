import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Activate from "./pages/Auth/Activate";
import ResetPassword from "./pages/Auth/ResetPassword";
import ResetPasswordConfirm from "./pages/Auth/ResetPasswordConfirm";

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
          {/* Display de Autenticacion de usuario */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login_registro" element={<Login_registro/>}/>
          <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
          <Route exact path='/reset_password' element={<ResetPassword/>} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
          {/* Display de Error 404 */}
          <Route path="*" element={<Error />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
