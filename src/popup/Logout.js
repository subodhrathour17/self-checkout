import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import "./index.css";

const Logout = ({show, handleClose}) => {
  const navigate = useNavigate();
    const handleLogout=()=>{
        if(localStorage.getItem('user')){
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            navigate("/");
        }
        else{
        navigate("/login");

        }
    }
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          
        <div className="register-heading">
            <p>Logout</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main">
            <Form.Label column sm="2" required>
              
            </Form.Label>
            <Col sm="10"> <b>Do You Want To Logout?</b> </Col>
          </Form.Group>
          <div className="button-section">
            <Button variant="warning" onClick={handleLogout}>
              Logout <GoArrowRight size={20} />
            </Button>
          </div>

        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Logout;
