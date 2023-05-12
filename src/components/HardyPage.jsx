import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHardyFetch } from "../redux/actions";
import CarouselCard from "./CarouselCard";

const HardyPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHardyFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
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
    </>
  );
};

export default HardyPage;
