import {useDispatch, useSelector} from "react-redux";
import {createContact, selectContacts} from "~/store/contacts";
import {useNavigate} from "react-router-dom";

type Contact = {
    firstName: string,
    lastName: string,
    email: string,
}

export const useCreateContact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);

    const handleSubmit = (data: Contact): void => {
        if (!contacts.some(contact => contact.email.toLowerCase() === data.email.toLowerCase())) {
            dispatch(createContact(data));
        }

        navigate('/');
    }

    return [{handleSubmit}]
};