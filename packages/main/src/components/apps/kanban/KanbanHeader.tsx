

import { useState, useContext } from 'react'
import { KanbanDataContext } from 'src/context/kanbancontext/index';
import { Button, TextInput, Modal, ModalHeader, ModalBody, ModalFooter } from 'flowbite-react';

function KanbanHeader() {
    const { addCategory, setError } = useContext(KanbanDataContext);
    const [show, setShow] = useState(false);
    const [listName, setListName] = useState('');

    //Closes the modal 
    const handleClose = () => setShow(false);
    //open the modal 
    const handleShow = () => setShow(true);

    //Handles Add a new category.
    const handleSave = async () => {
        try {
            addCategory(listName);
            setListName('');
            setShow(false);
        } catch (error: any) {
            setError(error.message);
        }
    };

    const isAddButtonDisabled = listName.trim().length === 0

    return (
        <>
            <div className='sm:flex justify-between items-center'>
                <h5 className='card-title'>Improving Work Processes</h5>
                <Button color={'primary'} className='sm:mt-0 mt-3' onClick={handleShow}>
                    Add List
                </Button>
            </div>
            <Modal size={'md'} show={show} onClose={handleClose}>
                <ModalHeader className='pb-5'>Add List</ModalHeader>
                <ModalBody>
                    <TextInput
                        autoFocus
                        type='text'
                        className='!form-control'
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleClose} color='error'>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        color='success'
                        disabled={isAddButtonDisabled}>
                        Add List
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
export default KanbanHeader;
