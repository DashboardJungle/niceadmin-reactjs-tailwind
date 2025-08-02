
import { useContext, useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import EditTaskModal from "./TaskModal/EditTaskModal";
import { KanbanDataContext } from "src/context/kanbancontext/index";
import { Draggable } from "@hello-pangea/dnd";
import { Badge, Dropdown, DropdownItem } from "flowbite-react";
import { patchFetcher } from "src/api/globalFetcher";
import { mutate } from "swr";
interface TaskDataProps {
  task: { id: any };
  onDeleteTask: () => void;
  index: number;
  category: any;
}
const TaskData: React.FC<TaskDataProps> = ({
  task,
  onDeleteTask,
  index,
  category
}: any) => {
  const { setError, todoCategories, setTodoCategories } = useContext(KanbanDataContext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTask, setEditedTask] = useState(task);


  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);



  const handleDeleteClick = () => onDeleteTask(task.id);



  const handleSaveEditedTask = async (editedTaskData: { id: any }) => {
    try {
      const response = await mutate('/api/kanban', patchFetcher("/api/kanban/edit-task", {
        taskId: editedTaskData.id,
        newData: editedTaskData,
      }), false);
      if (response.status === 200) {
        setEditedTask(editedTaskData);
        let remainingTodos = todoCategories.map((item) => {
          if (item.name === category.name) {
            let updatedChild = item.child.map((task) => {
              if (task.id === editedTaskData.id) {
                return { ...task, editedTaskData }
              } return task
            });
            return { ...item, child: updatedChild }
          } else {
            return item
          }
        });
        setTodoCategories(remainingTodos);
      } else {
        throw new Error("Failed to edit task");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {

  }, [editedTask])



  const backgroundColor =
    editedTask.priority === 'Normal Priority'
      ? 'white'
      : editedTask.priority === 'Medium Priority'
        ? 'lightinfo'
        : editedTask.priority === 'High Priority'
          ? 'lighterror'
          : '#fff'


  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='flex flex-col gap-3 bg-white dark:bg-black rounded-md dark:shadow-dark-md shadow-md p-3'>
          {/* image */}
          <div>
            {editedTask.taskImage && (
              <img
                src={editedTask.taskImage}
                alt='Task Image'
                className='w-full h-full rounded-md'
              />
            )}
          </div>
          {/* title */}
          <div>
            <h5 className='text-base font-semibold line-clamp-2'>
              {editedTask.taskTitle}
            </h5>
          </div>
          {/* user and badge */}
          <div className='flex items-center justify-between'>
            <div className='flex -space-x-1.5'>

              {editedTask.assignedTo.map((user: any, index: number) => (
                <img
                  key={index}
                  src={user.avatar}
                  alt='user'
                  width={26}
                  height={26}
                  className='rounded-full bg-gray-300 dark:bg-neutral-500 border border-white dark:border-white/40'
                />
              ))}

            </div>
            <div>
              <Badge size={'sm'} color={`${backgroundColor}`}>
                {editedTask.priority}
              </Badge>
            </div>
          </div>
          <hr className='text-black/10 dark:text-white/10' />
          {/* footer links */}
          <div className='flex items-center justify-between'>
            {/* link and comment */}
            <div className='flex items-center gap-5'>
              <div className='flex items-center gap-2'>
                <Icon
                  icon={'solar:link-minimalistic-2-line-duotone'}
                  width={20}
                  height={20}
                />
                <p>{editedTask.attachments.length}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Icon
                  icon={'solar:chat-dots-line-duotone'}
                  width={20}
                  height={20}
                />
                <p>{editedTask.comments.length}</p>
              </div>
            </div>
            {/* edit options */}
            <div>
              <Dropdown
                label=''
                dismissOnClick={false}
                renderTrigger={() => (
                  <span className='btn-circle-hover cursor-pointer p-0 h-6 w-6 '>

                    <Icon
                      icon={'solar:menu-dots-bold-duotone'}
                      width={20}
                      height={20}
                    />
                  </span>
                )}>
                <DropdownItem
                  onClick={handleShowEditModal}
                  className='flex gap-2 items-center'>
                  <Icon icon='solar:pen-new-square-broken' height={15} />
                  Edit
                </DropdownItem>
                <DropdownItem
                  onClick={handleDeleteClick}
                  className='flex gap-2 items-center'>
                  <Icon
                    icon='solar:trash-bin-minimalistic-outline'
                    height={15}
                  />
                  Delete
                </DropdownItem>
              </Dropdown>
              <EditTaskModal
                show={showEditModal}
                onHide={handleCloseEditModal}
                task={task}
                editedTask={editedTask}
                onSave={handleSaveEditedTask}
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
export default TaskData;
