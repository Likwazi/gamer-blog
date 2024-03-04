import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="App">
      <SiteHeader/>
      <Routes>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route path="/details/:id">
          <ReviewDetails/>
        </Route>
        <Route path="/category/:id">
          <Category/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
