import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import { Card } from "../card/Card";
import { ToolBar } from "../toolbar/ToolBar";
import { Button } from "../button/Button";

/**
 * A Dialog with actions.
 * @param {title} title Title of the dialog
 * @param {leftLabel} leftLabel Text of the button on the top left of the dialog
 * @param {onLeftLabelClick} onLeftLabelClick Event handler (gets fired when the user clicks the left button)
 * @param {rightLabel} rightLabel Text of the button on the top right of the dialog
 * @param {onRightLabelClick} onRightLabelClick Event handler (gets fired when the user clicks the right button)
 * @param {body} body Items in the main area of the Dialog
 * @param {active} active Whether the dialog is open or not
 * @param {fullscreen} fullscreen Whether the dialog fills the whole screen or not
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the dialog
 */
export const Dialog = ({
  title,
  leftLabel,
  onLeftLabelClick,
  rightLabel,
  onRightLabelClick,
  body,
  active,
  fullscreen,
  ...otherProps
}) => (
  <DialogWrapper open={active} fullscreen={fullscreen} {...otherProps}>
    <DialogBodyWrapper
      header={
        <DialogHeader
          title={title}
          leftItems={[
            <Button
              value={leftLabel}
              onClick={onLeftLabelClick}
              key="leftLabel"
            />
          ]}
          rightItems={[
            <Button
              value={rightLabel}
              onClick={onRightLabelClick}
              type="submit"
              key="rightLabel"
            />
          ]}
        />
      }
      body={body}
    />
  </DialogWrapper>
);

const DialogWrapper = styled.dialog`
  ${({ fullscreen }) =>
    fullscreen
      ? "position: fixed; top: 0; left: 0;height: 100%; width: 100%; overflow-y: auto"
      : "height: auto; width: auto"};
  padding: 0;
  border: 0;
  & > div {
    margin: 1rem;
  }
  & > div > div:first-child > menu > menu:first-child {
    padding-left: 0;
  }
  & > div > div:first-child > menu > menu:last-child {
    padding-right: 0;
  }
`;

const DialogBodyWrapper = styled(Card)``;
const DialogHeader = styled(ToolBar)``;

Dialog.propTypes = {
  title: PropTypes.string,
  leftLabel: PropTypes.string,
  onLeftLabelClick: PropTypes.func,
  rightLabel: PropTypes.string,
  onRightLabelClick: PropTypes.func,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  active: PropTypes.bool,
  fullscreen: PropTypes.bool
};
