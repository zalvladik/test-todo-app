export type ModalProviderProps = {
  children: React.ReactNode;
};

export type ModalContextProps = {
  isModalOpen: boolean;
  modalData: number;
  openModal: (value: number) => void;
  closeModal: () => void;
};
