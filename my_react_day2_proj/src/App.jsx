import "./App.css";
import Counter from "./counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button clicked");
  }

  const handleClick2 = () => {
    alert("I am already dead");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concept Day-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <h4>Several Ways of handle click the buttons</h4>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click To Die</button>
      <button onClick={() => alert("I have birth again yeahhh")}>
        Click To Rebirth
      </button>
      {/* Little bit complex event handling onclick */}
      <button onClick={() => addToFive(8)}>Four</button>
    </>
  );
}

export default App;
