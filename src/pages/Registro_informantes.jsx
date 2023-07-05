import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';


const RegistroLlamadaForm = () => {
    const initialValues = {
        tipo_llamada: '',
        fecha: '',
        hora: '',
        turno: '',
        telefono_infor: '',
        nombres_infor: '',
        apellidos_infor: '',
        gen_infor: '',
        dni_infor: '',
        nombreSeleccionado:'',
    };

    const validationSchema = Yup.object().shape({
        tipo_llamada: Yup.string().required('Campo requerido'),
        fecha: Yup.date().required('Campo requerido'),
        hora: Yup.string().required('Campo requerido'),
        turno: Yup.string().required('Campo requerido'),
        telefono_infor: Yup.string()
        .required('Campo requerido')
        .matches(/^[0-9]{9}$/, "Ingrese el Telefono"),
        nombres_infor: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Ingrese los nombres sin ningun caracter")
        .required('Campo requerido'),
        apellidos_infor: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Ingrese los nombres sin ningun caracter")
        .required('Campo requerido'),
        gen_infor: Yup.string().required('Campo requerido'),
        dni_infor: Yup.string()
        .required("Ingrese el DNI")
        .matches(/^[0-9]{8}$/, "El DNI debe tener 8 dígitos"),
        nombreSeleccionado: Yup.string()
        .required("ingrese el personal de registro")
    
    });

    // Estado para almacenar la lista de personal de trabajo
    const [personalTrabajo, setPersonalTrabajo] = useState([]);

    // Obtener la lista de personal de trabajo desde una API o fuente de datos
    const obtenerPersonalTrabajo = () => {
    // Lógica para obtener la lista de personal de trabajo (ejemplo)
    const listaPersonal = [
        { id_personal: 1, nombres: 'John Doe' },
        { id_personal: 2, nombres: 'Jane Smith' },
        // Otros elementos...
    ];
    setPersonalTrabajo(listaPersonal);
    };


    const handleSubmit = (values) => {
        // Buscar el ID del personal de trabajo seleccionado
        const personalSeleccionado = personalTrabajo.find((personal) => personal.nombres === values.nombreSeleccionado);
        if (personalSeleccionado) {
            values.idPersonalSeleccionado = personalSeleccionado.id_personal;
        }

        delete values.nombreSeleccionado;

        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log("Datos del formulario:", values);
      };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    useEffect(() => {
        // Obtener la lista de personal de trabajo al cargar el componente
        obtenerPersonalTrabajo();
      }, []);


  return (
    <Layout>
    <div className="flex items-center justify-center pt-32">
      <form className="space-y-8 divide-y divide-gray-200" onSubmit={formik.handleSubmit}>
        <div className="space-y-8 divide-y divide-gray-200">
          {/* Aquí empieza el formulario */}
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Registro de Llamada</h3>
              <p className="mt-1 text-sm text-gray-500">Por favor complete los siguientes campos del formulario:</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Tipo de Llamada */}
              <div className="sm:col-span-3">
                <label htmlFor="tipo_llamada" className="block text-sm font-medium text-gray-700">
                  Tipo de Llamada
                </label>
                <div className="mt-1">
                <select
                    id="tipo_llamada"
                    name="tipo_llamada"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tipo_llamada}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Masculino">Apoyo al Traslado</option>
                    <option value="Femenino">Consulta Por Telefono</option>
                    <option value="Femenino">Llamada por Emergencia</option>
                    <option value="Femenino">Otros Tipos</option>
                  </select>
                  {formik.touched.tipo_llamada && formik.errors.tipo_llamada && (
                    <div className="text-red-500">{formik.errors.tipo_llamada}</div>
                  )}
                </div>
              </div>

              {/* Fecha */}
              <div className="sm:col-span-3">
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
                  Fecha
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fecha}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.fecha && formik.errors.fecha && (
                    <div className="text-red-500">{formik.errors.fecha}</div>
                  )}
                </div>
              </div>

              {/* Hora */}
            
            <div className="sm:col-span-3">
            <label htmlFor="hora" className="block text-sm font-medium text-gray-700">
                Hora
            </label>
            <div className="mt-1">
                <input
                type="time"
                id="hora"
                name="hora"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hora}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {formik.touched.hora && formik.errors.hora && (
                <div className="text-red-500">{formik.errors.hora}</div>
                )}
            </div>
            </div>


              {/* Turno */}
              <div className="sm:col-span-3">
                <label htmlFor="turno" className="block text-sm font-medium text-gray-700">
                  Turno
                </label>
                <div className="mt-1">
                <select
                    id="turno"
                    name="turno"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.turno}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="DIA">DIA</option>
                    <option value="TARDE">TARDE</option>
                    <option value="NOCHE">NOCHE</option>
                  </select>
                  {formik.touched.turno && formik.errors.turno && (
                    <div className="text-red-500">{formik.errors.turno}</div>
                  )}
                </div>
              </div>

              {/* Teléfono Informante */}
              <div className="sm:col-span-3">
                <label htmlFor="telefono_infor" className="block text-sm font-medium text-gray-700">
                  Teléfono Informante
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="telefono_infor"
                    name="telefono_infor"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.telefono_infor}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.telefono_infor && formik.errors.telefono_infor && (
                    <div className="text-red-500">{formik.errors.telefono_infor}</div>
                  )}
                </div>
              </div>

              {/* Nombres del Informante */}
              <div className="sm:col-span-3">
                <label htmlFor="nombres_infor" className="block text-sm font-medium text-gray-700">
                  Nombres del Informante
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="nombres_infor"
                    name="nombres_infor"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombres_infor}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.nombres_infor && formik.errors.nombres_infor && (
                    <div className="text-red-500">{formik.errors.nombres_infor}</div>
                  )}
                </div>
              </div>

              {/* Apellidos del Informante */}
              <div className="sm:col-span-3">
                <label htmlFor="apellidos_infor" className="block text-sm font-medium text-gray-700">
                  Apellidos del Informante
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="apellidos_infor"
                    name="apellidos_infor"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apellidos_infor}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.apellidos_infor && formik.errors.apellidos_infor && (
                    <div className="text-red-500">{formik.errors.apellidos_infor}</div>
                  )}
                </div>
              </div>

               {/* Género del Informante */}
               <div className="sm:col-span-3">
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                  Género del Informante
                </label>
                <div className="mt-1">
                <select
                    id="gen_infor"
                    name="gen_infor"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gen_infor}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otros">Otros</option>
                  </select>
                  {formik.touched.gen_infor && formik.errors.gen_infor && (
                    <div className="text-red-500">{formik.errors.gen_infor}</div>
                  )}
                </div>
              </div>

              {/* DNI del Informante */}
              <div className="sm:col-span-3">
                <label htmlFor="dni_infor" className="block text-sm font-medium text-gray-700">
                  DNI del Informante
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="dni_infor"
                    name="dni_infor"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dni_infor}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.dni_infor && formik.errors.dni_infor && (
                    <div className="text-red-500">{formik.errors.dni_infor}</div>
                  )}
                </div>
              </div>


              {/* Registrador de la llamada */}
              <div className="sm:col-span-3">
                <label htmlFor="nombreSeleccionado" className="block text-sm font-medium text-gray-700">
                Nombre de personal de trabajo
                </label>
                <div className="mt-1">
                <select
                    id="nombreSeleccionado"
                    name="nombreSeleccionado"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombreSeleccionado}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="">Seleccionar...</option>
                    {personalTrabajo.map((personal) => (
                    <option key={personal.id_personal} value={personal.nombres}>
                        {personal.nombres}
                    </option>
                    ))}
                </select>
                {formik.touched.nombreSeleccionado && formik.errors.nombreSeleccionado && (
                    <div className="text-red-500">{formik.errors.nombreSeleccionado}</div>
                )}
                </div>
             </div>

            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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

export default RegistroLlamadaForm;
