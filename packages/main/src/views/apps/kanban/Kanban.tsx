
import TaskManager from "src/components/apps/kanban/TaskManager";
import CardBox from "src/components/shared/CardBox";
import { KanbanDataContextProvider } from "src/context/kanbancontext";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
        href: '/',
        text: 'Dashboard',
    },
    {
        href: '',
        text: 'Kanban',
    },
]

function kanban() {
    return (
        <>
            <KanbanDataContextProvider>
                <BreadcrumbComp title="Kanban app" links={BCrumb} />
                <CardBox>
                    <TaskManager />
                </CardBox>
            </KanbanDataContextProvider>
        </>
    )
}
export default kanban
