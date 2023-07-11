import Layout from "../components/Layout";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AtencionForm = () => {
  const initialValues = {
    tipo_emergencia: '',
    tipo_atencion: '',
    traslado: false,
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
    id_personal: '',
    id_medico: '',
    id_diagnostico: '',
    id_paciente: '',
    id_informante_atencion: '',
  };

  const validationSchema = Yup.object().shape({
    tipo_emergencia: Yup.string().required('Campo requerido'),
    tipo_atencion: Yup.string().required('Campo requerido'),
    direccion: Yup.string().required('Campo requerido'),
    referencia: Yup.string().required('Campo requerido'),
    sector: Yup.string().required('Campo requerido'),
    sub_sector: Yup.string().required('Campo requerido'),
    distrito: Yup.string().required('Campo requerido'),
    provincia: Yup.string().required('Campo requerido'),
    region: Yup.string().required('Campo requerido'),
    hora_salida_ambulancia: Yup.date().required('Campo requerido'),
    hora_llegada: Yup.date().required('Campo requerido'),
    hora_salida: Yup.date().required('Campo requerido'),
    hora_llegada_EESS: Yup.date().required('Campo requerido'),
    id_personal: Yup.string().required('Campo requerido'),
    id_medico: Yup.string().required('Campo requerido'),
    id_diagnostico: Yup.string().required('Campo requerido'),
    id_paciente: Yup.string().required('Campo requerido'),
    id_informante_atencion: Yup.string().required('Campo requerido'),
  })

  const handleSubmit = (values) => {
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Datos del formulario:', values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Layout>
      <div className="flex items-center justify-center pt-32">
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={formik.handleSubmit}>
          
            {/* Aquí empieza el formulario */}
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Registro de Atención</h3>
                <p className="mt-1 text-sm text-gray-500">Por favor complete los siguientes campos del formulario:</p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* Tipo de Emergencia */}
                <div className="sm:col-span-3">
                  <label htmlFor="tipo_emergencia" className="block text-sm font-medium text-gray-700">
                    Tipo de Emergencia
                  </label>
                  <div className="mt-1">
                  <select
                    as="select"
                    id="tipo_emergencia"
                    name="tipo_emergencia"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tipo_emergencia}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Individual">Individual</option>
                    <option value="Masivo">Masivo</option>
                    <option value="No especificado">No especificado</option>
                  </select>

                    {formik.touched.tipo_emergencia && formik.errors.tipo_emergencia && (
                      <div className="text-red-500">{formik.errors.tipo_emergencia}</div>
                    )}
                  </div>
                </div>

                {/* Tipo de Atención */}
                <div className="sm:col-span-3">
                  <label htmlFor="tipo_atencion" className="block text-sm font-medium text-gray-700">
                    Tipo de Atención
                  </label>
                  <div className="mt-1">
                  <select
                    as="tipo_atencion"
                    id="tipo_atencion"
                    name="tipo_atencion"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tipo_atencion}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Requiere Traslado">En Foco</option>
                    <option value="Consulta Telefonica">Consulta Medica Telefonica</option>
                    <option value="Frustado">Frustado</option>
                    <option value="Cancelado">Cancelado</option>
                    <option value="Fallecido">Fallecido</option>
                    <option value="No Especificado">No especificado</option>
                  </select>
                    {formik.touched.tipo_atencion && formik.errors.tipo_atencion && (
                      <div className="text-red-500">{formik.errors.tipo_atencion}</div>
                    )}
                  </div>
                </div>

                {/* Traslado */}
                <div className="sm:col-span-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="traslado"
                        name="traslado"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.traslado}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="traslado" className="font-medium text-gray-700">
                        Traslado
                      </label>
                    </div>
                  </div>
                </div>

                {/* Dirección */}
                <div className="sm:col-span-3">
                  <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
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
                  <div className="sm:col-span-3">
                  <label htmlFor="referencia" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="sub_sector" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="distrito" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="provincia" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
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

                  {/* Hora de Salida de la Ambulancia */}
                  <div className="sm:col-span-3">
                    <label htmlFor="hora_salida_ambulancia" className="block text-sm font-medium text-gray-700">
                      Hora de Salida de la Ambulancia
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
                      {formik.touched.hora_salida_ambulancia && formik.errors.hora_salida_ambulancia && (
                        <div className="text-red-500">{formik.errors.hora_salida_ambulancia}</div>
                      )}
                    </div>
                  </div>

                  {/* Hora de Llegada */}
                  <div className="sm:col-span-3">
                    <label htmlFor="hora_llegada" className="block text-sm font-medium text-gray-700">
                      Hora de Llegada
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

                  {/* Hora de Salida */}
                  <div className="sm:col-span-3">
                    <label htmlFor="hora_salida" className="block text-sm font-medium text-gray-700">
                      Hora de Salida
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

                  {/* Hora de Llegada a Establecimiento de Salud */}
                  <div className="sm:col-span-3">
                    <label htmlFor="hora_llegada_EESS" className="block text-sm font-medium text-gray-700">

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
                    {formik.touched.hora_llegada_EESS && formik.errors.hora_llegada_EESS && (
                    <div className="text-red-500">{formik.errors.hora_llegada_EESS}</div>
                    )}
                    </div>
                    </div>

                  {/* ID Personal */}
                  <div className="sm:col-span-3">
                    <label htmlFor="id_personal" className="block text-sm font-medium text-gray-700">
                      ID Personal
                    </label>
                    <div className="mt-1">
                      <select
                        id="id_personal"
                        name="id_personal"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id_personal}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Seleccionar...</option>
                        {/* Aquí debes generar las opciones con los valores correspondientes */}
                      </select>
                      {formik.touched.id_personal && formik.errors.id_personal && (
                        <div className="text-red-500">{formik.errors.id_personal}</div>
                      )}
                    </div>
                  </div>

                  {/* ID Médico */}
                  <div className="sm:col-span-3">
                    <label htmlFor="id_medico" className="block text-sm font-medium text-gray-700">
                      ID Médico
                    </label>
                    <div className="mt-1">
                      <select
                        id="id_medico"
                        name="id_medico"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id_medico}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Seleccionar...</option>
                        {/* Aquí debes generar las opciones con los valores correspondientes */}
                      </select>
                      {formik.touched.id_medico && formik.errors.id_medico && (
                        <div className="text-red-500">{formik.errors.id_medico}</div>
                      )}
                    </div>
                  </div>

                  {/* ID Diagnóstico */}
                  <div className="sm:col-span-3">
                    <label htmlFor="id_diagnostico" className="block text-sm font-medium text-gray-700">
                      ID Diagnóstico
                    </label>
                    <div className="mt-1">
                      <select
                        id="id_diagnostico"
                        name="id_diagnostico"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id_diagnostico}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Seleccionar...</option>
                        {/* Aquí debes generar las opciones con los valores correspondientes */}
                      </select>
                      {formik.touched.id_diagnostico && formik.errors.id_diagnostico && (
                        <div className="text-red-500">{formik.errors.id_diagnostico}</div>
                      )}
                    </div>
                  </div>

                  {/* ID Paciente */}
                  <div className="sm:col-span-3">
                    <label htmlFor="id_paciente" className="block text-sm font-medium text-gray-700">
                      ID Paciente
                    </label>
                    <div className="mt-1">
                      <select
                        id="id_paciente"
                        name="id_paciente"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id_paciente}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">Seleccionar...</option>
                        {/* Aquí debes generar las opciones con los valores correspondientes */}
                      </select>
                      {formik.touched.id_paciente && formik.errors.id_paciente && (
                        <div className="text-red-500">{formik.errors.id_paciente}</div>
                      )}
                    </div>
                  </div>

                {/* ID Informante de Atención */}
                <div className="sm:col-span-3">
                  <label htmlFor="id_informante_atencion" className="block text-sm font-medium text-gray-700">
                    ID Informante de Atención
                  </label>
                  <div className="mt-1">
                    <select
                      id="id_informante_atencion"
                      name="id_informante_atencion"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.id_informante_atencion}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="">Seleccionar...</option>
                    {/* Aquí debes generar las opciones con los valores correspondientes */}
                    </select>
                    {formik.touched.id_informante_atencion && formik.errors.id_informante_atencion && (
                  <div className="text-red-500">{formik.errors.id_informante_atencion}</div>
                  )}
                  </div>
                  </div>

                  {/* Botón de Enviar */}
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-purple-500 text-white py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>

          </div>
         </div>
        </form>
      </div>   
    </Layout>
    )
};

export default AtencionForm;




