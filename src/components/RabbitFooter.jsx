import { BsInstagram, BsFacebook, BsTwitter, BsPinterest, BsYoutube } from "react-icons/bs";
import { FaGoodreads } from "react-icons/fa";
import logo from "../assets/images/logo.png";
const RabbitFooter = () => {
  return (
    <footer id="footer">
      <div className="flexFooter d-flex justify-content-start align-items-start px-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-5">
          <div className="d-flex flex-column align-items-start">
            <p>
              <strong className="footerTitle">About us</strong>
            </p>
            <p className="footerLinks">Our company</p>
            <p className="footerLinks">Work with us</p>
            <p className="footerLinks">Contact us</p>
            <p className="footerLinks">FAQs</p>
          </div>
          <div className="d-flex flex-column align-items-start">
            <p>
              <strong className="footerTitle">Useful links</strong>
            </p>
            <p className="footerLinks">Company policy</p>
            <p className="footerLinks">Cookies policy</p>
            <p className="footerLinks">Terms and conditions</p>
            <p className="footerLinks">Accessibility</p>
          </div>
          <div className="d-flex flex-column align-items-start">
            <p>
              <strong className="footerTitle lastTitle me-0">Stay connected</strong>
            </p>
            <div className="socialIcons d-flex flex-wrap me-0 mb-3">
              <BsInstagram className="footerIcon" />
              <BsFacebook className="footerIcon" />
              <BsTwitter className="footerIcon" />
              <BsPinterest className="footerIcon" />
              <BsYoutube className="footerIcon" />
              <FaGoodreads className="footerIcon" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-start align-items-md-center mt-5 px-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <img src={logo} alt="Logo pic" width={40} height={40} className="rounded-circle mb-2 mb-md-0" />
          <p className="footerTitle mt-2 mt-md-0 mb-0 ms-md-2">The Rabbit Hole</p>
        </div>
        <p className="copyright mt-2 mt-md-0 mb-0"> &#169; 2023 The Rabbit Hole | Epicode | Alice Lazzeri</p>
      </div>
    </footer>
  );
};

export default RabbitFooter;
