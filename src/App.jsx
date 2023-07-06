import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import store from "./store";
import Inicio from "./pages/Inicio";
import Registro_paciente from "./pages/Registro_paciente";
import Personal from "./pages/Personal";
import Reportes from "./pages/Reportes";
import Calendario from "./pages/Calendario";
import Documentos from "./pages/Documentos";
import Comentarios from "./pages/Comentarios";
import Error from "./pages/Error";

import Activate from "./pages/Auth/Activate";
import Login from "./pages/Auth/Login";
import Login_registro from "./pages/Auth/Login_registro";
import ResetPassword from "./pages/Auth/ResetPassword";
import ResetPasswordConfirm from "./pages/Auth/ResetPasswordConfirm";
import Registro_personal  from "./pages/Registro_personal";
import MedicosForm from "./pages/Registro_Medicos";
import RegistroUbicacionForm from "./pages/Registro_Ubicacion";
import RegistroLlamadaForm from "./pages/Registro_informantes";
import RegistroDiagnosticoForm from "./pages/Registro_diagnostico";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";  
import FeedbackForm from "./pages/Registro_feedback";


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

          <Route path="/registro_medicos" element={<MedicosForm />}/>
          <Route path="/registro_ubicacion" element={<RegistroUbicacionForm />}/>
          <Route path="/registro_llamada" element={<RegistroLlamadaForm />}/>
          <Route path="/registro_diagnostico" element={<RegistroDiagnosticoForm />}/>
          <Route path="/feedback" element={<FeedbackForm />}/>
          
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
