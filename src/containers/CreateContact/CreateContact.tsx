import MainLayout from '~/layouts/main';
import AddEditContactForm from "~c/ui/AddEditContactForm";
import {useCreateContact} from "./hooks/useCreateContact.ts";
function CreateContact() {
    const [{handleSubmit}] = useCreateContact();
    return (
        <MainLayout>
            <div className='view-content pt-3'>
                <AddEditContactForm onSubmit={handleSubmit} />
            </div>
        </MainLayout>
    );
}

export default CreateContact;