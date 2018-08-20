import React, { Component } from "react";
import {
  Container,
  TextField,
  Tool,
  Button,
  Card,
  Expand
} from "../../lib/framework";
import styled from "styled-components";
import { PropTypes } from "prop-types";

export class Login extends Component {
  state = {
    serverFormIsOpen: true,
    accountFormIsOpen: false,
    passwordFormIsOpen: false
  };

  toggleExpand = (expand, event) => {
    event.preventDefault();
    switch (expand) {
      case "server":
        this.setState({ serverFormIsOpen: !this.state.serverFormIsOpen });
        break;
      case "account":
        this.setState({ accountFormIsOpen: !this.state.accountFormIsOpen });
        break;
      case "password":
        this.setState({ passwordFormIsOpen: !this.state.passwordFormIsOpen });
        break;
      default:
        break;
    }
  };

  closeExpand = expand => {
    switch (expand) {
      case "server":
        this.setState({ serverFormIsOpen: false });
        break;
      case "account":
        this.setState({ accountFormIsOpen: false });
        break;
      case "password":
        this.setState({ passwordFormIsOpen: false });
        break;
      default:
        break;
    }
  };

  openExpand = expand => {
    switch (expand) {
      case "server":
        this.setState({ serverFormIsOpen: true });
        break;
      case "account":
        this.setState({ accountFormIsOpen: true });
        break;
      case "password":
        this.setState({ passwordFormIsOpen: true });
        break;
      default:
        break;
    }
  };

  continueFromTo = (current, next) => {
    this.closeExpand(current);
    this.openExpand(next);
  };

  render() {
    const { toggleExpand, continueFromTo } = this;
    const {
      serverFormIsOpen,
      accountFormIsOpen,
      passwordFormIsOpen
    } = this.state;

    return (
      <WelcomeWrapper>
        <StepExpand
          summary="Server"
          open={serverFormIsOpen}
          onClick={event => toggleExpand("server", event)}
        >
          <ServerForm onSelect={() => continueFromTo("server", "account")} />
        </StepExpand>
        <StepExpand
          summary="Account"
          open={accountFormIsOpen}
          onClick={event => toggleExpand("account", event)}
        >
          <AccountForm onSelect={() => continueFromTo("account", "password")} />
        </StepExpand>
        <StepExpand
          summary="Password"
          open={passwordFormIsOpen}
          onClick={event => toggleExpand("password", event)}
        >
          <PasswordForm />
        </StepExpand>
      </WelcomeWrapper>
    );
  }
}

const ServerForm = ({ onSelect }) => (
  <ServerSelector>
    <ServerList>
      <ServerCard
        header={
          <Tool divided>
            <span>AlphaNet Corsica 1</span>
            <Button value="Settings" onClick={onSelect} />
          </Tool>
        }
        media={
          <ServerImage
            src="https://s31.postimg.cc/obkm34e2z/mink-mingle-233730-unsplash.jpg"
            alt="Image of a beach"
          />
        }
        footer={
          <Tool divided>
            <Expand summary="Info" open={false} onClick={() => null}>
              Location: Bastia<br />
              License: AGPL-3.0 <br />
              Homepage: <a href="https://opensdcp.org">opensdcp.org</a>
            </Expand>
            <Button value="Select" onClick={onSelect} />
          </Tool>
        }
      >
        The {"Mediterranean's"} friendly OpenSNET access point! Join us and our{" "}
        <a href="https://opensdcp.org">local community</a>!
      </ServerCard>
      <ServerCard
        header={
          <Tool divided>
            <span>AlphaNet Corsica 1</span>
            <Button value="Settings" onClick={onSelect} />
          </Tool>
        }
        media={
          <ServerImage
            src="https://s31.postimg.cc/obkm34e2z/mink-mingle-233730-unsplash.jpg"
            alt="Image of a beach"
          />
        }
        footer={
          <Tool divided>
            <Expand summary="Info" open={false} onClick={() => null}>
              Location: Bastia<br />
              License: AGPL-3.0 <br />
              Homepage: <a href="https://opensdcp.org">opensdcp.org</a>
            </Expand>
            <Button value="Select" onClick={onSelect} />
          </Tool>
        }
      >
        The {"Mediterranean's"} friendly OpenSNET access point! Join us and our{" "}
        <a href="https://opensdcp.org">local community</a>!
      </ServerCard>
    </ServerList>
  </ServerSelector>
);

