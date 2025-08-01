

import CreateTicketForm from "src/components/apps/tickets/CreateTicketForm";
import { TicketProvider } from "src/context/TicketContext";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
    {
        href: '/',
        text: 'Dashboard',
    },
    {
        href: '',
        text: 'Tickets',
    },
]
const CreateTickets = () => {
    return (
        <>

            <BreadcrumbComp title="Tickets App" links={BCrumb} />
            <TicketProvider>
                <CreateTicketForm />
            </TicketProvider>


        </>
    );
};

export default CreateTickets;