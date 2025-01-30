import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import IngestData from "./components/IngestData/IngestData";
import ExploreData from "./components/ExploreData/ExploreData";
import DeleteData from "./components/DeleteData/DeleteData";
import Configuration from "./components/Configuration/Configuration";
import MainNavLink from "./components/navbar/MainNavLink";
import "./components/navbar/MainNavLink.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="container">
            <div className="sidebar">
              <MainNavLink />
            </div>
            <div className="content">
              <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/Ingest_Data" element={<IngestData />} />
                <Route path="/Explore_Data" element={<ExploreData />} />
                <Route path="/Delete_Data" element={<DeleteData />} />
                <Route path="/Configuration" element={<Configuration />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
