import React, { useState } from "react";
import Onboard from "./components/Onboard";
import Home from "./components/Home";
const App = () => {
  const [showOnboard, setshowOnboard] = useState(true);
  const handelOnboardFinish = () => {
    setshowOnboard(false);
  };
  return (
    <>
      {showOnboard && <Onboard handleDone={handelOnboardFinish} />}
      {!showOnboard && <Home />}
    </>
  );
};
export default App;
