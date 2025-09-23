import { Menu } from "lucide-react";

import "./styles.css";

export default function PopoverPage() {
  return (
    <main className="popover-page">
      <h2>Popover</h2>

      <div className="example">
        <button
          // @ts-expect-error too-new
          commandfor="menu"
          command="toggle-popover"
          aria-label="Toggle menu"
          aria-haspopup="menu"
        >
          <Menu />
        </button>
        <ul popover="auto" id="menu">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
    </main>
  );
}
