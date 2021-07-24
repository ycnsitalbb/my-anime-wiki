import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
const BtnScrollToTop = () => {
  const [btnVisible, setBtnVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setBtnVisible(true);
    } else {
      setBtnVisible(false);
    }
  };
  useEffect(() => {
    const listner = window.addEventListener("scroll", toggleVisibility);
    return ()=>{
        listner.unListen();
    }
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const renderBtn = () => {
    if (btnVisible) {
      return (
        <Button primary icon="arrow up" onClick={scrollTop} floated="right" />
      );
    } else {
      return null;
    }
  };
  return renderBtn();
};
export default BtnScrollToTop;
