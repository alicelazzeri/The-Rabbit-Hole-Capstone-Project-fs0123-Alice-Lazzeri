import { useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

const TopScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 150) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsVisible(false);
      setIsAnimating(false);
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
      className={`scrollBtn scroll-to-top-button ${isVisible ? "visible" : "hidden"} ${isAnimating ? "animating" : ""}`}
      onClick={handleScrollToTop}
    >
      <HiArrowCircleUp />
    </button>
  );
};

export default TopScrollBtn;
