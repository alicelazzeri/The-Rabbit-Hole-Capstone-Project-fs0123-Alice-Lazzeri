import logo from "../assets/images/logo.png";
import HomeButton from "./HomeButton";
const NotFound = () => {
  return (
    <div className="notFoundContainer text-center">
      <img src={logo} width={300} alt="Logo" className="rounded-circle mb-5" />
      <h1 className="notFoundTitle mt-1">404 &ndash; Page not found</h1>
      <p class="notFoundBody mx-5 my-5 text-center">
        We're sorry, but the page you were looking for doesn't seem to exist. Try searching for another page or go back
        to the homepage.
      </p>
      <HomeButton />
    </div>
  );
};

export default NotFound;
