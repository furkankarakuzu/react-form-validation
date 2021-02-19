import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import Post from "./Post.js";

export default function Posts(props) {
  return (
    <>
      <Card>
        {props.posts.map((post, index) => {
          return (
            <Accordion defaultActiveKey="0" key={index}>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  className="nav-link fw-bold"
                  variant="link"
                  eventKey="0"
                >
                  {post.title}
                </Accordion.Toggle>
              </Card.Header>
              <Card.Body>
                <Accordion.Collapse eventKey="0">
                  <Post
                    key={index}
                    id={index}
                    name={post.name}
                    surname={post.surname}
                    email={post.email}
                    title={post.title}
                    subject={post.subject}
                    deletePost={props.deletePost}
                    updatePost={props.updatePost}
                  />
                </Accordion.Collapse>
              </Card.Body>
            </Accordion>
          );
        })}
      </Card>
    </>
  );
}
