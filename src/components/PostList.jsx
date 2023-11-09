
import React from "react";
import { PostItem } from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center", color: "red" }}>No posts about JS</h2>;
  }
  return (
    <div>
      <h1>All posts about JS</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} remove={remove} number={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
