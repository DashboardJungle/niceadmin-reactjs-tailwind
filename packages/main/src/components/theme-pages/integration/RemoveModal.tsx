
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'flowbite-react';


const RemoveModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    return (
        <Modal show={open} onClose={onClose}>
            <ModalHeader>Remove Integration</ModalHeader>
            <ModalBody>
                <p>Are you sure you want to remove this integration?</p>
            </ModalBody>
            <ModalFooter>

                <Button color="secondary" onClick={() => {
                    onClose();
                }}>
                    Yes, Remove
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};
export default RemoveModal