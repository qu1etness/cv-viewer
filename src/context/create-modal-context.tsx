import { createContext, useContext, type ReactNode } from "react";

interface IModalProvider {
    children: ReactNode;
}

const createModalContext = <T,>() => {
    const ModalContext = createContext<T | null>(null);

    const ModalProvider = ({ children, ...props }: IModalProvider) => {
        return (
            <ModalContext.Provider value={props as T}>
                {children}
            </ModalContext.Provider>
        )
    }

    const useModalContext = () => {
        const context = useContext(ModalContext);
        if (!context) {
            throw new Error("useModalContext must be used within a ModalProvider");
        }
        return context;
    }

    return [ModalProvider, useModalContext] as const;
}

export default createModalContext;


