import React from "react";
import sidebar from "../../styles/Admin/sidebar.module.css"

import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
import { useDispatch} from "react-redux";
import { DeleteProduct, getProducts } from "../../Redux/actions";
import { useNavigate} from "react-router-dom";


const Right = ({ index, title, image, price,  productId }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()





  const DeleteHandle = (id) => {
    if (window.confirm(`Are you sure want to delete this  item`)) {
      dispatch(DeleteProduct(id))
      dispatch(getProducts())
    }
  }





  return <>
    <tr>
      <td> {index}</td>
      <td>
        <img src={image} alt="productimage" className={sidebar.image} />
      </td>
      <td>{title}</td>
      <td>₹ {price}.00</td>
      <td>
       

        <BiEdit onClick={() => navigate(`Product/edit/${productId}`)} style={{ cursor: "pointer", fontSize: "20px", color: "blue" }} />
        <MdOutlineDelete onClick={() => DeleteHandle(productId)} style={{ cursor: "pointer", fontSize: "23px", color: "red" }} />
      </td>

    </tr>

  </>;
};
export { Right };