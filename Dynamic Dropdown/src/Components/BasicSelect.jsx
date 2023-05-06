import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function BasicSelect() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value)
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <>
      <h1 className="m-4 text-danger">
        Fetching Dynamic data and displaying using drop down
      </h1>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name}
            label="Name"
            onChange={handleChange}
          >
            {data.map((item) => {
              return (
                <MenuItem value={item.username} key={item.id} className="bg-info text-white">
                  {item.username}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
