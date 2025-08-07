
import { Modal, ModalHeader, ModalBody } from 'flowbite-react';

type DeatilModalProps = {
    open: boolean;
    onClose: () => void;
};


const authDetails = [
    { label: "App Name", value: "Example App" },
    {
        label: "Client ID",
        value: "e3b2c7f4-1234-5678-9abc-def012345678",
    },
    {
        label: "Client Secret",
        value: "s3cr3tK3y@9LmNopQR!2xYz",
    },
    {
        label: "Authentication base URI",
        value: "https://auth.example.com",
    },
];

const DetailModal: React.FC<DeatilModalProps> = ({ open, onClose }) => {
    return (
        <Modal show={open} onClose={onClose}>
            <ModalHeader>
                Integration details</ModalHeader>
            <ModalBody>
                <p className='text-sm mb-7'>Check the credentials and settings for your connected app.</p>
                {/* Detail Card */}
                <div>
                    {authDetails.map((item, idx) => (
                        <div
                            key={idx}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-2  py-4 border-b border-border  dark:border-darkborder"
                        >
                            <p className="card-subtitle"> {item.label}</p>
                            <p className=" text-link text-sm font-medium break-all"> {item.value}</p>
                        </div>
                    ))}

                </div>

            </ModalBody>

        </Modal >
    )
}

export default DetailModal