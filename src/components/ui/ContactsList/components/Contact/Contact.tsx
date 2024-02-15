import { Link } from "react-router-dom";

import {CloseButton, ListGroup} from "react-bootstrap";
import './styles.scss';

type Props = {
    contact: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    }
    onDelete: ((id: string) => void) | undefined;
}

function Contact({contact: {id, firstName, lastName, email}, onDelete} : Props) {
    return (
        <ListGroup.Item
        variant="dark"
        className='d-flex justify-content-between align-items-center p-0 mb-3'>
            <Link to={`/edit-contact/${id}`} className='flex-grow-1 p-3'>
                {`${firstName} ${lastName} ${email}`}
            </Link>

            <CloseButton
                className='p-3'
                onClick={() => onDelete?.(id)} />
        </ListGroup.Item>
    );
}

export default Contact;
