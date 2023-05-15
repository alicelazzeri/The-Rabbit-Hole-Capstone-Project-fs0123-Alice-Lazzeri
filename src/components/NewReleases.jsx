import HomeCard from "./HomeCard";

const NewReleases = () => {
  return (
    <>
      <div className="releasesContainer">
        <div className="divider"></div>
        <h1 className="releasesTitle text-center text-md-start">Recently viewed</h1>
        <p className="releasesBody text-center text-md-start">
          Check again the books you recently viewed from our collection!
        </p>
      </div>
      <HomeCard />
    </>
  );
};

export default NewReleases;
