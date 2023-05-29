import HomeCard from "./HomeCard";

const NewReleases = () => {
  return (
    <>
      <div className="releasesContainer">
        <div className="divider"></div>
        <h1 className="releasesTitle text-center text-md-start">Newly released</h1>
        <p className="releasesBody text-center text-md-start">
          Take a glimpse at the newly released books from our collection!
        </p>
      </div>
      <div>
        <HomeCard />
      </div>
    </>
  );
};

export default NewReleases;
