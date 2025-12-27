"use client";

import {
  createContext,
  useContext,
  useMemo,
  // use,
  type PropsWithChildren,
  type RefObject,
} from "react";
import { Simplify } from "type-fest";

type ModalDialogProviderProps = PropsWithChildren & {
  dialogRef: RefObject<HTMLDialogElement | null>;
  modalId: string;
};

type ModalDialogContextType = Simplify<{
  dialogRef: ModalDialogProviderProps["dialogRef"];
  modalId: ModalDialogProviderProps["modalId"];
}>;

const ModalDialogContext = createContext<ModalDialogContextType | null>(null);

export function useModalDialogContext() {
  const modalDialogContext = useContext(ModalDialogContext);

  if (!modalDialogContext) {
    throw new Error("Please add ModalDialogProvider");
  }

  return modalDialogContext;

  // return use(ModalDialogContext)} // todo: remove null like in old approach
}

export function ModalDialogProvider({
  modalId,
  dialogRef,
  children,
}: ModalDialogProviderProps) {
  const value = useMemo(() => ({ dialogRef, modalId }), [modalId, dialogRef]);

  return (
    <ModalDialogContext.Provider value={value}>
      {children}
    </ModalDialogContext.Provider>
  );
}

export default ModalDialogContext;
