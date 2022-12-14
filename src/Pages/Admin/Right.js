import React from "react";
import sidebar from "../../styles/Admin/sidebar.module.css"
const Right = ({index,title,image,price}) => {
  return <>
    <tr>
        <td> {index}</td>
        <td>
            <img src={image} alt="productimage" className={sidebar.image} />
        </td>
        <td>{title}</td>
        <td>₹ {price}.00</td>
        <td>View</td>
        <td>Delete</td>
      </tr>
  </>;
};
export { Right };