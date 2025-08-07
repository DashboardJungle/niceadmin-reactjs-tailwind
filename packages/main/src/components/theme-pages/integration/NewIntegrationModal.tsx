import { Modal, Button, Label, TextInput, ModalHeader, ModalBody, ModalFooter, Select } from 'flowbite-react';

type NewModalProps = {
    open: boolean;
    onClose: () => void;
};


const NewIntegrationModal: React.FC<NewModalProps> = ({ open, onClose }) => {
    return (
        <Modal show={open} onClose={onClose}>
            <ModalHeader>New integration</ModalHeader>
            <ModalBody>
                <p className='text-sm mb-7'>Set up an integration and add a brief explanation for the team.</p>
                <div className='space-y-3'>
                    <Label
                        htmlFor='select-app'
                        className='mb-2 block capitalize text-link dark:text-darklink'>
                        Select App
                    </Label>
                    <Select id="apps" className="select-md">
                        <option value="">Select an option</option>
                        <option value="">Google Meet</option>
                        <option value="">Mailchimp</option>
                        <option value="">Zoom</option>
                        <option value="">Loom</option>
                        <option value="">Loom</option>

                    </Select>
                    <Label
                        htmlFor='client-id'
                        className='mb-2 block capitalize text-link dark:text-darklink'>
                        Client ID
                    </Label>
                    <TextInput
                        name='clientid'
                        className='!form-control'
                        type='text'
                    />
                    <Label
                        htmlFor='client-secret'
                        className='mb-2 block capitalize text-link dark:text-darklink'>
                        Client Secret
                    </Label>
                    <TextInput
                        name='clientsecret'
                        className='!form-control'
                        type='text'


                    />
                    <Label
                        htmlFor='authentication-url'
                        className='mb-2 block capitalize text-link dark:text-darklink'>
                        Authentication base URI
                    </Label>
                    <TextInput
                        name='authenticationurl'
                        className='!form-control'
                        type='text'


                    />
                </div>
                <p className='text-sm mt-3'>Paste the full URI, and we’ll automatically pull out and show only the subdomain for quick reference.</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" className='leading-0'>Add Integration</Button>
                <Button color="primary" className='leading-0' onClick={onClose}>close</Button>

            </ModalFooter>
        </Modal >
    )
}

export default NewIntegrationModal