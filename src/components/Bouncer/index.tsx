"use client";

import React, { useRef, useEffect } from "react";

import "./styles.css";

function Bouncer() {
  const testButton = useRef<HTMLButtonElement>(null);
  const dialogElement = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (testButton.current === null || !("command" in testButton.current)) {
      dialogElement?.current?.showModal();
    }
  }, []);

  return (
    <div className="bouncer">
      <button ref={testButton} disabled hidden>
        Test button that should not be accessible
      </button>
      <dialog ref={dialogElement}>Feature not supported.</dialog>
    </div>
  );
}

export default Bouncer;
