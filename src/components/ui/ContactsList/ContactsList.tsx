import './styles.scss';
import {ListGroup} from "react-bootstrap";
import Contact from "./components/Contact";

type Props = {
    contacts: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    }[] | undefined;
    onDelete: ((id: string) => void) | undefined;
};

function ContactsList({ contacts, onDelete }: Props) {
    return (
        <ListGroup>
            {contacts?.map((contact) => (
                <Contact key={contact.id} contact={contact} onDelete={onDelete} />
            ))}
        </ListGroup>
    )
}

export default ContactsList;
