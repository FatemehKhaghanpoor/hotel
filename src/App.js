import { Container } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import HeaderComponent from "./components/header";

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNIN_ROUTE,
  RESERVE_ROUTE,
} from "./constant/routes";

import Home from "./pages/home";

import Login from "./pages/login";
import NotFound from "./pages/notFound";
import SignIn from "./pages/signIn";

import ReservePage from "./pages/reserve";
import FooterComponent from "./components/footer";

function App() {
  const location = useLocation();
  const isLoginSignin =
    location.pathname.includes(LOGIN_ROUTE) ||
    location.pathname.includes(SIGNIN_ROUTE);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {!isLoginSignin && <HeaderComponent />}
      <div className="pt-7 w-full">
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />

          <Route path={LOGIN_ROUTE} element={<Login />} />

          <Route path={SIGNIN_ROUTE} element={<SignIn />} />

          <Route path={"*"} element={<NotFound />} />

          <Route path={RESERVE_ROUTE} element={<ReservePage />} />
        </Routes>
      </div>
      <Toaster />
      {!isLoginSignin && <FooterComponent />}
    </Container>
  );
}

export default App;
