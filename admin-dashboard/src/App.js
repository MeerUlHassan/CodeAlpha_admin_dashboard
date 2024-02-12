import "./App.css";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/singleUser/Single";
import New from "./Pages/new/New";
import { userInputs, productInputs } from "./formSource";

import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userid" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title={"Add new User"} />}
          />
        </Route>
        <Route path="product">
          <Route index element={<List />} />
          <Route path=":productid" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={productInputs} title={"Add new Product"} />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
