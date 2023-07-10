import Layout from "../components/Layout";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistroPacienteForm = () => {
  const initialValues = {
    nombres: '',
    apellidos: '',
    genero: '',
    dni: '',
    tipo_seguro: '',
    empresa_aseguradora: '',
    edad: '',
    tipo_edad: '',
    prioridad_emergencia: '',
    accidente: '',
    condicion_antes: '',
    condicion_despues: '',
    telefono_paciente: '',
  };

  const validationSchema = Yup.object().shape({
    nombres: Yup.string().required('Este campo es requerido'),
    apellidos: Yup.string().required('Este campo es requerido'),
    genero: Yup.string().required('Este campo es requerido'),
    dni: Yup.string().required('Este campo es requerido'),
    edad: Yup.number().required('Este campo es requerido').positive().integer(),
    tipo_edad: Yup.string().required('Este campo es requerido'),
    telefono_paciente: Yup.string().required('Este campo es requerido'),
  });

    // Función para manejar el envío del formulario
  const handleSubmit = (values) => {
    // Si la opción "Hora actual" está marcada, asignamos la hora actual al campo "hora"
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(values);
  }

  return (
    <Layout>
    <div className="flex items-center justify-center pt-32">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Registro de Datos del Paciente
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* Nombres del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                    Nombres
                  </label>
                  <Field
                    type="text"
                    id="nombres"
                    name="nombres"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage name="nombres" component="div" className="text-red-500" />
                </div>

                {/* Apellidos del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">
                    Apellidos
                  </label>
                  <Field
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage name="apellidos" component="div" className="text-red-500" />
                </div>

                {/* Género del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="genero" className="block text-sm font-medium text-gray-700">
                    Género
                  </label>
                  <Field
                    as="select"
                    id="genero"
                    name="genero"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="No especificado">No especificado</option>
                  </Field>
                  <ErrorMessage name="genero" component="div" className="text-red-500" />
                </div>

                {/* DNI del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                    DNI
                  </label>
                  <Field
                    type="text"
                    id="dni"
                    name="dni"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage name="dni" component="div" className="text-red-500" />
                </div>

                {/* Tipo de Seguro */}
                <div className="sm:col-span-3">
                  <label htmlFor="tipo_seguro" className="block text-sm font-medium text-gray-700">
                    Tipo de Seguro
                  </label>
                  <Field
                    type="text"
                    id="tipo_seguro"
                    name="tipo_seguro"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Empresa Aseguradora */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="empresa_aseguradora"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Empresa Aseguradora
                  </label>
                  <Field
                    type="text"
                    id="empresa_aseguradora"
                    name="empresa_aseguradora"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Edad del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="edad" className="block text-sm font-medium text-gray-700">
                    Edad
                  </label>
                  <Field
                    type="number"
                    id="edad"
                    name="edad"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage name="edad" component="div" className="text-red-500" />
                </div>

                {/* Tipo de Edad */}
                <div className="sm:col-span-3">
                  <label htmlFor="tipo_edad" className="block text-sm font-medium text-gray-700">
                    Tipo de Edad
                  </label>
                  <Field
                    as="select"
                    id="tipo_edad"
                    name="tipo_edad"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Meses">0-4</option>
                    <option value="Años">5-9</option>
                    <option value="Años">10-14</option>
                    <option value="Años">15-19</option>
                    <option value="Años">20-24</option>
                    <option value="Años">25-29</option>
                    <option value="Años">30-34</option>
                    <option value="Años">35-39</option>
                    <option value="Años">40-44</option>
                    <option value="Años">45-49</option>
                    <option value="Años">50-54</option>
                    <option value="Años">55-59</option>
                    <option value="Años">60-64</option>
                    <option value="Años">65-69</option>
                    <option value="Años">70-74</option>
                    <option value="Años">75-79</option>
                    <option value="Años">80+</option>
                  </Field>
                  <ErrorMessage name="tipo_edad" component="div" className="text-red-500" />
                </div>

                {/* Prioridad de Emergencia */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="prioridad_emergencia"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prioridad de Emergencia
                  </label>
                  <Field
                    type="text"
                    id="prioridad_emergencia"
                    name="prioridad_emergencia"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Accidente */}
                <div className="sm:col-span-3">
                  <label htmlFor="accidente" className="block text-sm font-medium text-gray-700">
                    Accidente
                  </label>
                  <Field
                    type="text"
                    id="accidente"
                    name="accidente"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Condición Antes */}
                <div className="sm:col-span-3">
                  <label htmlFor="condicion_antes" className="block text-sm font-medium text-gray-700">
                    Condición Antes
                  </label>
                  <Field
                    as="textarea"
                    id="condicion_antes"
                    name="condicion_antes"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Condición Después */}
                <div className="sm:col-span-3">
                  <label htmlFor="condicion_despues" className="block text-sm font-medium text-gray-700">
                    Condición Después
                  </label>
                  <Field
                    as="textarea"
                    id="condicion_despues"
                    name="condicion_despues"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Teléfono del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="telefono_paciente" className="block text-sm font-medium text-gray-700">
                    Teléfono del Paciente
                  </label>
                  <Field
                    type="text"
                    id="telefono_paciente"
                    name="telefono_paciente"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage name="telefono_paciente" component="div" className="text-red-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Guardar
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
    </Layout>
  );
};

export default RegistroPacienteForm;
