import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import { animateScroll as scroll } from "react-scroll";

import { Comment, SendForm } from "../index";
import { getComments } from "../../services/getComments";

import { List } from "./CommentsPage.styled";

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    getComments(setComments);

    const savedComment = localStorage.getItem("comment");
    if (savedComment) {
      setNewComment(savedComment);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comment", newComment);
  }, [newComment]);

  const handleClick = (id) =>
    setComments((prev) => prev.filter((comment) => comment.id !== id));

  const handleChange = ({ target: { value } }) => setNewComment(value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newComment.trim() === "") {
      Notiflix.Notify.info("Please enter a comment");

      return;
    }
    const newCommentObj = {
      id: nanoid(),
      body: newComment,
      postId: nanoid(),
      user: {
        id: 999,
        username: "developer UA",
      },
    };

    setComments((prevComments) => [...prevComments, newCommentObj]);
    setNewComment(() => "");
    scroll.scrollMore(200);
  };

  return (
    <div>
      <List>
        {comments.map((comment) => (
          <Comment key={comment.id} handleClick={handleClick} {...comment} />
        ))}
      </List>

      <SendForm
        handleSubmit={handleSubmit}
        value={newComment}
        onChange={handleChange}
      />
    </div>
  );
};
