export type NewContact = {
    firstName: string;
    lastName: string;
    email: string;
}

export type ContactId = {
    id: string;
}

export type Contact = NewContact & ContactId