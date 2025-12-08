import "./styles.css";

export default function HoverPage() {
  return (
    <main className="hover-page">
      <h2>Hover (interestfor)</h2>

      <button
        // @ts-expect-error too-new
        interestfor="interesting-stuff"
      >
        Hover me
      </button>

      <div className="interesting-stuff" id="interesting-stuff" popover="auto">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmI4b28wMzE2bDVvOXl2bDRlMzd6OTEzd2hqNzNkM2YycDZnM2cwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/liW10vuLjuUA8/giphy.gif"
          alt="Lenny looking interested"
        />
      </div>
    </main>
  );
}
