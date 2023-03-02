import { Outlet } from "react-router-dom";
import classesApp from "./App.module.css";

function App() {
  return (
    <div className={classesApp.app}>
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
