const stripe = require("stripe")(
  process.env.STRIPE_KEY
);
const { ObjectId } = require("mongodb");
const { stripePaymentService } = require("../services/stripePayment");
const { orderService } = require("../services/order");

const createCheckoutSession = async (req, res) => {
  try {
    const { plan, planData, priceId } = req.body;
    if ((plan, planData, priceId)) {
      const session = await stripe.checkout.sessions.create({
        ui_mode: "embedded",
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        return_url: `http://localhost:3000/verifyPayment?session_id={CHECKOUT_SESSION_ID}`,
      });

      const createParam = {
        userId: new ObjectId("654ddadc4be90868a54828c6"),
        sessionId: session.id,
        clientSecret: session.client_secret,
        status: "open",
        plan: plan,
        priceId,
        planData
      };

      await stripePaymentService.create(createParam);

      res.json({
        status: 200,
        clientSecret: session.client_secret,
      });
    } else {
      return res.json({
        status: 400,
        message: "Bad request",
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.json({
      status: 500,
      message: "something was wrong",
    });
  }
};

const sessionStatus = async (req, res) => {
  try {
    if (req.query.session_id) {
      stripePaymentService
        .findOne({ sessionId: req.query.session_id, status: "open" })
        .then(async (sessionData) => {
          if (sessionData) {
            const session = await stripe.checkout.sessions.retrieve(
              req.query.session_id
            );

            if (session.status == "complete") {
              const createParam = {
                userId: new ObjectId(sessionData.userId),
                plan: sessionData.plan,
                planData: sessionData.planData,
              };

              await orderService.create(createParam);
              const find = { _id: new ObjectId(sessionData._id) };
              const updateData = { status: "complete" };
              await stripePaymentService.findOneAndUpdate(find, updateData);
            }

            return res.json({
              status: 200,
              sessionStatus: session.status,
              customer_email: session.customer_details.email,
            });
          } else {
            return res.json({
              status: 400,
              message: "Invalid session",
            });
          }
        })
        .catch((e) => {
          console.log(e.message);
          return res.json({
            status: 500,
            message: "something was wrong",
          });
        });
    } else {
      return res.json({
        status: 400,
        message: "Bad request",
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.json({
      status: 500,
      message: "something was wrong",
    });
  }
};

module.exports = {
  createCheckoutSession,
  sessionStatus,
};
