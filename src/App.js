import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [upPost, setupPost] = useState({});
  function deletePost(id) {
    posts.splice(id, 1);
    setPosts([...posts]);
  }
  function updatePost(obj) {
    setupPost(obj);
  }
  function updatePosts(upObj) {
    let index = upObj.id;
    let newArr = [...posts];
    newArr[index] = upObj;
    setPosts(newArr);
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <NewPost
            onChange={e => {
              if (e.id > -1) {
                updatePosts(e);
              } else {
                setPosts([...posts, e]);
              }
            }}
            upPost={upPost}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Posts
            posts={posts}
            deletePost={deletePost}
            updatePost={updatePost}
          />
        </Col>
      </Row>
    </Container>
  );
}
