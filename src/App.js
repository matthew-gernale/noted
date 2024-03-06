import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import NotePage from './components/NotePage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
     <BrowserRouter basename="/noted">
      <Routes> 
        <Route path="/" element={<Layout/>}>
        </Route>
          <Route path="notes" element={<NotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
