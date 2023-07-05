import Layout from '../components/Layout'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistroUbicacionForm = () => {
  const formik = useFormik({
    initialValues: {
      direccion: '',
      referencia: '',
      sector: '',
      sub_sector: '',
      distrito: '',
      provincia: '',
      region: '',
      hora_salida_ambulancia: '',
      hora_llegada: '',
      hora_salida: '',
      hora_llegada_EESS: '',
    },
    validationSchema: Yup.object({
      direccion: Yup.string().required('Este campo es obligatorio'),
      referencia: Yup.string().required('Este campo es obligatorio'),
      sector: Yup.string().required('Este campo es obligatorio'),
      sub_sector: Yup.string().required('Este campo es obligatorio'),
      distrito: Yup.string().required('Este campo es obligatorio'),
      provincia: Yup.string().required('Este campo es obligatorio'),
      region: Yup.string().required('Este campo es obligatorio'),
      hora_salida_ambulancia: Yup.date().required('Este campo es obligatorio'),
      hora_llegada: Yup.date().required('Este campo es obligatorio'),
      hora_salida: Yup.date().required('Este campo es obligatorio'),
      hora_llegada_EESS: Yup.date().required('Este campo es obligatorio'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Layout>
        <div className="flex items-center justify-center pt-32">
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={formik.handleSubmit}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Registro de Ubicación
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Por favor complete los siguientes campos del formulario:
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Direccion */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="direccion"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.direccion}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.direccion && formik.errors.direccion && (
                    <div className="text-red-500">{formik.errors.direccion}</div>
                  )}
                </div>
              </div>

              {/* Referencia */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="referencia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Referencia
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="referencia"
                    name="referencia"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.referencia}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.referencia && formik.errors.referencia && (
                    <div className="text-red-500">{formik.errors.referencia}</div>
                  )}
                </div>
              </div>

              {/* Sector */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="sector"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sector
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="sector"
                    name="sector"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sector}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.sector && formik.errors.sector && (
                    <div className="text-red-500">{formik.errors.sector}</div>
                  )}
                </div>
              </div>

              {/* Sub Sector */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="sub_sector"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sub Sector
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="sub_sector"
                    name="sub_sector"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sub_sector}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.sub_sector && formik.errors.sub_sector && (
                    <div className="text-red-500">{formik.errors.sub_sector}</div>
                  )}
                </div>
              </div>

              {/* Distrito */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="distrito"
                  className="block text-sm font-medium text-gray-700"
                >
                  Distrito
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="distrito"
                    name="distrito"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.distrito}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.distrito && formik.errors.distrito && (
                    <div className="text-red-500">{formik.errors.distrito}</div>
                  )}
                </div>
              </div>

              {/* Provincia */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="provincia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Provincia
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="provincia"
                    name="provincia"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.provincia}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.provincia && formik.errors.provincia && (
                    <div className="text-red-500">{formik.errors.provincia}</div>
                  )}
                </div>
              </div>

              {/* Región */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  Región
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="region"
                    name="region"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.region}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.region && formik.errors.region && (
                    <div className="text-red-500">{formik.errors.region}</div>
                  )}
                </div>
              </div>

              {/* Hora Salida Ambulancia */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="hora_salida_ambulancia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hora Salida Ambulancia
                </label>
                <div className="mt-1">
                  <input
                    type="datetime-local"
                    id="hora_salida_ambulancia"
                    name="hora_salida_ambulancia"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.hora_salida_ambulancia}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.hora_salida_ambulancia &&
                    formik.errors.hora_salida_ambulancia && (
                      <div className="text-red-500">
                        {formik.errors.hora_salida_ambulancia}
                      </div>
                    )}
                </div>
              </div>

              {/* Hora Llegada */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="hora_llegada"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hora Llegada
                </label>
                <div className="mt-1">
                  <input
                    type="datetime-local"
                    id="hora_llegada"
                    name="hora_llegada"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.hora_llegada}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.hora_llegada && formik.errors.hora_llegada && (
                    <div className="text-red-500">{formik.errors.hora_llegada}</div>
                  )}
                </div>
              </div>

              {/* Hora Salida */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="hora_salida"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hora Salida
                </label>
                <div className="mt-1">
                  <input
                    type="datetime-local"
                    id="hora_salida"
                    name="hora_salida"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.hora_salida}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.hora_salida && formik.errors.hora_salida && (
                    <div className="text-red-500">{formik.errors.hora_salida}</div>
                  )}
                </div>
              </div>

              {/* Hora Llegada EESS */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="hora_llegada_EESS"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hora Llegada EESS
                </label>
                <div className="mt-1">
                  <input
                    type="datetime-local"
                    id="hora_llegada_EESS"
                    name="hora_llegada_EESS"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.hora_llegada_EESS}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.hora_llegada_EESS &&
                    formik.errors.hora_llegada_EESS && (
                      <div className="text-red-500">
                        {formik.errors.hora_llegada_EESS}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
    </Layout>
    
  );
};

export default RegistroUbicacionForm;
