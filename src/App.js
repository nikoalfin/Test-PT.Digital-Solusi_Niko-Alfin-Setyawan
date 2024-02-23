import Header from "./components/Header";
import TodoList from "./components/TodoList";
// p
function App() {
  return (
    <div className="root">
      <div className="content">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
