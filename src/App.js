import "./styles.css";
import Heading from "/src/components/Heading.js";
import List from "/src/components/List.js";
import ListItem from "/src/components/ListItem.js";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <ListItem text="Do Laundry" number="1" />
      <ListItem text="Take Dog Out" number="2" />
      <ListItem text="Study React" number="3" />
      <ListItem text="Do Facebook Clone" number="4" />

      <List />
    </div>
  );
}
