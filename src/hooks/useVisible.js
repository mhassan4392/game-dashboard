import { useState, useEffect } from "react";

const useVisible = (el) => {
  const [visible, setVisible] = useState(false);
  const [appeared, setAppeared] = useState(false);
  useEffect(() => {
    console.log("yes");
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log("entry", entry);
      console.log("entry.isIntersecting", entry.isIntersecting);
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        setAppeared(true);
      }
    });

    if (el.current) {
      console.log("yes", visible);
      // const rect = el.current.getBoundingClientRect();
      // const view =
      //   rect.top >= 0 &&
      //   rect.left >= 0 &&
      //   rect.bottom <=
      //     (window.innerHeight || document.documentElement.clientHeight) &&
      //   rect.right <=
      //     (window.innerWidth || document.documentElement.clientWidth);
      // console.log(view);
      observer.observe(el.current);
    }
  }, [el.current]);

  return { visible, appeared };
};

export default useVisible;
