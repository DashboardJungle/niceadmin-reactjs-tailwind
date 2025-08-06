import { Modal, Button, Label, TextInput, ModalHeader, ModalBody, ModalFooter } from 'flowbite-react';

type GenerateApiKeyModalProps = {
    open: boolean;
    onClose: () => void;
};

const GenerateApiKeyModal: React.FC<GenerateApiKeyModalProps> = ({ open, onClose }) => {
    return (
        <Modal show={open} onClose={onClose}>
            <ModalHeader>Generate New API Key</ModalHeader>
            <ModalBody>
                <p className='text-sm mb-6'>To enable secure access to the web services, your app requires an API key with permissions for resources such as the S3 bucket.</p>
                <Label
                    htmlFor='Enter your application name'
                    className='mb-2 block capitalize text-link dark:text-darklink'>
                    Enter your application name
                </Label>
                <TextInput
                    name='firstname'
                    className='!form-control'
                    type='text'

                    required
                />
                <p className='text-sm mt-3'>Naming your application makes it easier to recognize your API key in the future.</p>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="primary">Generate Api Key</Button>
            </ModalFooter>
        </Modal>
    );
};

export default GenerateApiKeyModal;