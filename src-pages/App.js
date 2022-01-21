import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddForm from "./pages/AddForm";
import Excellsheet from "./pages/Excellsheet";
import Blogs from "./pages/Blogs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddForm />}>
          <Route index element={<AddForm />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Route>
        <Route path="/excel" element={<Excellsheet />}>
          <Route index element={<Excellsheet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));