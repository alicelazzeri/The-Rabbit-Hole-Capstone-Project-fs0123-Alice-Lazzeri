const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle text-center text-md-start">
        The story behind <span className="aboutSpan">The Rabbit Hole</span>
      </h1>
      <div className="my-5 text-center text-md-start pe-md-0">
        <p className="aboutBody">
          <span className="aboutSpan">The Rabbit Hole</span> was born with the intent of giving space to communication
          and sharing genuine emotions about literature, the lowest common denominator of this project.
        </p>
        <p className="aboutBody">
          This is a safe place for all those who love books and reading, especially for those who have a fond love for
          English literature, or those who aim to know more about one of the most extended literary traditions of the
          world.
        </p>

        <p className="aboutBody">
          Here you will find a wide variety of English books: go and explore them in the{" "}
          <strong className="aboutSpan">Search books</strong> section.
        </p>

        <p className="aboutBody">
          From time to time, it may happens to fall in love with an author, a character, or the whole story: you can add
          the novels that left you speechless or that piqued your interest in the{" "}
          <strong className="aboutSpan">Favourites</strong> section.
        </p>

        <p className="aboutBody">
          Before starting, don't forget to <strong className="aboutSpan">register</strong> or{" "}
          <strong className="aboutSpan">log in</strong>, in order to record information and preferences whenever you pay
          us a visit!
        </p>

        <p className="aboutBody">Have a nice journey!</p>
      </div>
    </div>
  );
};

export default About;
