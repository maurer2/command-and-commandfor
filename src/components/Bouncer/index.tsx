"use client";

import React, { useRef, useEffect } from "react";

import "./styles.css";

function Bouncer() {
  const dialogElement = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (
      !("command" in HTMLButtonElement.prototype) ||
      // https://stackoverflow.com/questions/78797961/detecting-css-scope-support-with-javascript
      typeof CSSScopeRule === "undefined"
    ) {
      dialogElement.current?.showModal();
    }
  }, []);

  return (
    <div className="bouncer">
      <dialog ref={dialogElement}>
        "command" and/or "@scope" not supported.
      </dialog>
    </div>
  );
}

export default Bouncer;
