import "./App.css";
import InputForm from "./componets/InputForm";
import TodoBox from "./componets/TodoBox";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h2 className="div">TODO BOARD</h2>

        <InputForm />
      </div>
      <TodoBox />
    </div>
  );
}

export default App;
