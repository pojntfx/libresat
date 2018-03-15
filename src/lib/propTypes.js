// PropTypes
import PropTypes from "prop-types";

// Generic subcomponent
const subComponent = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node)
]);

// Exports
export { subComponent };
