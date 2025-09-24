"use client";

import React, { useRef, useEffect } from "react";

import "./styles.css";

function Bouncer() {
  const dialogElement = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (
      !("command" in HTMLButtonElement.prototype) ||
      // https://stackoverflow.com/questions/78797961/detecting-css-scope-support-with-javascript
      typeof CSSScopeRule === "undefined" ||
      !CSS.supports("block-size: calc-size(auto, size * 2)")
    ) {
      dialogElement.current?.showModal();
    }
  }, []);

  return (
    <div className="bouncer">
      <dialog ref={dialogElement}>
        Support for &quot;command&quot;, &quot;@scope&quot;, or
        &quot;calc-size&quot; missing.
      </dialog>
    </div>
  );
}

export default Bouncer;
