import React from "react";
import sidebar from "../../styles/Admin/sidebar.module.css"
import { GrView } from 'react-icons/gr';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
import { useDispatch} from "react-redux";
import { DeleteProduct, getProducts } from "../../Redux/actions";
import { useNavigate} from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

const Right = ({ index, title, image, price,  productId }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior] = React.useState('inside')
  const btnRef = React.useRef(null)



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
        {/* <GrView onClick={onOpen} style={{ cursor: "pointer", fontSize: "20px" }} />


        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus, perspiciatis. Dicta accusantium,
                eaque dignissimos saepe quam eveniet quod sapiente quibusdam!</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
 */}


        <BiEdit onClick={() => navigate(`Product/edit/${productId}`)} style={{ cursor: "pointer", fontSize: "20px", color: "blue" }} />
        <MdOutlineDelete onClick={() => DeleteHandle(productId)} style={{ cursor: "pointer", fontSize: "23px", color: "red" }} />
      </td>

    </tr>

  </>;
};
export { Right };