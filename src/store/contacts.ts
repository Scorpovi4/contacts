import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'

type NewContact = {
    firstName: string;
    lastName: string;
    email: string;
}

type ContactId = {
    id: string;
}

type Contact = NewContact & ContactId

const mockContact: Contact[] = [{
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
}, {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@gmail.com'}
]

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: mockContact || []
    },
    reducers: {
        createContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload)
        },
        updateContact: (state, action: PayloadAction<Contact>) => {
            state.contacts = state.contacts.map(contact => {
                if (contact.id === action.payload.id) {
                    return action.payload
                }
                return contact
            })
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { createContact, updateContact, deleteContact } = contactsSlice.actions


export const selectContacts = (state: { contacts: Contact[] }) => state.contacts

export const selectContact = (id: string) => {
    return createSelector(
        selectContacts,
        (contacts) => contacts.find(contact => contact.id === id)
    )
}

export default contactsSlice.reducer