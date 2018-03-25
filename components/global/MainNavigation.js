import {
  UncontrolledDropdown,
  DropdownToggle,
  Collapse,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import styled from "styled-components";
import Link from "next/link";

export class MainNavigationTemplate extends React.Component {
  state = {
    versionInfoIsOpen: false
  };

  toggleVersionInfo = () => {
    this.setState({
      versionInfoIsOpen: !this.state.versionInfoIsOpen
    });
  };

  render() {
    const { className } = this.props;
    const { versionInfoIsOpen } = this.state;
    const { toggleVersionInfo } = this;

    return (
      <div
        className={`d-flex py-3 align-items-center justify-content-between sticky-top ${className}`}
      >
        <div>
          <Brand
            to="/"
            alt="OpenSDCP Logo"
            img="/static/logo-navbar.png"
            className="pl-3 pr-1 pr-sm-3 navbar__brand--logo"
          />
        </div>
        <div className="container align-items-center d-flex">
          <nav className="nav flex-nowrap">
            <MainNavigationLink
              to="/software"
              text="Software"
              className="pl-md-0"
            />
            <MainNavigationLink to="/hardware" text="Hardware" />
            <MainNavigationLink
              to="/network"
              text="Network"
              className="mr-0 mr-xl-5"
            />
            <MainNavigationLink to="/docs" text="Docs" />
            <MainNavigationLink to="/blog" text="Blog" />
            <MainNavigationLink to="/forum" text="Forum" />
          </nav>
          <nav className="nav flex-nowrap ml-lg-auto">
            <form className="ml-3 form-inline">
              <input
                className="form-control form-control--search"
                type="search"
                placeholder="Search the docs"
                aria-label="Search"
              />
            </form>
          </nav>
        </div>
        <div>
          <nav className="nav flex-nowrap d-flex align-items-center pl-1">
            <UncontrolledDropdown>
              <DropdownToggle
                nav
                caret
                onClick={toggleVersionInfo}
                className="text-light text-nowrap text-center"
              >
                2018.04
              </DropdownToggle>
              <Collapse isOpen={versionInfoIsOpen}>
                <DropdownListGroup>
                  <ListGroupItem action>
                    <MainNavigationLink
                      to="/versions/2017-10"
                      text="2017.10"
                      className="text-dark"
                    />
                  </ListGroupItem>
                  <ListGroupItem action>
                    <MainNavigationLink
                      to="/about-versioning"
                      text="Versioning info"
                      className="text-dark"
                    />
                  </ListGroupItem>
                </DropdownListGroup>
              </Collapse>
            </UncontrolledDropdown>
            <MainNavigationLink
              to="https://github.com/opensdcp"
              text="GitHub"
              className="pr-3"
            />
          </nav>
        </div>
      </div>
    );
  }
}

export const MainNavigation = styled(MainNavigationTemplate)`
  // Make navbar responsive
  overflow-x: auto;

  // Prevent glitches when using navbar on small screen
  @media (max-width: 1200px) {
    & .container {
      width: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    & .container {
      max-width: 100%;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    & .container {
      max-width: 100%;
      margin-right: auto;
      min-width: 767.98px;
    }
  }

  // Center the main navigation when on desktop
  @media (min-width: 1200px) {
    & > div:first-child,
    & > div:last-child {
      width: 200px;
    }
  }

  & .form-control--search {
    width: 200px;
  }
`;

const MainNavigationLink = ({ className, to, text }) => (
  <Link href={to}>
    <a className={`nav-link text-light${className ? " " + className : ""}`}>
      {text}
    </a>
  </Link>
);

const Brand = styled(({ className, to, alt, img }) => (
  <Link href={to}>
    <img className={className} alt={alt} src={img} />
  </Link>
))`
  max-width: 130px;
  cursor: pointer;
`;

const DropdownListGroup = styled(ListGroup)`
  min-width: 200px;
`;
