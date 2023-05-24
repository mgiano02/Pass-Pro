import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./nav/Nav";
import EventForm from "./events/EventForm";
import EventManager from "./events/EventManager";
import EventDetail from "./events/EventDetail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events">
            <Route path="" element={<EventManager />} />
            <Route path="form" element={<EventForm />} />
            <Route path="detail" element={<EventDetail />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
