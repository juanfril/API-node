module.exports = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).json({
      message: 'User not found',
    });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({
      message: error.message,
    });
  } else {
    return response.status(500).json({
      message: 'Internal server error',
    });
  }
};
