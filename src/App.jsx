import "./App.css";
import { Tab } from "./components/Tab/Tab";
import { TabSwitcher } from "./hooks/useTab";

const tabArray = [
  { label: "Basic Detail", component: () => <h1>Basic Details</h1> },
  {
    label: "Change Password",
    component: () => <h1>Change Password</h1>,
  },
  { label: "Setting", component: () => <h1>Setting</h1> },
];

function App() {
  return (
    <>
      <div className="App">
        <TabSwitcher>
          <Tab>
            <Tab.Header>
              {tabArray.map((item, index) => (
                <Tab.Item key={index} label={item.label} index={index} />
              ))}
            </Tab.Header>
            <Tab.TabPanels>
              {tabArray.map((content, index) => (
                <Tab.TabPanel key={index} index={index}>
                  {content.component()}
                </Tab.TabPanel>
              ))}
            </Tab.TabPanels>
          </Tab>
        </TabSwitcher>
      </div>
    </>
  );
}

export default App;
