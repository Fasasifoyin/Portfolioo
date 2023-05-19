import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useForm } from "react-hook-form";
import { registerOptions } from "../utils/formValidation";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
//import { PUBLIC_KEY } from "../config/key";

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = () => {
    //  e.preventDefault();
    emailjs
      .sendForm(
        "service_orqxpnb",
        "template_e9gz3h6",
        form.current,
        'bA4fqTqAOjhRjZhGh'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmit(true);
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      );
    reset();
  };

  useEffect(() => {
    if (submit === true) {
      setTimeout(() => {
        setSubmit(false);
      }, 5000);
    }
  }, [submit]);

  useEffect(() => {
    if (error === true) {
      setTimeout(() => {
        setSubmit(false);
      }, 5000);
    }
  }, [error]);

  return (
    <Container className=" mt-5 mb-5" id="message">
      <div className="d-flex justify-content-center">
        <h3
          className="rounded-3 p-2 text-center fw-bold text-white "
          style={{ backgroundColor: "rgb(255, 5, 19)" }}
        >
          Message me
        </h3>
      </div>
      <div style={{ width: "60%" }} className="mx-auto mb-2 mb-lg-5">
        <p style={{ color: "white" }} className="text-center heading2">
          Feel free to Fill the form below to meassage me. I will love to hear
          from you
        </p>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        {/* <MessageMe/> */}
        <Form
          ref={form}
          style={{ width: "100%", maxWidth: "600px" }}
          onSubmit={handleSubmit(sendEmail)}
        >
          <Form.Group controlId="formBasicFirstName" className="mb-3">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              className="rounded-0 mb-0 "
              {...register("firstName", registerOptions.firstName)}
            />
            {errors?.firstName && (
              <span className="small text-danger">
                {errors.firstName.message}
              </span>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicLastName" className="mb-3">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="rounded-0 mb-0"
              {...register("lastName", registerOptions.lastName)}
            />
            {errors?.lastName && (
              <span className="small text-danger">
                {errors.lastName.message}
              </span>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              placeholder="E-mail"
              className="rounded-0 mb-0"
              {...register("email", registerOptions.email)}
            />
            {errors?.email && (
              <span className="small text-danger">{errors.email.message}</span>
            )}
          </Form.Group>
          <FloatingLabel
            controlId="floatingMessage"
            label="Send me a message"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Leave a comment here"
              style={{
                height: "150px",
              }}
              className="rounded-0 mb-0"
              {...register("message", registerOptions.message)}
            />
            {errors?.message && (
              <span className="small text-danger">
                {errors.message.message}
              </span>
            )}
          </FloatingLabel>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="me-0 ms-auto">
              <Button
                type="submit"
                className="border border-none"
                style={{ background: "rgb(255, 19, 5" }}
              >
                Send Message
              </Button>
            </div>
          </div>
        </Form>
      </div>

      {submit && (
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="notification"
        >
          <span
            style={{ color: "rgb(14, 12, 56)", fontSize: "1.2rem" }}
            className="px-2 text-white"
          >
            Message sent suceessfully
            <span>
              <TiTick color="green" size="1.6rem" />
            </span>
          </span>
        </motion.div>
      )}
      {error && (
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="notification"
        >
          <span
            style={{ color: "rgb(14, 12, 56)", fontSize: "1.2rem" }}
            className="px-2 text-white"
          >
            {error.text}
            <span>
              <TiTick color="green" size="1.6rem" />
            </span>
          </span>
        </motion.div>
      )}
    </Container>
  );
};

export default Contact;
