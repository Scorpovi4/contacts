import { Contact } from '~t/Contact.d';

export type Props = {
    contact?: Contact;
    isEdit?: boolean;
    onSubmit: (data: Contact) => void;
}