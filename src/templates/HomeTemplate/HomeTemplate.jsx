import { Route } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../../styles/responsive.scss";

export function HomeTemplate(props) {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => (
        <div className="main-full">
          <Header />
          <Component {...propsRoute} />
          <Footer />
        </div>
      )}
    />
  );
}
