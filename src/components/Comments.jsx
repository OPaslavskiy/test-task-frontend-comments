import React, { useState, useEffect } from "react";

import { getComments } from "../services/getComments";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const commentsData = await getComments();
        setComments(commentsData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchComments();
  }, []);

  const handleClick = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
    console.log(newComment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newComment.trim() === "") {
      //notify
      return;
    }
    const newCommentObj = {
      id: 1,
      body: newComment,
      postId: 100,
      user: {
        id: 63,
        username: "developer",
      },
    };

    setComments((prevComments) => prevComments.concat(newCommentObj));
    setNewComment("");
  };

  return (
    <>
      <ul>
        {comments.map(({ body, id, user }) => (
          <li key={id}>
            <p>{user.username}</p>
            <p>{body}</p>
            <button type="button" onClick={() => handleClick(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={handleChange}
          placeholder="Enter a comment"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Comments;
