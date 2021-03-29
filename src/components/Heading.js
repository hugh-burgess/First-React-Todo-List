export default function Heading({ text }) {
  return (
    <header className="header">
      <h1 className="title">My Todos!</h1>
      <button
        className="headerButton"
        onClick={(buttonAction) =>
          console.log("A new task would have been added")
        }
      >
        Add ToDo
      </button>
    </header>
  );
}
