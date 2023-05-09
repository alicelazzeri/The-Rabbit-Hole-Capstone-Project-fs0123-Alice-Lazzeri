import { useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

const TopScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`scrollBtn scroll-to-top-button ${isVisible ? "visible" : "hidden"}`}
      onClick={handleScrollToTop}
    >
      <HiArrowCircleUp />
    </button>
  );
};

export default TopScrollBtn;
//BsHeartArrow
