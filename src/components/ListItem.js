export default function ListItem({ text, number }) {
  return (
    <span className="listParent">
      <h4 className="listName">{text}</h4>

      <div className="buttons">
        <button
          className="deleteButton"
          onClick={() => console.log(`The task number ${number} was deleted`)}
        >
          Delete
        </button>
        <button
          className="doneButton"
          onClick={() => console.log(`The task: ${text} was clicked done`)}
        >
          Done
        </button>
      </div>
    </span>
  );
}
