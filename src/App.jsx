// // import React from "react";

// // const App = () => {
// //   return <div>App</div>;
// // };

// // export default App;

import React from "react";
import SampleHeader from "./layout/SampleHeader";
import Gal from "./Components/Gal";
import Ninput from "./Components/Ninput";
import Detail from "./Components/Detail";
import Poster from "./Components/Poster";
import Reason from "./Components/Reason";
import FAQ from "./Components/FAQ";
import LB from "./Components/LB";

const App = () => {
  return (
    <>
      <SampleHeader />
      <main>
        <Gal />
        <Ninput />
        <Detail />
        <Poster />
        <Poster />
        <Reason />
        <FAQ />
        <LB />
      </main>
    </>
  );
};

export default App;
