const stripePayment  = require("../models/stripePayment");


let stripePaymentService = {}

stripePaymentService.create = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const temp = new stripePayment(params);
      const data = temp.save();
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

stripePaymentService.findOne = (findPattern, selectPattern = "") => {
  return new Promise((resolve, reject) => {
    try {
      const data = stripePayment.findOne(findPattern, selectPattern);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

stripePaymentService.find = (findPattern, selectPattern = "") => {
  return new Promise((resolve, reject) => {
    try {
      const data = stripePayment.find(findPattern, selectPattern);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

stripePaymentService.findOneAndUpdate = (
  findPattern,
  updatePattern,
  selectPattern = ""
) => {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        select: selectPattern,
      };
      const data = stripePayment.findOneAndUpdate(
        findPattern,
        updatePattern,
        options
      );
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

stripePaymentService.getPaginatedData = async function (
  findPattern,
  sortPattern,
  page,
  limit,
  selectPattern = ""
) {
  const query = findPattern;
  const options = {
    sort: sortPattern,
    page: page,
    limit: limit,
  };

  if (selectPattern) {
    options.select = selectPattern;
  }

  return stripePayment
    .paginate(query, options)
    .then(async (paginatedData) => {
      return paginatedData;
    })
    .catch((err) => {
      throw err;
    });
};

stripePaymentService.findOneWithNotEqual = (findPatten) => {
  return new Promise((resolve, reject) => {
    try {
      const data = stripePayment.aggregate(findPatten);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

stripePaymentService.deleteOne = (deletePattern) => {
  return new Promise((resolve, reject) => {
    try {
      const data = stripePayment.deleteOne(deletePattern);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { stripePaymentService };
