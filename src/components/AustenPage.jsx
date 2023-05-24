import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAustenFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";
import HomeButton from "./HomeButton";
import LoadingSpinner from "./LoadingSpinner";

const AustenPage = () => {
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getAustenFetch());
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </div>
  );
};

export default AustenPage;
