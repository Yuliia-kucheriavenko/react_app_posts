import React from "react";
import { Button } from "./UI/Button/Button";
import { useNavigate } from "react-router-dom";

export const PostItem = ({ post, remove }) => {
  const { title, body, id } = post;
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id} - ${title}`
        </strong>
        <div>{`${body}`}</div>
      </div>
      <div className="post__btn">
        <Button onClick={() => router(`/posts/${id}`)}>Open</Button>
        <Button onClick={() => remove(post)}>Delete</Button>
      </div>
    </div>
  );
};
