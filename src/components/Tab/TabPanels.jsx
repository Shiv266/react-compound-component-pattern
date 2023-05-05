import PropTypes from "prop-types";

export const TabPanels = ({ children }) => {
  return <div className="py-8">{children}</div>;
};

TabPanels.propTypes = {
  children: PropTypes.node.isRequired,
};
