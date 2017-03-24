import React from "react";
import { shallow } from "enzyme";

import HomePage from "../home";

test("HomePage renders a heading", () => {
  const homePage = shallow(<HomePage />);
  expect(homePage.find("h1").text()).toEqual("Awesome goes here");
});
