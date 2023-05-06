import React from "react";
import useDropDown from "./CustomHooks/useDropdown";
import useAxios from "./CustomHooks/useAxios";

const shoe_list = ["Prada", "Jimmy Choos", "Nike", "Adidas"];

const emp_list = ["Rahul", "Somu", "Raj", "Rani"];

const CustomDropDown = () => {
  
  const url = "https://dummyjson.com/products/categories";
  const [categoryresponse] = useAxios(url);

  const [shoe, ShoeDropdown] = useDropDown("Shoes", "", shoe_list);

  const [category, CategoryDropDown] = useDropDown("Categories", "",categoryresponse);

  const [employees, EmpDropdown] = useDropDown("Employees", "", emp_list);
  
  return (
    <div className="container m-4">
      <h2>Using Custom Hook</h2>
      <div className="d-flex justify-content-center align-item-center">
        <ShoeDropdown />
        <CategoryDropDown />
        <EmpDropdown />
      </div>
    </div>
  );
};

export default CustomDropDown;
