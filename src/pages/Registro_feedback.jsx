import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Layout from '../components/Layout';

const FeedbackForm = () => {
  const initialValues = {
    efficiency: '',
    satisfaction: '',
    staff: '',
    equipment: '',
    comments: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Aquí puedes realizar el envío del formulario o el procesamiento de los datos
  };

  const validateForm = (values) => {
    const errors = {};

    // Validación de campos requeridos
    if (!values.efficiency) {
      errors.efficiency = 'Este campo es requerido';
    }
    if (!values.satisfaction) {
      errors.satisfaction = 'Este campo es requerido';
    }
    if (!values.staff) {
      errors.staff = 'Este campo es requerido';
    }
    if (!values.equipment) {
      errors.equipment = 'Este campo es requerido';
    }

    return errors;
  };

  return (
    <Layout>
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Encuesta de Satisfaccion</h2>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
        {() => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="efficiency" className="block font-medium mb-2">
                ¿Cómo describirías la eficiencia y la rapidez en la respuesta del equipo de emergencias del SAMU de Ilo?
              </label>
              <Field
                as="select"
                id="efficiency"
                name="efficiency"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Seleccionar</option>
                <option value="excelente">Excelente</option>
                <option value="buena">Buena</option>
                <option value="regular">Regular</option>
                <option value="deficiente">Deficiente</option>
              </Field>
              <ErrorMessage name="efficiency" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="satisfaction" className="block font-medium mb-2">
                ¿En general, te sientes satisfecho/a con la calidad del servicio brindado por el centro de emergencias?
              </label>
              <Field
                as="select"
                id="satisfaction"
                name="satisfaction"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Seleccionar</option>
                <option value="muy-satisfecho">Muy satisfecho/a</option>
                <option value="satisfecho">Satisfecho/a</option>
                <option value="neutral">Neutral</option>
                <option value="insatisfecho">Insatisfecho/a</option>
                <option value="muy-insatisfecho">Muy insatisfecho/a</option>
              </Field>
              <ErrorMessage name="satisfaction" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="staff" className="block font-medium mb-2">
                ¿Consideras que el personal del SAMU de Ilo fue amable, comprensivo y profesional durante la atención de tu emergencia?
              </label>
              <Field
                as="select"
                id="staff"
                name="staff"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Seleccionar</option>
                <option value="si-totalmente">Sí, totalmente</option>
                <option value="en-su-mayoria-si">En su mayoría sí</option>
                <option value="en-algunos-casos">En algunos casos</option>
                <option value="en-su-mayoria-no">No, en su mayoría no</option>
                <option value="no-en-absoluto">No, en absoluto</option>
              </Field>
              <ErrorMessage name="staff" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="equipment" className="block font-medium mb-2">
                ¿En qué medida crees que el SAMU de Ilo cumple con las expectativas en cuanto a equipamiento y recursos para brindar atención de emergencia de calidad?
              </label>
              <Field
                as="select"
                id="equipment"
                name="equipment"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Seleccionar</option>
                <option value="cumple-completamente">Cumple completamente</option>
                <option value="cumple-en-su-mayoria">Cumple en su mayoría</option>
                <option value="cumple-parcialmente">Cumple parcialmente</option>
                <option value="no-cumple-en-su-mayoria">No cumple en su mayoría</option>
                <option value="no-cumple-en-absoluto">No cumple en absoluto</option>
              </Field>
              <ErrorMessage name="equipment" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="comments" className="block font-medium mb-2">
                ¿Tienes alguna sugerencia o comentario adicional que pueda ayudar al SAMU de Ilo a mejorar su desempeño y la satisfacción de los usuarios?
              </label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Enviar Feedback
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </Layout>
  );
};

export default FeedbackForm;
