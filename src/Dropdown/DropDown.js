import React from "react";
import { data } from "../feature/Mockdata";
import { useDispatch } from "react-redux";
import { OptionValue } from "../feature/DropDownValue";
import "./DropDown.css";

const DropDown = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <select
        className="dropdown"
        onChange={(e) => {
          dispatch(OptionValue(e.target.value));
        }}
      >
        {data.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
