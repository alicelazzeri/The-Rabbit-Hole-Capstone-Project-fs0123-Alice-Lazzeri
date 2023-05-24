import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carroll from "../assets/images/carroll.jpg";
import austen from "../assets/images/austen.jpg";
import dickens from "../assets/images/dickens.jpg";
import hardy from "../assets/images/hardy.png";
import NewsLetter from "./NewsLetter";
import About from "./About";
import NewReleases from "./NewReleases";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getBooksFetch } from "../redux/actions";

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await dispatch(getBooksFetch());
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="homeContainer">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Carousel id="carouselHero" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-100 carouselPic" src={carroll} alt="Slide pic" width={500} height={600} />
              <Carousel.Caption>
                <blockquote className="blockquote mb-0">
                  <p> “And what is the use of a book," thought Alice, "without pictures or conversation?”</p>
                  <footer className="blockquote-footer">
                    Lewis Carroll, <cite title="Source Title">Alice's Adventures in Wonderland</cite>
                  </footer>
                </blockquote>
                <Link to="/carroll">
                  <button className="carouselBtn"> Discover more</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 carouselPic" src={austen} alt="Slide pic" width={500} height={600} />
              <Carousel.Caption>
                <blockquote className="blockquote mb-0">
                  <p className="austenSlide">
                    {" "}
                    I declare after all there is no enjoyment like reading! [...] When I have a house of my own, I shall
                    be miserable if I have not an excellent library.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Jane Austen, <cite title="Source Title">Pride and Prejudice</cite>
                  </footer>
                </blockquote>
                <Link to="/austen">
                  <button className="carouselBtn"> Discover more</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 carouselPic" src={dickens} alt="Slide pic" width={500} height={600} />
              <Carousel.Caption>
                <blockquote className="blockquote">
                  <p>
                    {" "}
                    This was my only and my constant comfort. [...] The picture always rises in my mind, of a summer
                    evening, the boys at play in the churchyard, and I sitting on my bed, reading as if for life.
                  </p>
                  <footer className="blockquote-footer">
                    Charles Dickens, <cite title="Source Title">David Copperfield</cite>
                  </footer>
                </blockquote>
                <Link to="/dickens">
                  <button className="carouselBtn"> Discover more</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 carouselPic" src={hardy} alt="Slide pic" width={500} height={600} />
              <Carousel.Caption>
                <blockquote className="blockquote">
                  <p>
                    {" "}
                    To speak like a book I once read, wet weather is the narrative, and fine days are the episodes, of
                    our country’s history.
                  </p>
                  <footer className="blockquote-footer">
                    Thomas Hardy, <cite title="Source Title">Far from the Madding Crowd</cite>
                  </footer>
                </blockquote>
                <Link to="/hardy">
                  <button className="carouselBtn"> Discover more</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <About />
          <NewReleases />
          <NewsLetter />
        </>
      )}
    </div>
  );
};

export default HomePage;
