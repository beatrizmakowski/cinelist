import { BrowserRouter, Route, Routes as DomRoutes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </DomRoutes>
    </BrowserRouter>
  );
}
