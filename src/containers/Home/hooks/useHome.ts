import {useDispatch, useSelector} from "react-redux";
import {selectContacts} from "~/store/contacts";
import {deleteContact} from "~/store/contacts";

export const useHome = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const onDelete = (id: string): void => {
        dispatch(deleteContact(id))
    }
    return [{ contacts }, {onDelete}];
}