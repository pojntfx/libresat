import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A Card with actions.
 * @param {header} header Items in the header of the card
 * @param {media} media Media (Images, Videos) of the card
 * @param {body} body Items in the main area of the card
 * @param {footer} footer Items in the footer of the card
 */
export const Card = ({ header, media, body, footer }) => (
  <CardWrapper>
    {header ? <CardHeaderWrapper>{header}</CardHeaderWrapper> : null}
    {media ? <CardMediaWrapper>{media}</CardMediaWrapper> : null}
    {body ? <CardBodyWrapper>{body}</CardBodyWrapper> : null}
    {footer ? <CardFooterWrapper>{footer}</CardFooterWrapper> : null}
  </CardWrapper>
);

const CardWrapper = styled.div`
  border: 1px solid #000000;
`;
const CardHeaderWrapper = styled.div`
  padding: 1rem;
`;
const CardMediaWrapper = styled.div``;
const CardBodyWrapper = styled.div`
  padding: 1rem;
`;
const CardFooterWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`;

Card.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  media: PropTypes.oneOfType([PropTypes.node]),
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
