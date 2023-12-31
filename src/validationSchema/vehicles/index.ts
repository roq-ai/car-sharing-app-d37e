import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  location: yup.string().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable(),
});
