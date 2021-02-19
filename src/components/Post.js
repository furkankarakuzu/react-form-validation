import React from "react";
import { Accordion, ListGroup, Button } from "react-bootstrap";

export default function Post(props) {
  return (
    <ListGroup row>
      <ListGroup.Item scope="row">
        <b>ID : </b>
        {props.id + 1}
      </ListGroup.Item>
      <ListGroup.Item>
        <b>Isim : </b>
        {props.name}
      </ListGroup.Item>

      <ListGroup.Item>
        <b>Soyisim : </b>
        {props.surname}
      </ListGroup.Item>

      <ListGroup.Item>
        <b>Email : </b>
        {props.email}
      </ListGroup.Item>

      <ListGroup.Item>
        <b>Baslik : </b>
        {props.title}
      </ListGroup.Item>

      <ListGroup.Item>
        <b>Konu : </b>
        {props.subject}
      </ListGroup.Item>

      <ListGroup.Item>
        <Button
          type="submit"
          className="btn btn-danger"
          onClick={() => props.deletePost(props.id)}
        >
          Sil
        </Button>
        <Button
          type="submit"
          className="btn btn-primary ms-1"
          onClick={() =>
            props.updatePost({
              id: props.id,
              name: props.name,
              surname: props.surname,
              email: props.email,
              title: props.title,
              subject: props.subject
            })
          }
        >
          Duzenle
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}
