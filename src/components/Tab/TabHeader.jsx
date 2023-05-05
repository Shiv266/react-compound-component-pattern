import PropTypes from "prop-types";

export function TabHeader({ children }) {
  return <div className="flex border-b gap-8">{children}</div>;
}

TabHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
