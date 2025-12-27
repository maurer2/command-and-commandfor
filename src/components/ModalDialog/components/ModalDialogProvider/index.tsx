"use client";

import {
  createContext,
  useContext,
  useMemo,
  use,
  type PropsWithChildren,
} from "react";

type ModalDialogProviderProps = PropsWithChildren;

type ModalDialogContextType = {
  dialogRef: string | null;
  modalId: string;
};

const ModalDialogContext = createContext<ModalDialogContextType | null>(null);

export function useModalDialogContext() {
  const modalDialogContext = useContext(ModalDialogContext);

  if (!modalDialogContext) {
    throw new Error("Please wrap ModalDialog in ModalDialogProvider");
  }

  return modalDialogContext;

  // return use(ModalDialogContext)} // todo remove null like in old approach
}

export function ModalDialogProvider({ children }: ModalDialogProviderProps) {
  const value = useMemo(() => ({ dialogRef: null, modalId: "modal" }), []);

  return (
    <ModalDialogContext.Provider value={value}>
      {children}
    </ModalDialogContext.Provider>
  );
}

export default ModalDialogContext;
