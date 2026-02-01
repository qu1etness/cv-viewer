import { useState } from "react";
import { MessageSquarePlus, X } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle, ModalTrigger } from "../../ui/modal/modal"
import Button from "../../ui/button/button";
import type { ComponentProps } from "react";



const FeedbackModal = ({ ...props }: ComponentProps<'button'>) => {

    const [isOpen, setIsOpen] = useState(false);


    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <Modal>
            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <ModalTrigger>
                    <Button {...props}>
                        <MessageSquarePlus />
                        <span>Start review</span>
                    </Button>
                </ModalTrigger>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>
                            <h2>Add Feedback</h2>
                        </ModalTitle>
                    </ModalHeader>
                    <ModalDescription>
                        <p>Enter your observations regarding the candidate's technical skills or CV structure.

                            This feedback will be shared with the recruitment team.</p>
                    </ModalDescription>
                    <ModalFooter>
                        <Button variant="secondary" size="sm" onClick={handleClose}>
                            <span>Cancel</span>
                        </Button>
                        <Button variant="primary" size="sm">
                            <CircleCheck width={18} height={18} />
                            <span>Save Feedback</span>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Modal>
    )
}

export default FeedbackModal
