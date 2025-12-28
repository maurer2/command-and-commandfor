import type { PropsWithChildren } from "react";

import { ModalDialogRoot } from "./components/ModalDialogRoot";
import { ModalDialogElement } from "./components/ModalDialogElement";
import { ModalDialogTrigger } from "./components/ModalDialogTrigger";
import { ModalDialogAdapter } from "./components/ModalDialogAdapter";

type ModalDialogProps = PropsWithChildren;

// Nextjs/RSC doesn't like importing compound components in server components directly
// workaround for https://github.com/vercel/next.js/issues/75192#issuecomment-2629016605
// https://github.com/vercel/next.js/issues/76000
// todo: https://ivicabatinic.from.hr/posts/multipart-namespace-components-addressing-rsc-and-dot-notation-issues
export function ModalDialogNextHelper({ children }: ModalDialogProps) {
  return <>{children}</>;
}

const ModalDialog = {
  Root: ModalDialogRoot,
  Element: ModalDialogElement,
  Trigger: ModalDialogTrigger,
  Adapter: ModalDialogAdapter,
};

export default ModalDialog;
