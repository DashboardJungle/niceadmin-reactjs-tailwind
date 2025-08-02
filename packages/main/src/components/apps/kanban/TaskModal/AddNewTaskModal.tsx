
import "react-datepicker/dist/react-datepicker.css";

import { Modal, Button, TextInput, Select, ModalBody, ModalFooter, ModalHeader, Dropdown, DropdownItem, Checkbox, Label } from "flowbite-react";
import { AllassignedTo, TaskProperties } from "src/api/kanban/KanbanData";
import { Icon } from "@iconify/react/dist/iconify.js";


function AddNewList({
  show,
  onHide,
  onSave,
  newTaskData,
  setNewTaskData,
  updateTasks,
}: any) {

  const { taskTitle, taskText, priority, taskImage } = newTaskData


  const handleSave = () => {
    onSave();
    updateTasks();
    onHide();
  };

  const isFormValid = () => {
    return taskTitle && taskText && priority
  }

  return (
    <Modal size={'lg'} show={show} onClose={onHide}>
      <ModalHeader className='pb-0'>Add Task</ModalHeader>
      <ModalBody>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12'>
            <TextInput
              id='task'
              value={taskTitle}
              className='form-control'
              placeholder='Task'
              onChange={(e) =>
                setNewTaskData({ ...newTaskData, taskTitle: e.target.value })
              }
            />
          </div>
          <div className='col-span-12'>
            <TextInput
              id='taskText'
              value={taskText}
              className='!form-control'
              placeholder='Description'
              onChange={(e) =>
                setNewTaskData({ ...newTaskData, taskText: e.target.value })
              }
            />
          </div>
          <div className='col-span-12'>
            <TextInput
              id='taskImage'
              value={taskImage}
              className='!form-control'
              placeholder='Task Image'
              onChange={(e) =>
                setNewTaskData({ ...newTaskData, taskImage: e.target.value })
              }
            />
            {taskImage !== undefined && (
              <img
                src={taskImage}
                alt='Selected'
                style={{ width: '100%', height: 'auto', marginTop: '8px' }}
              />
            )}
          </div>
          <div className='col-span-12'>
            <Select
              id='askProperty-label'
              value={priority}
              className='select-md'
              onChange={(e) =>
                setNewTaskData({ ...newTaskData, priority: e.target.value })
              }>
              <option value=''>Select Task Priority</option>

              {TaskProperties.map((property) => (
                <option key={property} value={property}>
                  {property}
                </option>
              ))}
            </Select>
          </div>
          <div className='col-span-12 w-fit flex flex-col gap-2'>
            <Label>Assign To</Label>
            <div className='flex items-center'>
              <div>
                {/* Preview of selected users */}
                {newTaskData.assignedTo.length > 0 && (
                  <div className='flex -space-x-2'>
                    {newTaskData.assignedTo.map((user: any) => (
                      <img
                        key={user.name}
                        src={user.avatar}
                        alt={user.name}
                        width={36}
                        height={36}
                        className='rounded-full bg-gray-300 dark:bg-neutral-500 border border-white dark:border-white/40'
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* add user assign */}
              <Dropdown
                label=''
                dismissOnClick={false}
                className='max-h-40 overflow-y-auto'
                renderTrigger={() => (
                  <span>
                    <div className='btn-circle-hover cursor-pointer p-0 h-7 w-7'>
                      <Icon
                        icon={'solar:add-circle-line-duotone'}
                        width={36}
                        height={36}
                      />
                    </div>
                  </span>
                )}>
                {AllassignedTo.map((user) => {
                  const isChecked = newTaskData.assignedTo.some(
                    (u: any) => u.name === user.name
                  )

                  const handleToggle = () => {
                    const updatedList = isChecked
                      ? newTaskData.assignedTo.filter(
                        (u: any) => u.name !== user.name
                      )
                      : [...newTaskData.assignedTo, user]

                    setNewTaskData({
                      ...newTaskData,
                      assignedTo: updatedList,
                    })
                  }

                  return (
                    <DropdownItem key={user.name}>
                      <div
                        key={user.name}
                        className='flex items-center gap-3 cursor-pointer'>
                        <Checkbox
                          className='checkbox'
                          checked={isChecked}
                          onChange={handleToggle}
                        />
                        <img
                          src={user.avatar}
                          alt={user.name}
                          width={36}
                          height={36}
                          className='rounded-full bg-gray-300 dark:bg-neutral-500 border border-white dark:border-white/40'
                        />
                        <h6 className='text-sm'>{user.name}</h6>
                      </div>
                    </DropdownItem>
                  )
                })}
              </Dropdown>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color={'lighterror'} onClick={onHide}>
          Cancel
        </Button>
        <Button onClick={handleSave} color='primary' disabled={!isFormValid()}>
          Add Task
        </Button>
      </ModalFooter>
    </Modal>
  );
}
export default AddNewList;
