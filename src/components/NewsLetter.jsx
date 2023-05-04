import NewsletterForm from "./NewsletterForm";

const NewsLetter = () => {
  return (
    <div className="newsletterContainer d-flex flex-column flex-md-row justify-content-between align-items-start px-5">
      <div>
        <h1 className="newsletterTitle text-align-center text-align-md-start">Join our newsletter</h1>
        <p className="newsletterBody text-align-center text-align-md-start">
          Join the mailing list of <span className="spanTitle">The Rabbit Hole</span> and stay tuned! You will receive
          updates on the latest releases, exclusive content and special discounts on future purchases!
        </p>
      </div>
      <NewsletterForm />
    </div>
  );
};

export default NewsLetter;
