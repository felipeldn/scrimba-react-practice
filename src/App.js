import './App.css';
import NavBar from './components/NavBar.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import TodoItem from './components/TodoItem.js'

function App() {
  return (
    <div>
        <NavBar/>
        <Main />
        <div className="todo-list">
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
