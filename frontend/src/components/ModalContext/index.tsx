import { createContext, useContext, useState } from "react";

import {
  ModalProviderProps,
  ModalContextProps,
} from "src/components/ModalContext/types";

const defaultValue: ModalContextProps = {
  isModalOpen: false,
  modalData: 0,
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextProps>(defaultValue);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<number>(0);

  const openModal = (value: number): void => {
    setModalData(value);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
