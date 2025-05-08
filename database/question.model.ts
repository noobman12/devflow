import { model, models, Schema } from "mongoose";

export interface IQuestion {
  title: string;
  content: string;
  tag: Schema.Types.ObjectId;
  views: number;
  votes: number;
  downvotes: number;
  answers: number;
  authors: Schema.Types.ObjectId;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
    views: {
      type: Number,
      default: 0,
    },
    votes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    answers: {
      type: Number,
      default: 0,
    },
    authors: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Question =
  models?.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
