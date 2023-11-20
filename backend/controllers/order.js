const { orderService } = require("../services/order");

const list = async (req, res) => {
  try {
    let queryPattern = [];
    queryPattern.push({
      $lookup: {
        from: "user",
        localField: "userId",
        foreignField: "_id",
        pipeline: [
          {
            $project: {
              password: 0,
            },
          },
        ],
        as: "userData",
      },
    });

    queryPattern.push({
      $unwind: { path: "$userData", preserveNullAndEmptyArrays: true },
    });

    queryPattern.push({
      $match: {
        $or: [
          { plan: 'ISP' },
          { plan: 'DC' }
        ]
      }
    })

    queryPattern.push({
      $sort: {
        createdAt: -1,
      },
    });

    orderService
      .aggregate(queryPattern)
      .then((orderData) => {
        return res.json({
          status: 200,
          message: "success",
          data: orderData,
        });
      })
      .catch((e) => {
        console.log(e.message);
        return res.json({
          status: 500,
          message: "something was wrong",
        });
      });
  } catch (e) {
    console.log(e.message);
    return res.json({
      status: 500,
      message: "something was wrong",
    });
  }
};

module.exports = {
  list,
};
