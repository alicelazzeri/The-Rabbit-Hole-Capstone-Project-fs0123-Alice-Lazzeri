import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAustenFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";

const AustenPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAustenFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="discoverMoreContainer d-flex flex-column justify-content-center align-items-center">
        <div className="austenContainer">
          <h1 className="discoverMoreTitle">Jane Austen</h1>
        </div>
        <h3 className="discoverMoreSubtitle">
          Discover the selected range of Jane Austen's masterpieces offered on The Rabbit Hole!
        </h3>
      </div>
      <CarouselCard />
    </>
  );
};

export default AustenPage;
