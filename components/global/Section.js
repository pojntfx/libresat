export const Section = ({ title, children, ...otherProps }) => (
  <section {...otherProps}>
    {title ? <h2>{title}</h2> : null}
    {children}
  </section>
);
