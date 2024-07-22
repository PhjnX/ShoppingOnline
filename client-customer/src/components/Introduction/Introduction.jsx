import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import AboutSpecial from "./AboutSpecial/AboutSpecial";
import AboutProfile from "./AboutProfile/AboutProfile";
import AboutComment from "./AboutComment/AboutComment";

export default function Introduction() {
  return (
    <div className="pt-32">
      <AboutUs />
      <AboutSpecial />
      <AboutProfile />
      <AboutComment />
    </div>
  );
}
