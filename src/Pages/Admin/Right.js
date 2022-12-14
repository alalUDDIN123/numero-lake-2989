import React from "react";
import sidebar from "../../styles/Admin/sidebar.module.css"
import { GrView } from 'react-icons/gr';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
const Right = ({index,title,image,price}) => {

  // view 

  const ViewHandle=(id)=>{
 alert(id)
  }

  // Edit 

  const EditHandle=(id)=>{
    alert(id)
  }

  // Delete handle

  const DeleteHandle=(id)=>{
    alert(id)
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
          <GrView onClick={()=>ViewHandle(index)} style={{cursor:"pointer", fontSize:"20px"}} />
          <BiEdit onClick={()=>EditHandle(index)} style={{cursor:"pointer", fontSize:"20px", color:"blue"}} />
          <MdOutlineDelete onClick={()=>DeleteHandle(index)} style={{cursor:"pointer", fontSize:"23px", color:"red"}} />
          </td>
          {/* <td>
        <GrView />
        </td>
        <td>
            <BiEdit />
        </td>
        <td>
            <MdOutlineDelete />
        </td> */}
      </tr>
  </>;
};
export { Right };