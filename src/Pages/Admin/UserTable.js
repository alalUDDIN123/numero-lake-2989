import React from "react";
import style from "../../styles/Admin/users.module.css"

import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
const UserTable= ({index,name,avator,email}) => {


    const EditHandle=()=>{

    }


  const DeleteHandle=(id)=>{
    alert(id)
  }
  return <>
    <tr>
        <td> {index}</td>
        <td>
            <img src={avator} alt="productimage" className={style.image} />
        </td>
        <td>{name}</td>
        <td>email</td>
          <td>
          
          <BiEdit onClick={()=>EditHandle(index)} 
          style={{cursor:"pointer", fontSize:"20px", color:"blue", marginTop:'35px'
         }} />
          <MdOutlineDelete onClick={()=>DeleteHandle(index)}
           style={{cursor:"pointer", fontSize:"23px", color:"red",marginTop:'35px'}} />
          </td>
        
      </tr>
  </>;
};
export { UserTable};