const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log for Dev
  console.log(err.stack.red);

  // Mongoose errors
  // -- Bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource with id: ${err.value} not found`;
    error = new ErrorResponse(message, 404);
  }

  // -- Duplicate key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // -- Validation
  if (err.name === 'ValidationError') {
    console.log(err.errors);
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }

  // Return status/message
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
