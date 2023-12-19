import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "./router/privateRoute";
// import PrivateRoute from "./router/privateRoute";
import { AllRoutes } from "./router/router";
import Login from "./screens/login/login";
import Home from "./screens/home/home";
import AddTodo from "./screens/Addtodo/additems";
import Registration from "./screens/login/register";


function App() {
  return <BrowserRouter>
    <Routes>

      {/* Home Route */}
      <Route path={"/"} element={<Login />} />

      {/* Login Route */}
      <Route path={AllRoutes.login} element={<Login />} />

      <Route path={AllRoutes.register} element={<Registration />} />

      {/* Home Route */}
      <Route path={AllRoutes.home} element={
        <PrivateRoute path={AllRoutes.home}>
          <Home />
        </PrivateRoute>
      } />

      {/* Profile Route */}
      <Route path={AllRoutes.additems} element={<PrivateRoute path={AllRoutes.additems}>
        <AddTodo />
      </PrivateRoute>} />

     

    </Routes>
  </BrowserRouter>;
}

export default App;