import React from "react";
import Navigation from "../components/layer/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
