import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "./Components/MainPage";
import MyProjects from "./Components/MyProjects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<MyProjects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
