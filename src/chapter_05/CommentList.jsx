import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "jomo85",
    comment: "안녕하세요. 이종호입니다.",
  },
  {
    name: "하하",
    comment: "리액트 입니다.",
  },
  {
    name: "kkk",
    comment: "안녕하세요. kkk입니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map(comment => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
