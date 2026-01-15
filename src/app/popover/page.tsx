import { Menu } from "lucide-react";

import "./styles.css";

export default function PopoverPage() {
  const popoverId = "popover";

  return (
    <main className="popover-page">
      <h2>Popover</h2>

      <section>
        <h3 id="invoker-details">Invoker details</h3>
        <dl className="invoker-details" aria-labelledby="invoker-details">
          <dt>command</dt>
          <dd>"toggle-popover"</dd>
          <dt>commandfor</dt>
          <dd>"{popoverId}"</dd>
          <dt>
            <span className="strike-through">interestfor</span>
          </dt>
          <dd>-</dd>
        </dl>
      </section>

      <section className="example">
        <h3>Example</h3>
        <button
          // @ts-expect-error too-new
          commandfor={popoverId}
          command="toggle-popover"
          aria-label="Toggle popover menu"
          aria-haspopup={popoverId}
        >
          <Menu />
        </button>
        <ul popover="auto" id={popoverId}>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </section>
    </main>
  );
}
