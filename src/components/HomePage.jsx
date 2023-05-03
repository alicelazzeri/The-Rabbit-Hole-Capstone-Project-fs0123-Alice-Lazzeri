import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import books from "../assets/images/books.jpg";
import austen from "../assets/images/austen.jpg";
import dickens from "../assets/images/dickens.jpg";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel id="carouselHero" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100 carouselPic" src={books} alt="Slide pic" width={500} height={600} />
        <Carousel.Caption>
          <blockquote className="blockquote mb-0">
            <p> “And what is the use of a book," thought Alice, "without pictures or conversation?”</p>
            <footer className="blockquote-footer">
              Lewis Carrol, <cite title="Source Title">Alice's Adventures in Wonderland</cite>
            </footer>
          </blockquote>
          <button className="carouselBtn"> Discover more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carouselPic" src={austen} alt="Slide pic" width={500} height={600} />
        <Carousel.Caption>
          <blockquote className="blockquote mb-0">
            <p className="austenSlide">
              {" "}
              I declare after all there is no enjoyment like reading! [...] When I have a house of my own, I shall be
              miserable if I have not an excellent library.{" "}
            </p>
            <footer className="blockquote-footer">
              Jane Austen, <cite title="Source Title">Pride and Prejudice</cite>
            </footer>
          </blockquote>
          <button className="carouselBtn"> Discover more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carouselPic" src={dickens} alt="Slide pic" width={500} height={600} />
        <Carousel.Caption>
          <blockquote className="blockquote">
            <p>
              {" "}
              This was my only and my constant comfort. [...] The picture always rises in my mind, of a summer evening,
              the boys at play in the churchyard, and I sitting on my bed, reading as if for life.
            </p>
            <footer className="blockquote-footer">
              Charles Dickens, <cite title="Source Title">David Copperfield</cite>
            </footer>
          </blockquote>
          <button className="carouselBtn"> Discover more</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePage;
