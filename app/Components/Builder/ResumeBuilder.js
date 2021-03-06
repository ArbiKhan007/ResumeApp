import React, { useContext, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ExperienceBuilder from "./ExperienceBuilder";
import HeaderBuilder from "./HeaderBuilder";
import RouterPanel from "./RouterPanel";
import ThemeChanger from "./ThemeChanger";
import PrintComp from "./PrintComp";
import ResumeContext from "../../../ResumeContext";
import QualificationsBuilder from "./QualificationBuilder";
import SkillsBuilder from "./SkillsBuilder";

function ResumeBuilder() {
  const darkStyle = {
    backgroundColor: "rgb(90, 89, 89)",
    color: "#fff"
  };

  const lightStyle = {
    backgroundColor: "#f2f2f2",
    color: "rgb(58, 46, 140)"
  };

  const { isDark } = useContext(ResumeContext);

  return (
    <div className="builder-container" style={isDark ? darkStyle : lightStyle}>
      <ThemeChanger />
      <PrintComp />
      <BrowserRouter>
        <RouterPanel />
        <Switch>
          <Route path="/qualif">
            <QualificationsBuilder />
          </Route>
          <Route path="/exper">
            <ExperienceBuilder />
          </Route>
          <Route path="/header">
            <HeaderBuilder />
          </Route>
          <Route path="/skills">
            <SkillsBuilder />
          </Route>
          <Route path="/">
            <HeaderBuilder />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default ResumeBuilder;

{
  /* <form action="#">
<input onChange={e => props.setName(e.target.value)} type="text" className="form-control" placeholder="First Name" />
<br />
<input onChange={e => props.setDesignation(e.target.value)} type="text" className="form-control" placeholder="Designation" />
<br />
<input onChange={e => props.setQualif(e.target.value)} type="text" className="form-control" placeholder="Qualifications" />
<br />
<input type="submit" value="Make a PDF" className="btn btn-primary" />
</form> */
}
