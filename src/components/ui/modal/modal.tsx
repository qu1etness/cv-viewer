import style from "./modal.module.scss";
import { type ComponentProps, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from 'lucide-react';
import Button from "../button/button.tsx";
import createModalContext from "../../../context/create-modal-context.tsx";

export interface IModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    modal?: boolean;
}

const [ModalProvider, useModalContext] = createModalContext<IModalProps>();

const Modal = ({ children, ...props }: IModalProps) => {

    return (
        <ModalProvider
            {...props}
        >
            {children}
        </ModalProvider>
    );
}

const ModalHeader = ({ children, ...props }: ComponentProps<"div">) => {

    const context = useModalContext();
    const handleClose = () => context?.onOpenChange(false);

    return (
        <div
            {...props}
            className={style['modal__header']}
        >
            {children}
            <Button onClick={handleClose} variant="ghost">
                <X />
            </Button>
        </div>
    )
}

const ModalTitle = ({ children, ...props }: ComponentProps<"div">) => {


    return (
        <div
            {...props}
        >
            {children}
        </div>
    )
}

const ModalDescription = ({ children, ...props }: ComponentProps<"div">) => {

    return (
        <div
            {...props}
        >
            {children}
        </div>
    )
}

const ModalTrigger = ({ children, ...props }: ComponentProps<"div">) => {

    const context = useModalContext();
    const handleOpen = () => context?.onOpenChange(true);

    return (
        <div
            onClick={handleOpen}
            {...props}
        >
            {children}
        </div>
    )
}

const ModalContent = ({ children, ...props }: ComponentProps<"div">) => {
    const { isOpen, onOpenChange } = useModalContext();

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onOpenChange?.(false);
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className={style.overlay} onClick={handleBackdropClick}>
            <div
                className={style.modal}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body
    )
}


const ModalFooter = ({ children, ...props }: ComponentProps<"div">) => {
    return (
        <div
            {...props}
            className={style['modal__footer']}
        >
            {children}
        </div>
    )
}


export { Modal, ModalHeader, ModalTrigger, ModalDescription, ModalTitle, ModalContent, ModalFooter };