import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import RabbitFooter from "./components/RabbitFooter";
import NotFound from "./components/NotFound";
import BookSearch from "./components/BookSearch";
import FavouritesBooks from "./components/FavouriteBooks";
import LoginPage from "./components/LoginPage";
import TopScrollBtn from "./components/TopScrollBtn";
import {
  getAustenFetch,
  getBooksFetch,
  getCarrollFetch,
  getDickensFetch,
  getHardyFetch,
  getQueryBookFetch,
} from "./redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import BookDetails from "./components/BookDetails";
import CarrollPage from "./components/CarrollPage";
import AustenPage from "./components/AustenPage";
import DickensPage from "./components/DickensPage";
import HardyPage from "./components/HardyPage";
import RegistrationPage from "./components/RegistrationPage";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksFetch());
    dispatch(getCarrollFetch());
    dispatch(getAustenFetch());
    dispatch(getDickensFetch());
    dispatch(getHardyFetch());
    dispatch(getQueryBookFetch());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carroll" element={<CarrollPage />} />
          <Route path="/austen" element={<AustenPage />} />
          <Route path="/dickens" element={<DickensPage />} />
          <Route path="/hardy" element={<HardyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/favourites" element={<FavouritesBooks />} />
          <Route path="/details/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <RabbitFooter />
      </BrowserRouter>
      <TopScrollBtn />
    </div>
  );
}

export default App;
