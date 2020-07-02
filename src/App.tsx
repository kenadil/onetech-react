import React from "react";
import 'antd/dist/antd.css';
import "./index.css";
import Header from "./components/Header/Header";
import SwitchSlider from "./components/SwitchSlider/SwitchSlider";
import { ThemeContext as Mode } from "./context/Mode";
import LangSwitch from "./components/SwitchSlider/LangSwitch/LangSwitch";

const App: React.FC = () => {
  const { toggleTheme } = React.useContext(Mode);
  return (
    <div>
      <SwitchSlider toggle={toggleTheme}/>
      <LangSwitch/>
      <Header/>
    </div>
  );
};

export default App;
