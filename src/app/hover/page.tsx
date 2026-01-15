import "./styles.css";

export default function HoverPage() {
  const overlayId = "overlay";

  return (
    <main className="hover-page">
      <h2>Hover</h2>

      <section>
        <h3 id="invoker-details">Invoker details</h3>
        <dl className="invoker-details" aria-labelledby="invoker-details">
          <dt>
            <span className="strike-through">command</span>
          </dt>
          <dd>-</dd>
          <dt>
            <span className="strike-through">commandfor</span>
          </dt>
          <dd>-</dd>
          <dt>interestfor</dt>
          <dd>"{overlayId}"</dd>
        </dl>
      </section>

      <section className="example">
        <h3>Example</h3>
        <button
          // @ts-expect-error too-new
          interestfor={overlayId}
          type="button"
        >
          Hover over
        </button>

        <div className="interesting-stuff" id={overlayId} popover="auto">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmI4b28wMzE2bDVvOXl2bDRlMzd6OTEzd2hqNzNkM2YycDZnM2cwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/liW10vuLjuUA8/giphy.gif"
            alt="Lenny looking interested"
          />
        </div>
      </section>
    </main>
  );
}
