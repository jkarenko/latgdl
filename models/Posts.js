var mongoose = require('mongoose');

var PostSchema = new mongoose.schema({
  title: String,
  link: String,
  upvotes: { type: Number, default 0 },
  comments: [{type: mongoose.Schema.Types.ObjetctId, ref: 'Post'}]
});
