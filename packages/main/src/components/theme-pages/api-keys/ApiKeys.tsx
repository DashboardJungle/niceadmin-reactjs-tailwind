import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Table, Badge, ToggleSwitch, TableHead, TableCell, TableHeadCell, TableBody, TableRow, Label, Tooltip, Modal, ModalBody, ModalFooter } from "flowbite-react"
import { useState } from "react";
import SimpleBar from "simplebar-react";

import CardBox from "src/components/shared/CardBox"

import GenerateApiKeyModal from "./GenerateApiKeyModal";


const apiKeys = [
    {
        id: 1,
        name: "Web Client API Key",
        key: "web_live_************5182",
        status: "Active",
        created: "11 Feb, 2025",
        lastUsed: "Today, 09:30 AM",
        enabled: true,
    },
    {
        id: 2,
        name: "Development API key",
        key: "dev_live_************9471",
        status: "Active",
        created: "19 Dec, 2024",
        lastUsed: "Today, 01:30 AM",
        enabled: true,
    },
    {
        id: 3,
        name: "Production API Key",
        key: "pro_live_************3845",
        status: "Disabled",
        created: "23 Mar, 2024",
        lastUsed: "Today, 06:30 PM",
        enabled: false,
    },
];




function ApiKeys() {

    const [keysData, setKeysData] = useState(apiKeys);
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState<number | null>(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [deleteKeyId, setDeleteKeyId] = useState<number | null>(null);
    const handleToggle = (id: any) => {
        setKeysData((prev) =>
            prev.map((k) =>
                k.id === id ? { ...k, enabled: !k.enabled, status: k.enabled ? "Disabled" : "Active" } : k
            )
        );
    };

    const handleCopy = (id: number, keyValue: string) => {
        navigator.clipboard.writeText(keyValue);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000); // reset after 2s
    };


    const handleDelete = (id: number) => {
        setDeleteKeyId(id);
        setOpenDeleteDialog(true);
    }
    // Handle closing delete confirmation dialog
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false)
    }

    // Handle confirming deletion of selected products
    const handleConfirmDelete = async () => {
        if (deleteKeyId !== null) {
            setKeysData((prev) => prev.filter((key) => key.id !== deleteKeyId));
        }
        setOpenDeleteDialog(false);
        setDeleteKeyId(null); // reset after delete
    }
    return (
        <CardBox>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center justify-between border-b border-border dark:border-darkborder py-4 px-1 ">
                <div>
                    <h3 className="card-title">API Keys</h3>
                    <p className="card-subtitle">API keys are used to authentication requests to the tailadmin API</p>
                </div>

                <div>
                    <Button color={'primary'}
                        className=' flex items-center gap-2 '
                        onClick={() => setShowModal(true)}
                    >

                        <Icon icon='solar:add-circle-line-duotone' width={20}
                            height={20}></Icon>
                        Generate API key</Button>
                </div>
            </div>
            <SimpleBar className='max-h-[580px] overflow-y-auto'>
                <div className="overflow-x-auto 
                ">

                    <Table className='min-w-full '>
                        <TableHead className='min-w-full  '>
                            <TableRow>
                                <TableHeadCell className='  px-1'>
                                    Name
                                </TableHeadCell>
                                <TableHeadCell >
                                    Status
                                </TableHeadCell>
                                <TableHeadCell >
                                    Created
                                </TableHeadCell>
                                <TableHeadCell >
                                    Last used
                                </TableHeadCell>
                                <TableHeadCell >
                                    Disable/Enable
                                </TableHeadCell>
                                <TableHeadCell >
                                    Action
                                </TableHeadCell>
                            </TableRow>
                        </TableHead>

                        <TableBody className='divide-y divide-border dark:divide-darkborder '>
                            {keysData.map((key) => (
                                <TableRow key={key.id} >

                                    <TableCell className='whitespace-nowrap   min-w-sm px-1'>

                                        <Label className="text-link ">{key.name}</Label>

                                        <div className="flex items-center gap-3 mt-1">


                                            <div className="flex rounded-lg">
                                                <input
                                                    type="text"
                                                    value={key.key}
                                                    readOnly
                                                    className="py-1.5 
                                                    sm:py-2 px-3 
                                                    block w-full 
                                                    border border-border rounded-s-lg 
                                                    sm:text-sm focus:z-10
                                                     focus:outline-0  
                                                    text-muted dark:text-lightgray 
                                                    dark:border-darkborder
                                                      "
                                                />


                                                <span className="relative inline-flex items-center min-w-fit rounded-e-md border border-s-0 border-border text-sm   dark:border-darkborder  
                                                ">
                                                    <button
                                                        onClick={() => handleCopy(key.id, key.key)}
                                                        className=" cursor-pointer flex items-center gap-2 px-4 py-2.5 text-sm text-muted dark:text-lightgray  transition w-full h-full"
                                                    >

                                                        {copied === key.id ? (
                                                            <>
                                                                <Icon icon="solar:check-read-line-duotone" width={20} height={20} />
                                                                Copied
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Icon icon="solar:copy-line-duotone" width={20} height={20} />
                                                                Copy
                                                            </>
                                                        )}
                                                    </button>
                                                </span>
                                            </div>



                                            <Tooltip content="Regenerate" style="light">
                                                <Button color="light" className="border border-border" >
                                                    <Icon icon="solar:refresh-bold-duotone" width={20}
                                                        height={20} />
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {key.status === "Active" ? (
                                            <Badge color="lightsuccess">Active</Badge>
                                        ) : (
                                            <Badge color="lighterror">Disabled</Badge>
                                        )}

                                    </TableCell>

                                    <TableCell className="text-muted dark:text-lightgray whitespace-nowrap">
                                        {key.created}

                                    </TableCell>
                                    <TableCell className=" text-muted dark:text-lightgray whitespace-nowrap">
                                        {key.lastUsed}
                                    </TableCell>
                                    <TableCell>
                                        <ToggleSwitch
                                            checked={key.enabled}
                                            onChange={() => handleToggle(key.id)}
                                        />
                                    </TableCell>
                                    <TableCell >
                                        <Tooltip content="Delete" style="light">
                                            <Button className="btn-circle text-muted dark:text-lightgray" color={"transparent"} onClick={() => handleDelete(key.id)}>
                                                <Icon icon="solar:trash-bin-minimalistic-outline" width={20}
                                                    height={20} />
                                            </Button>
                                        </Tooltip>

                                    </TableCell>

                                </TableRow>
                            )
                            )}
                        </TableBody>
                    </Table>
                </div>
            </SimpleBar>
            <GenerateApiKeyModal open={showModal} onClose={() => setShowModal(false)} />
            {/* delete modal */}
            <Modal
                show={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                size={'md'}>
                <ModalBody>
                    <p className='text-center text-lg text-ld'>
                        Are you sure you want to delete this API key?
                    </p>
                </ModalBody>
                <ModalFooter className='mx-auto'>

                    <Button color='error' onClick={handleConfirmDelete}>
                        Delete
                    </Button>
                    <Button color='lighterror' onClick={handleCloseDeleteDialog}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </CardBox>

    )

}

export default ApiKeys