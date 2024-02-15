import * as formik from 'formik';
import * as yup from 'yup';

export const useAddEditContactForm = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .min(3, 'must be at least 3 characters long')
            .max(25, 'must be less than 25 characters')
            .required(),
        lastName: yup
            .string()
            .min(2, 'must be at least 2 characters long')
            .max(30, 'must be less than 25 characters'),
        email: yup
            .string()
            .email()
            .required(),
    });

    return [{Formik, schema}]
}