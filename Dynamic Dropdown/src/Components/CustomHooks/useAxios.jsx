import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((res) => {setData(res.data);})
      .catch((err) => {console.log(err.message);});
  }, [url, data.length]);
  return [data];
};

export default useAxios;
