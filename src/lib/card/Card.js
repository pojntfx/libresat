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
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { shadows } }) => shadows.default};
`;
const CardHeaderWrapper = styled.div`
  padding: ${({ theme: { paddings } }) => paddings.default};
`;
const CardMediaWrapper = styled.div``;
const CardBodyWrapper = styled.div`
  padding: ${({ theme: { paddings } }) => paddings.default};
`;
const CardFooterWrapper = styled.div`
  padding: ${({ theme: { paddings } }) => paddings.default};
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
