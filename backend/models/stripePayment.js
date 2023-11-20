const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const stripePaymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    sessionId: {
      type: String,
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      required: true,
    },
    priceId: {
      type: String,
      required: true,
    },
    planData: {
      type: Object,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

stripePaymentSchema.plugin(mongoosePaginate);
stripePaymentSchema.plugin(aggregatePaginate);
const stripePayment = mongoose.model("stripePayment", stripePaymentSchema);
module.exports = stripePayment;
