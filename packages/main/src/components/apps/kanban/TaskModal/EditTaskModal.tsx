
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

import { TextInput, Modal, Label, Button, Select, ModalBody, ModalFooter, ModalHeader, Dropdown, Checkbox, DropdownItem } from "flowbite-react";

import { Icon } from "@iconify/react/dist/iconify.js";
import {
  AllassignedTo,
  TaskProperties,
} from 'src/api/kanban/KanbanData'


function EditTaskModal({ show, onHide, editedTask, onSave }: any) {
  const [tempEditedTask, setTempEditedTask] = useState(editedTask)
  const [newtaskImage, setNewtaskImage] = useState(editedTask?.taskImage || '')
  const [imagePreview, setImagePreview] = useState(editedTask?.taskImage || '')
  const [assignedUsers, setAssignedUsers] = useState(
    editedTask?.assignedTo || []
  )

  useEffect(() => {
    setTempEditedTask(editedTask)
    setNewtaskImage(editedTask?.taskImage || '')
    setImagePreview(editedTask?.taskImage || '')
    setAssignedUsers(editedTask?.assignedTo || [])
  }, [editedTask])



  // Function to handle changes in the task input fields
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setTempEditedTask({ ...tempEditedTask, [name]: value })
  }

  // Function to handle changes in the task property
  const handlePropertyChange = (property: any) => {
    setTempEditedTask({ ...tempEditedTask, priority: property })
  }
  // Function to handle saving the changes made to the task and hiding the modal
  const handleSaveChanges = () => {
    const updatedTask = {
      ...tempEditedTask,
      taskImage: newtaskImage,
      assignedTo: assignedUsers,
    }
    onSave(updatedTask)
    onHide()
  }

  // Function to handle new image URL input
  const handleNewtaskImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setNewtaskImage(url)
    setImagePreview(url)
  }
  return (
    <Modal size={'md'} show={show} onClose={onHide}>
      <ModalHeader className='pb-0'>Edit Task</ModalHeader>
      <ModalBody>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-12'>
            <Label htmlFor='task' className='mb-2 block capitalize'>
              Task
            </Label>
            <TextInput
              name='taskTitle'
              id='task'
              value={tempEditedTask.taskTitle}
              className='!form-control'
              onChange={handleChange}
            />
          </div>
          <div className='col-span-12'>
            {/* Task text or image */}
            {tempEditedTask.taskImage ? (
              <>
                {/* Image handling */}
                <div className='mb-5'>
                  <Label htmlFor='taskImage' className='mb-2 block capitalize'>
                    Image URL
                  </Label>
                  <TextInput
                    id='taskImage'
                    className='!form-control'
                    value={newtaskImage}
                    onChange={handleNewtaskImageChange}
                  />
                </div>
                {imagePreview && (
                  <div>
                    <Label htmlFor='taskImage'>Image Preview:</Label>
                    <img
                      src={imagePreview}
                      alt='Selected'
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        marginTop: '8px',
                        borderRadius: '4px',
                      }}
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Task text */}
                <Label htmlFor='tasktext' className='mb-2 block capitalize'>
                  Description
                </Label>
                <TextInput
                  name='taskText'
                  id='tasktext'
                  className='!form-control'
                  value={tempEditedTask.taskText}
                  onChange={handleChange}
                />
              </>
            )}
          </div>
          <div className='col-span-12'>
            <Label htmlFor='taskProperty' className='mb-2 block capitalize'>
              Category
            </Label>
            <Select
              id='taskProperty'
              className='select-md'
              value={tempEditedTask.taskProperty}
              onChange={(e) => handlePropertyChange(e.target.value)}>
              {TaskProperties.map((property) => (
                <option key={property} value={property}>
                  {property}
                </option>
              ))}
            </Select>
          </div>

          <div className='col-span-12 w-fit flex flex-col gap-2'>
            <Label>Assign To</Label>
            <div className='flex items-center gap-1'>
              <div className='flex items-center gap-1'>
                {assignedUsers.map((user: any, idx: number) => (
                  <div key={idx} className='relative'>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      title={user.name}
                      width={36}
                      height={36}
                      className='rounded-full bg-gray-300 dark:bg-neutral-500 border border-white dark:border-white/40'
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setAssignedUsers(
                          assignedUsers.filter((_: any, i: number) => i !== idx)
                        )
                      }
                      className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4  flex items-center justify-center -mt-1 -mr-1 hover:cursor-pointer'>
                      <Icon
                        icon={'solar:close-circle-line-duotone'}
                        width={36}
                        height={36}
                      />
                    </button>
                  </div>
                ))}
              </div>
              {/* edit user assign */}
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
                {AllassignedTo.map((user, index) => {
                  const isChecked = assignedUsers.some(
                    (u: { name: string; avatar: string }) =>
                      u.name === user.name && u.avatar === user.avatar
                  )
                  return (
                    <DropdownItem key={index}>
                      <div
                        key={index}
                        className='flex items-center gap-2 cursor-pointer'>
                        <Checkbox
                          className='checkbox'
                          checked={isChecked}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setAssignedUsers([...assignedUsers, user])
                            } else {
                              setAssignedUsers(
                                assignedUsers.filter(
                                  (u: { name: string; avatar: string }) =>
                                    !(
                                      u.name === user.name &&
                                      u.avatar === user.avatar
                                    )
                                )
                              )
                            }
                          }}
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
        <Button onClick={onHide} color={'lighterror'}>
          Close
        </Button>
        <Button onClick={handleSaveChanges} color={'success'}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
}
export default EditTaskModal;
