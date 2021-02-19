import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
export default function NewUser(props) {
  const nameInput = useRef();
  const surnameInput = useRef();
  const emailInput = useRef();
  const titleInput = useRef();
  const subjectInput = useRef();
  function add(e) {
    e.preventDefault();
    const name = nameInput.current.value;
    const surname = surnameInput.current.value;
    const email = emailInput.current.value;
    const title = titleInput.current.value;
    const subject = subjectInput.current.value;
    props.onChange({
      name: name,
      surname: surname,
      email: email,
      title: title,
      subject: subject
    });
    nameInput.current.value = "";
    surnameInput.current.value = "";
    emailInput.current.value = "";
    titleInput.current.value = "";
    subjectInput.current.value = "";
    nameInput.current.focus();
  }
  if (props.upPost.id > -1) {
    nameInput.current.value = props.upPost.name;
    surnameInput.current.value = props.upPost.surname;
    emailInput.current.value = props.upPost.email;
    titleInput.current.value = props.upPost.title;
    subjectInput.current.value = props.upPost.subject;
  }
  function update(e) {
    e.preventDefault();
    const id = props.upPost.id;
    const name = nameInput.current.value;
    const surname = surnameInput.current.value;
    const email = emailInput.current.value;
    const title = titleInput.current.value;
    const subject = subjectInput.current.value;
    props.onChange({
      id: id,
      name: name,
      surname: surname,
      email: email,
      title: title,
      subject: subject
    });
    nameInput.current.value = "";
    surnameInput.current.value = "";
    emailInput.current.value = "";
    titleInput.current.value = "";
    subjectInput.current.value = "";
    nameInput.current.focus();
    props.upPost.id = -1;
  }
  return (
    <Form onSubmit={props.upPost.id > -1 ? update : add}>
      <Form.Group>
        <Form.Control type="text" placeholder="Isim Girin.." ref={nameInput} />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Soyisim Girin.."
          ref={surnameInput}
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email Girin.."
          ref={emailInput}
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Baslik Girin.."
          ref={titleInput}
        />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Konu Girin.."
          ref={subjectInput}
        />
      </Form.Group>
      <br />
      <Button type="submit">
        {props.upPost.id > -1 ? "Güncelle" : "Ekle"}
      </Button>
    </Form>
  );
}
