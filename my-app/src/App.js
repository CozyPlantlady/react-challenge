import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />

    </div>
  );
}

export default App;