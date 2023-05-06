import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BasicSelect from "./Components/BasicSelect";
import CustomDropDown from "./Components/CustomDropDown";
import MdbDropdown from "./Components/MdbDropdown";

function App() {
  return (
    <div className="App">
      <BasicSelect />
      <CustomDropDown />
      {/* <MdbDropdown/> */}
    </div>
  );
}

export default App;
