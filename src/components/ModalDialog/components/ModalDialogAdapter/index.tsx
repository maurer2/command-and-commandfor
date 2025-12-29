import { cloneElement, type ReactElement } from "react";

type ChildElementProps = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

// allow any props but make sure onSubmit and onCancel are included
type ModalDialogAdapterProps<T extends ChildElementProps> = {
  onSubmit?: () => void;
  onCancel?: () => void;
  children?: ReactElement<T>;
};

// allow any props but make sure onSubmit and onCancel are included
export function ModalDialogAdapter<T extends ChildElementProps>({
  onSubmit,
  onCancel,
  children,
}: ModalDialogAdapterProps<T>) {
  const childElementProps = {
    onSubmit: onSubmit,
    onCancel: onCancel,
  } as Partial<T>;

  return children ? cloneElement(children, childElementProps) : null;
}
