import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./views/Main";
import UpdateLesson from "./components/UpdateLesson";
import LessonForm from "./components/LessonForm";
import LessonList from "./components/LessonList";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<LessonList/>}/>
        <Route path="/lesson" element={<LessonForm/>}/>
        <Route path="/lesson/:id" element={<Main/>}/>
        <Route path="/lesson/edit/:id" element={<UpdateLesson/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
