import { TabPanels } from "./TabPanels";
import { TabPanel } from "./TabPanel";
import { TabHeader } from "./TabHeader";
import { TabItem } from "./TabItem";
import PropTypes from "prop-types";

export function Tab({ children }) {
  return (
    <div className="border p-8">
      <div>{children}</div>
    </div>
  );
}

Tab.Header = TabHeader;
Tab.Item = TabItem;
Tab.TabPanels = TabPanels;
Tab.TabPanel = TabPanel;

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};
