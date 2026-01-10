const apiResponse = require('../utils/apiResponse');

exports.getStatus = async (req, res) => {
  return res.json(apiResponse.success({
    battery: 87,
    location: { lat: 0, lng: 0 },
    locked: false
  }));
};
