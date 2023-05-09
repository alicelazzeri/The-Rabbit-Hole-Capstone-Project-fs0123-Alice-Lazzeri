import NewsletterForm from "./NewsletterForm";
import { BsEnvelopePaperHeart } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="newsletterContainer d-flex flex-column flex-lg-row justify-content-around align-items-start px-5">
      <div className="mt-2 text-center text-md-start">
        <h1 className="newsletterTitle">
          <BsEnvelopePaperHeart className="me-3" />
          Join our newsletter
        </h1>
        <p className="newsletterBody">
          Join the mailing list of <span className="spanTitle">The Rabbit Hole</span> and stay tuned! You will receive
          updates on the latest releases, exclusive content and special discounts on future purchases!
        </p>
      </div>
      <NewsletterForm />
    </div>
  );
};

export default NewsLetter;
