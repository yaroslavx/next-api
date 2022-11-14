import React, { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const res = await fetch('/api/comments');
    const data = await res.json();
    setComments(data);
  };

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const sendComment = async () => {
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
    });
    const data = await res.json();
    setComment('');
    console.log(data);
    fetchComments();
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`api/comments/${commentId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <button onClick={fetchComments}>Load comments</button>
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id} {comment.text}
              <button onClick={() => deleteComment(comment.id)}>
                Delete comment
              </button>
            </div>
          );
        })}

      <input type='text' value={comment} onChange={handleInput} />
      <button onClick={sendComment}>Send comment</button>
    </>
  );
};

export default CommentsPage;
