import React from "react";

// PropTypes
import PropTypes from "prop-types";

// Styled components
import styled from "styled-components";

// Components
import { Button } from "../eluseum-framework";

const DialogHeader = ({
  leftButtonValue,
  leftButtonColor,
  leftButtonIcon,
  onLeftButtonClick,
  title,
  rightButtonValue,
  rightButtonColor,
  rightButtonIcon,
  onRightButtonClick
}) => {
  return (
    <DialogHeaderBar>
      <LeftButtonWrapper>
        <Button
          value={leftButtonValue}
          color={leftButtonColor}
          icon={leftButtonIcon}
          onClick={onLeftButtonClick}
          type="reset"
        />
      </LeftButtonWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <RightButtonWrapper>
        <Button
          value={rightButtonValue}
          color={rightButtonColor}
          icon={rightButtonIcon}
          onClick={onRightButtonClick}
          type="submit"
        />
      </RightButtonWrapper>
    </DialogHeaderBar>
  );
};

// Header bar
const DialogHeaderBar = styled.menu`
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
`;

// Left button wrapper
const LeftButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  & > button > span {
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

// Title wrapper
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-weight: bold;
  margin: 0rem 0.75rem;
`;

// Right button wrapper
const RightButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  & > button > span {
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

DialogHeader.propTypes = {
  leftButtonValue: PropTypes.string.isRequired,
  leftButtonColor: PropTypes.string.isRequired,
  leftButtonIcon: PropTypes.string,
  onLeftButtonClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  rightButtonValue: PropTypes.string.isRequired,
  rightButtonColor: PropTypes.string.isRequired,
  rightButtonIcon: PropTypes.string,
  onRightButtonClick: PropTypes.func.isRequired
};

export default DialogHeader;
