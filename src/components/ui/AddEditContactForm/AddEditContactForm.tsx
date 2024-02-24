import {Form, Col, Button, InputGroup} from 'react-bootstrap';
import { Props } from './AddEditContactForm.d';
import { useAddEditContactForm } from './hooks/useAddEditContactForm.ts';
import { v4 as uuid } from 'uuid';

import './styles.scss';

function AddEditContactForm({ contact, isEdit, onSubmit }: Props) {
    const [{Formik, schema}] = useAddEditContactForm();
    return  (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
                id: contact?.id || uuid(),
                firstName: contact?.firstName || '',
                lastName: contact?.lastName || '',
                email: contact?.email || '',
            }}
        >
            {({ handleSubmit, handleChange, values, errors  }) => {

                return (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group as={Col} md="4" controlId="firstName" className='w-100 pb-4'>
                            <Form.Label className='text-white'>First name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Jane"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="lastName" className='w-100 pb-4'>
                            <Form.Label className='text-white'>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Doe"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="email" className='w-100 pb-4'>
                            <Form.Label className='text-white'>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="sample@gmail.com"
                                    aria-describedby="inputGroupPrepend"
                                    name="email"
                                    value={values.email}
                                    onChange={isEdit ? () => {
                                    } : handleChange}
                                    isInvalid={!!errors.email}
                                    disabled={isEdit}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                )
            }}
        </Formik>);
}

export default AddEditContactForm;
