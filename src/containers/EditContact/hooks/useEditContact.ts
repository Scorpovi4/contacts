import {useDispatch, useSelector} from "react-redux";
import {selectContact, updateContact} from "~/store/contacts";
import {useParams, useNavigate} from "react-router-dom";

type Contact = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
}

export const useEditContact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams()
    const contact = useSelector(selectContact(id!));
    const handleSubmit = (data: Contact): void => {
        dispatch(updateContact(data));
        navigate('/');
    }

    return [{contact}, {handleSubmit}]
};