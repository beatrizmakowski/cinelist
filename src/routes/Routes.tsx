import { BrowserRouter, Route, Routes as DomRoutes } from "react-router-dom";
import { CanSee } from "../components/CanSee";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route
          path="/"
          element={
            <CanSee>
              <Login />
            </CanSee>
          }
        />
        <Route path="registration" element={<Registration />} />
      </DomRoutes>
    </BrowserRouter>
  );
}
