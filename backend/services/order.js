const order  = require("../models/order");

let orderService = {}

orderService.create = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const temp = new order(params);
      const data = temp.save();
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

orderService.findOne = (findPattern, selectPattern = "") => {
  return new Promise((resolve, reject) => {
    try {
      const data = order.findOne(findPattern, selectPattern);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};



orderService.aggregate = (queryPattern) => {
  return new Promise((resolve, reject) => {
    try {
      const data = order.aggregate(queryPattern);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

orderService.find = (findPattern, selectPattern = "") => {
  return new Promise((resolve, reject) => {
    try {
      const data = order.find(findPattern, selectPattern);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

orderService.findOneAndUpdate = (
  findPattern,
  updatePattern,
  selectPattern = ""
) => {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        select: selectPattern,
      };
      const data = order.findOneAndUpdate(
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

orderService.getPaginatedData = async function (
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

  return order
    .paginate(query, options)
    .then(async (paginatedData) => {
      return paginatedData;
    })
    .catch((err) => {
      throw err;
    });
};

orderService.findOneWithNotEqual = (findPatten) => {
  return new Promise((resolve, reject) => {
    try {
      const data = order.aggregate(findPatten);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

orderService.deleteOne = (deletePattern) => {
  return new Promise((resolve, reject) => {
    try {
      const data = order.deleteOne(deletePattern);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { orderService };
