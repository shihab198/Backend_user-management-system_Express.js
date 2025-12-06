const validator = {
  validateUser: (req, res, next) => {
    // Validation logic
    next();
  }
};

module.exports = validator;