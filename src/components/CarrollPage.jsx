import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarrollFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";

const CarrollPage = () => {
  // const books = useSelector(state => state.home.content?.data);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarrollFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="discoverMoreContainer d-flex flex-column justify-content-center align-items-center">
        <div className="carrollContainer">
          <h1 className="discoverMoreTitle">Lewis Carroll</h1>
        </div>
        <h3 className="discoverMoreSubtitle">
          Discover the selected range of Lewis Carroll's masterpieces offered on The Rabbit Hole!
        </h3>
      </div>
      <CarouselCard />
    </>
  );
};

export default CarrollPage;
