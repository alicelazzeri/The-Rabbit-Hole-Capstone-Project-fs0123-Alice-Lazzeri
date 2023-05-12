import { useSelector } from "react-redux";

const CarrollPage = () => {
  const books = useSelector(state => state.home.content?.data);
  return (
    <div className="discoverMoreContainer d-flex flex-column justify-content-center align-items-center">
      <div className="carrollContainer">
        <h1 className="discoverMoreTitle">Lewis Carroll</h1>
      </div>
      <h3 className="discoverMoreSubtitle">
        Discover the selected range of Lewis Carroll's masterpieces offered on The Rabbit Hole!
      </h3>
    </div>
  );
};

export default CarrollPage;
