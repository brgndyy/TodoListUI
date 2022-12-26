import Header from "./components/Header";
import TodoInsert from "./components/TodoInsert";
import TodoListContainer from "./components/TodoListContainer";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return <>
  <TodoTemplate>
  <Header/>
  <TodoListContainer/>
  <TodoInsert/>
  </TodoTemplate>
  </>;
}

export default App;
