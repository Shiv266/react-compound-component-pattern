import PropTypes from "prop-types";
import { useTab } from "../../hooks/useTab";

export const TabPanel = ({ index, children }) => {
  const { cuurentTab } = useTab();

  return <div className="text-xl font-medium text-gray-500">{cuurentTab === index && children}</div>;
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
};
