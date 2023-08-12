import React from "react";
import underDevelopmentGif from "./underDevelopmentGif1.gif";
import girlWorking from "./girlWorking.gif";
import underDevelopmentCss from "./UnderDevelopment.module.css";

function UnderDevelopment() {
  return (
    <div className={underDevelopmentCss.wrapper}>
      <h1 className={underDevelopmentCss.mainH1}>We are Working on it</h1>
      <img className={underDevelopmentCss.imgTag} src={underDevelopmentGif} />
      <img className={underDevelopmentCss.imgTag} src={girlWorking} />
    </div>
  );
}

export default UnderDevelopment;
