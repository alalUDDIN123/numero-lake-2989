import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addUser, getUser } from '../../Redux/actions'
import style from "../../styles/Admin/users.module.css"
import { IoMdAddCircle} from 'react-icons/io';
import { IoChevronBackCircleSharp} from 'react-icons/io5';
import { UserTable } from './UserTable'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Button,
  Input,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


const InitialState={
  fullName:"",
  email:"",
  avator:""
}
function Users() {

  const UsersData = useSelector(store => store.Users)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [state,setState]= useState(InitialState)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const dispatch = useDispatch()
 const navigate= useNavigate()
  useEffect(() => {
    if (Users.length === 0) {
      dispatch(getUser())
    }
  }, [dispatch])


const handleChange=(e)=>{
  const {name,value}=e.target;

  setState({
    ...state,
    [name]:value
  })
}


const handleSubmit=()=>{
  if(state.fullName==="" || state.email===""|| state.avator===""){
    alert("Please Enter all field")
  }else{
    let payload={
      name:state.fullName,
      avator:state.avator,
      email:state.email
  
    }
    dispatch(addUser(payload))
    onClose()
  }

}
  return (
    <div className={style.container}>
      <span style={{
        cursor:"pointer"
      }}> <IoChevronBackCircleSharp onClick={()=>navigate("/admin")} /> </span>
      <h1>Users who are signed up 
        <span onClick={onOpen} style={{
        cursor:"pointer"
      }}> <IoMdAddCircle /></span>
      </h1>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input ref={initialRef} placeholder='Enter full name'
              value={state.fullName} name="fullName" onChange={handleChange} />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Enter email' 
              value={state.email} name="email" onChange={handleChange}/>
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Avator URL</FormLabel>
              <Input placeholder='Put Url' type="url"
               value={state.avator} name="avator" onChange={handleChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit} >
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Avator</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {UsersData.map((item, index) => (
            <UserTable
              index={index + 1}
              key={index}
              userId={item.id}
              name={item.name}
              avator={item.avator}
              email={item.email}

            />
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default Users
