import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDickensFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";
import HomeButton from "./HomeButton";

const DickensPage = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getDickensFetch());
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
          <div className="dickensContainer">
            <h1 className="discoverMoreTitle">Charles Dickens</h1>
          </div>
          <h3 className="discoverMoreSubtitle">
            Discover the selected range of Charles Dickens' masterpieces offered on The Rabbit Hole!
          </h3>
        </div>
        <CarouselCard />
        <HomeButton />
      </>
    </div>
  );
};

export default DickensPage;
