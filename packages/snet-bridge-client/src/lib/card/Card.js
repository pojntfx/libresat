import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A Card with actions.
 * @param {header} header Items in the header of the card
 * @param {media} media Media (Images, Videos) of the card
 * @param {children} children Items in the main area of the card
 * @param {footer} footer Items in the footer of the card
 * @param {...otherProps} ...otherProps Other props that should be passed to the card
 */
export const Card = ({ header, media, children, footer, ...otherProps }) => (
  <CardWrapper {...otherProps}>
    {header ? <CardHeaderWrapper>{header}</CardHeaderWrapper> : null}
    {media ? <CardMediaWrapper>{media}</CardMediaWrapper> : null}
    {children ? <CardBodyWrapper>{children}</CardBodyWrapper> : null}
    {footer ? <CardFooterWrapper>{footer}</CardFooterWrapper> : null}
  </CardWrapper>
);

const CardWrapper = styled.div`
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  background: ${({
    theme: {
      backgrounds: { cards }
    }
  }) => cards.default};
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
  children: PropTypes.oneOfType([
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
