import ContactsList from "~c/ui/ContactsList";
import {useHome} from "./hooks/useHome";
import MainLayout from '~/layouts/main';
function HomePage() {
    const [{ contacts }, {onDelete}] = useHome();

    return (
        <MainLayout>
            <div className="view-content pt-3">
                <ContactsList
                    contacts={contacts}
                    onDelete={onDelete}
                />
            </div>
        </MainLayout>
    );
}

export default HomePage;
