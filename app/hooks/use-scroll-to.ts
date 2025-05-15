import { useEffect, useState } from "react";

const useScrollTo = ({
  to,
  topThreshold = 0,
  bottomThreshold = 0,
}: { to: string; topThreshold?: number; bottomThreshold?: number }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = document.getElementById(to);
    if (!element) return;
    const setActiveStatus = () => {
      setActive(
        window.scrollY >= element.offsetTop - topThreshold
        && window.scrollY < (element.offsetTop + element.scrollHeight + bottomThreshold)
      );
    }
    const onScroll = () => {
      setActiveStatus();
    };

    window.removeEventListener("scroll", () => {})
    window.addEventListener("scroll", onScroll, { passive: true });

    setActiveStatus();

    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, [to, topThreshold, bottomThreshold]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      window.scroll({ behavior: "smooth", top: element.offsetTop });
    }
  };

  return {
    active,
    handleClick,
  }
}

export default useScrollTo;
