import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  duration: yup.number().integer().required(),
  vehicle_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
