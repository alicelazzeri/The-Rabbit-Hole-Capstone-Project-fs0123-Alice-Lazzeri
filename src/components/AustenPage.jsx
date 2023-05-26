import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAustenFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";
import HomeButton from "./HomeButton";

const AustenPage = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAustenFetch());
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
          <div className="austenContainer">
            <h1 className="discoverMoreTitle">Jane Austen</h1>
          </div>
          <h3 className="discoverMoreSubtitle">
            Discover the selected range of Jane Austen's masterpieces offered on The Rabbit Hole!
          </h3>
        </div>
        <CarouselCard />
        <HomeButton />
      </>
    </div>
  );
};

export default AustenPage;
