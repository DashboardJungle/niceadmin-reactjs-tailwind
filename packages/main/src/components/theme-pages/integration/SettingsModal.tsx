import { Modal, Button, Label, TextInput, ModalHeader, ModalBody, ModalFooter, Select } from 'flowbite-react';

type SettingModalProps = {
    open: boolean;
    onClose: () => void;
};


const SettingsModal: React.FC<SettingModalProps> = ({ open, onClose }) => {
    return (
        <Modal show={open} onClose={onClose}>
            <ModalHeader>Integration settings</ModalHeader>
            <ModalBody>
                <p className='text-sm mb-7'>Manage and configure your connected apps and services.</p>
                <div className='space-y-3'>
                    <Label
                        htmlFor='select-app'
                        className='mb-2 block capitalize text-link dark:text-darklink'>
                        Select App
                    </Label>
                    <Select id="apps" className="select-md" disabled>
                        <option value="">Select an option</option>
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
                        value="e3b2c7f4-1234-5678-9abc-def012345678"

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
                        value="s3cr3tK3y@9LmNopQR!2xYz"

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
                        value="https://auth.example.com"

                    />
                </div>
                <p className='text-sm mt-3'>Save your changes .</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" className='leading-0'>save</Button>
                <Button color="primary" className='leading-0' onClick={onClose}>close</Button>

            </ModalFooter>
        </Modal >
    );
};

export default SettingsModal;