var mongoose = require('mongoose');

var CommentSchema = new mongoose.schema({
  body: String,
  author: String,
  upvotes: { type: Number, default:0 },
  post: { type: mongoose.Schema.Types.ObjetctId, ref: 'Post' }
});
