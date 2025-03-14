import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    videoFile: {
      type: String, //  cloudinary URL
      required: [true, "Video file is required!"],
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required!"],
    },
    title: {
      type: String,
      required: [true, "Thumbnail is required!"],
    },
    description: {
      type: String,
      required: [true, "Thumbnail is required!"],
    },
    duration: {
      type: Number, // cloudinary URL
      required: [true, "Thumbnail is required!"],
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
