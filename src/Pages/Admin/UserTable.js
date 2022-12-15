import React from "react";
import style from "../../styles/Admin/users.module.css"

import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';

import { useDispatch } from "react-redux";
import { DeleteUser, getUser } from "../../Redux/actions";

const UserTable= ({index,name,avator,email,userId}) => {

   const dispatch= useDispatch()
    const EditHandle=()=>{

    }

  const DeleteHandle=(id)=>{
    if (window.confirm(`Are you sure want to delete this  user`)) {
      dispatch(DeleteUser(id))
      dispatch(getUser())
    }
  }
  return <>
    <tr>
        <td> {index}</td>
        <td>
            <img src={avator} alt="productimage" className={style.image} />
        </td>
        <td>{name}</td>
        <td>{email}</td>
          <td>
          
          <BiEdit onClick={()=>EditHandle(userId)} 
          style={{cursor:"pointer", fontSize:"20px", color:"blue", marginTop:'35px'
         }} />
          <MdOutlineDelete onClick={()=>DeleteHandle(userId)}
           style={{cursor:"pointer", fontSize:"23px", color:"red",marginTop:'35px'}} />

          </td>
        
      </tr>
  </>;
};
export { UserTable};