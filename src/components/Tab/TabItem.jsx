import { useTab } from "../../hooks/useTab";
import PropTypes from "prop-types";

export const TabItem = ({ label, index }) => {
  const { cuurentTab, handleTabChange } = useTab();
  return (
    <div
      onClick={() => handleTabChange(index)}
      className={`text-sm py-3 cursor-pointer ${
        cuurentTab === index
          ? "text-indigo-500 border-b-2 border-indigo-500"
          : "text-gray-600 hover:border-b hover:border-gray-300 hover:shadow-sm"
      }`}
    >
      {label}
    </div>
  );
};

TabItem.propTypes = {
  index: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
