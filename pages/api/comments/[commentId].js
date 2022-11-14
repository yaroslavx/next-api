import { comments } from '../../../data/comments';

export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === 'GET') {
    res
      .status(200)
      .json(comments.find((comment) => comment.id === parseInt(commentId)));
  } else if (req.method === 'DELETE') {
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);
    res.send(201).json('Comment has deleted');
  }
}
