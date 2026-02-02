import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle, ModalTrigger } from "../../ui/modal/modal"
import Button from "@/components/ui/button/button";
import style from "./feedback-modal.module.scss"

import { MessageSquarePlus } from 'lucide-react';
import type { ComponentProps, SubmitEventHandler } from "react";
import { CircleCheck } from 'lucide-react';
import { useState } from "react";

interface IFeedbackModal extends ComponentProps<'button'> {
    handlerSubmit: (text: string) => void;
}

const FeedbackModal = ({ handlerSubmit, ...props }: IFeedbackModal) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSave: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const text = formData.get('feedback-text') as string;
        handlerSubmit(text);
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <ModalTrigger>
                <Button {...props} className={style['feedback-button']}>
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
                <form onSubmit={handleSave} className={style['feedback-form']}>
                    <div className={style['feedback-form__content']}>
                        <textarea name="feedback-text" placeholder="Enter your feedback" className={style['feedback-form__content__textarea']} />
                    </div>
                    <ModalFooter>
                        <Button variant="secondary" size="sm" onClick={handleClose}>
                            <span>Cancel</span>
                        </Button>
                        <Button variant="primary" size="sm" type="submit">
                            <CircleCheck width={18} height={18} />
                            <span>Save Feedback</span>
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default FeedbackModal
