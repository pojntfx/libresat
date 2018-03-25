import { Component, Fragment } from "react";
import { MainNavigation } from "../components/global/MainNavigation";
import styled from "styled-components";

export class HomeLayout extends Component {
  state = {
    mainNavigationIsTransparent: true
  };

  handleScroll = () => {
    window.scrollY > 477
      ? this.setState({ mainNavigationIsTransparent: false })
      : this.setState({ mainNavigationIsTransparent: true });
  };

  componentDidMount = () => {
    // Check once at start
    this.handleScroll();
    // Check again when user has scrolled
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll");
  };

  render() {
    const { children } = this.props;
    const { mainNavigationIsTransparent } = this.state;

    return (
      <Fragment>
        <HomeNavigation translucent={mainNavigationIsTransparent} />
        <HomeContainer>{children}</HomeContainer>
      </Fragment>
    );
  }
}

const HomeNavigation = styled(({ className }) => (
  <header className={`bg-dark sticky-top ${className}`}>
    <MainNavigation />
  </header>
))`
  ${props =>
    props.translucent
      ? `background: inherit`
      : `background: rgba(0, 0, 0, 0.9)!important`};
  transition: background 0.2s ease-in-out;
`;

const HomeContainer = ({ children }) => (
  <div className="container pt-2">{children}</div>
);
