import AddEditContactForm from "~c/ui/AddEditContactForm/index";
import MainLayout from '~/layouts/Main';
import {useEditContact} from "./hooks/useEditContact.ts";
function EditContact() {
    const [{contact}, { handleSubmit}] = useEditContact();

    return (
        <MainLayout>
            <div className='view-content pt-3'>
                <AddEditContactForm contact={ contact } isEdit onSubmit={handleSubmit} />
            </div>
        </MainLayout>
    );
}

export default EditContact;