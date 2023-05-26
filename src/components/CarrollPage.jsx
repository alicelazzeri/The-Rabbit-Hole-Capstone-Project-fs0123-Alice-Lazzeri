import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarrollFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";
import HomeButton from "./HomeButton";

const CarrollPage = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCarrollFetch());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
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
        <HomeButton />
      </>
    </div>
  );
};

export default CarrollPage;