ServerForm.propTypes = {
  onSelect: PropTypes.func.isRequired
};

const AccountForm = ({ onSelect }) => (
  <AccountsSelector>
    <AccountsList>
      <AccountCard
        header={
          <Tool divided>
            <UserName>Max Mustermann</UserName>
            <Button value="Settings" onClick={() => null} />
          </Tool>
        }
        media={
          <AccountImage
            src="https://s31.postimg.cc/obkm34e2z/mink-mingle-233730-unsplash.jpg"
            alt="Image of a beach"
          />
        }
        footer={
          <SelectAccountButton value="Selected" onClick={onSelect} active />
        }
      />
      <AccountCard
        header={
          <Tool divided>
            <UserName>Max Mustermann</UserName>
            <Button value="Settings" onClick={() => null} />
          </Tool>
        }
        media={
          <AccountImage
            src="https://s31.postimg.cc/obkm34e2z/mink-mingle-233730-unsplash.jpg"
            alt="Image of a beach"
          />
        }
        footer={<SelectAccountButton value="Select" onClick={onSelect} />}
      />
      <AccountCard
        header={
          <Tool divided>
            <UserName>Max Mustermann</UserName>
            <Button value="Settings" onClick={() => null} />
          </Tool>
        }
        media={
          <AccountImage
            src="https://s31.postimg.cc/obkm34e2z/mink-mingle-233730-unsplash.jpg"
            alt="Image of a beach"
          />
        }
        footer={<SelectAccountButton value="Select" onClick={onSelect} />}
      />
    </AccountsList>
  </AccountsSelector>
);

AccountForm.propTypes = {
  onSelect: PropTypes.func.isRequired
};

const PasswordForm = () => (
  <PasswordFormWrapper>
    <PasswordField
      type="password"
      placeholder="Password"
      name=""
      value=""
      onInput={() => null}
    />
    <ContinueBar>
      <Button value="Settings" onClick={() => null} />
      <Button value="Login" onClick={() => null} primary />
    </ContinueBar>
  </PasswordFormWrapper>
);

const PasswordFormWrapper = styled.div`
  margin: 0 auto;
  max-width: 20rem;
`;

const StepExpand = styled(Expand)`
  width: 100%;
  overflow-x: auto;
`;

const ServerSelector = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServerList = styled(Tool)`
  padding: 4px;
  &::after {
    content: "";
    padding: 2px;
  }
`;

const ServerCard = styled(Card)``;

const ServerImage = styled.img`
  width: 300px;
  height: 100px;
  object-fit: cover;
`;

const AccountsSelector = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AccountsList = styled(Tool)`
  padding: 4px;
  &::after {
    content: "";
    padding: 2px;
  }
`;

const AccountCard = styled(Card)`
  width: 20rem;
`;

const AccountImage = styled.img`
  width: 15rem;
  height: 15rem;
  padding: 1rem 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const SelectAccountButton = styled(Button)`
  width: 100%;
`;

const WelcomeWrapper = styled(Container)`
  /* Make it full height and width */
  position: absolute;
  box-sizing: border-box;
  /* Center horizontally and vertically */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  flex-direction: column;
  & > *:not(${ServerSelector}) {
    &:not(${AccountsSelector}) {
      margin: 0 auto;
    }
  }
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const UserName = styled.div`
  text-align: center;
`;

const PasswordField = styled(TextField)`
  margin: 1rem 0;
  margin-top: 0.5rem;
`;

const ContinueBar = styled(Tool).attrs({ divided: true })`
  width: 100%;
`;
