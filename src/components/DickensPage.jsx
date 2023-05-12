import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDickensFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";

const DickensPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDickensFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="discoverMoreContainer d-flex flex-column justify-content-center align-items-center">
        <div className="dickensContainer">
          <h1 className="discoverMoreTitle">Charles Dickens</h1>
        </div>
        <h3 className="discoverMoreSubtitle">
          Discover the selected range of Charles Dickens' masterpieces offered on The Rabbit Hole!
        </h3>
      </div>
      <CarouselCard />
    </>
  );
};

export default DickensPage;
