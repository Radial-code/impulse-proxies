const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const orderSchema = new mongoose.Schema(
  {
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    plan:{
      type: String,
      required: true
    },
    planData: {
      type: Object,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderSchema.plugin(mongoosePaginate);
orderSchema.plugin(aggregatePaginate);
const order = mongoose.model("order", orderSchema);
module.exports = order;
