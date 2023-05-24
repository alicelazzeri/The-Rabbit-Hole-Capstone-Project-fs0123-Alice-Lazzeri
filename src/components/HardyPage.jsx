import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHardyFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";
import HomeButton from "./HomeButton";
import LoadingSpinner from "./LoadingSpinner";

const HardyPage = () => {
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getHardyFetch());
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
            <div className="hardyContainer">
              <h1 className="discoverMoreTitle">Thomas Hardy</h1>
            </div>
            <h3 className="discoverMoreSubtitle">
              Discover the selected range of Thomas Hardy's masterpieces offered on The Rabbit Hole!
            </h3>
          </div>
          <CarouselCard />
          <HomeButton />
        </>
      )}
    </div>
  );
};

export default HardyPage;
