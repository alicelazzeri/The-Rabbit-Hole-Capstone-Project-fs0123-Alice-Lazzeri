import HomeCard from "./HomeCard";

const NewReleases = () => {
  return (
    <>
      <div className="releasesContainer">
        <div className="divider"></div>
        <h1 className="releasesTitle text-center text-md-start">Newly Released</h1>
        <p className="releasesBody text-center text-md-start">Discover the newly released books of this month!</p>
      </div>
      <HomeCard />
    </>
  );
};

export default NewReleases;
