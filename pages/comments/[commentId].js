import React from 'react';
import { comments } from '../../data/comments';

const SingleComment = ({ comment }) => {
  return (
    <>
      {comment.id} {comment.text}
    </>
  );
};

export default SingleComment;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { commentId: '1' } }],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { commentId } = context.params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return {
    props: {
      comment,
    },
  };
};
