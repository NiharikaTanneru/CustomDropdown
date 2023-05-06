import { useState } from "react";

const useDropDown = (label, defaultstate, options) => {
  const [state, setState] = useState(defaultstate);

  const Dropdownmaker = () => {
    return (
      <div>
        <div className ="dropdown">
          <button
            className ="btn btn-secondary dropdown-toggle m-4"
            type="button"
            id="dropdownMenu2"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            onChange={(e) => setState(e.target.value)}
            disabled={!options.length}
          >
            {label}
          </button>
          <ul className ="dropdown-menu" aria-labelledby="dropdownMenu2" >
            {options.map((item) => {
              return (
                
                <li key={item}>
                  <button
                    className ="dropdown-item"
                    type="button"
                    value={item}
                  >
                    {item}
                  </button>
                </li>
                
              );
            })}
         </ul>
        </div>
      </div>
    );
  };
  return [state, Dropdownmaker, setState];
};

export default useDropDown;
