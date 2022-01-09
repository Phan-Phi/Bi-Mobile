import { Route } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export function HomeTemplate(props) {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => (
        <Fragment>
          <Header />
          <Component {...propsRoute} />
          <Footer />
        </Fragment>
      )}
    />
  );
}
