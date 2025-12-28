import type { PropsWithChildren } from "react";

import { ModalDialogRoot } from "./components/ModalDialogRoot";
import { ModalDialogElement } from "./components/ModalDialogElement";
import { ModalDialogTrigger } from "./components/ModalDialogTrigger";

type ModalDialogProps = PropsWithChildren;

// RSC don't like importing client compound components in server components
// workaround for https://github.com/vercel/next.js/issues/75192#issuecomment-2629016605
// todo: https://ivicabatinic.from.hr/posts/multipart-namespace-components-addressing-rsc-and-dot-notation-issues
// https://github.com/vercel/next.js/issues/76000

export function ModalDialogWrapper({ children }: ModalDialogProps) {
  return <>{children}</>;
}

const ModalDialog = {
  Root: ModalDialogRoot,
  Element: ModalDialogElement,
  Trigger: ModalDialogTrigger,
};

export default ModalDialog;
