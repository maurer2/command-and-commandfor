import { useMemo, cloneElement, type ReactElement } from "react";

type ChildElementProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

// allow any props but make sure onSubmit and onCancel are included
type ModalDialogAdapterProps<T extends ChildElementProps> =
  ChildElementProps & {
    children?: ReactElement<T>;
  };

// allow any props but make sure onSubmit and onCancel are included
export function ModalDialogAdapter<T extends ChildElementProps>({
  onSubmit,
  onCancel,
  children,
}: ModalDialogAdapterProps<T>) {
  const childElementProps: Partial<T> = useMemo(
    () => ({ onSubmit, onCancel } as Partial<T>),
    [onSubmit, onCancel]
  );

  return children ? cloneElement(children, childElementProps) : null;
}
