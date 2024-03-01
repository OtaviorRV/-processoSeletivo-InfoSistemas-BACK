const { validationResult } = require('express-validator');
const responses = require('../../common/responses/responses');
const {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  ForbiddenError
} = require('./requestError');

async function getErrosFromRequestValidation(req) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return new BadRequestError(result.errors.map(x => x.msg).join('. '));
  }
  return false;
}

function errorFormatter(response, error, defaultMessage) {
  if (
    error instanceof BadRequestError ||
    error instanceof NotFoundError ||
    error instanceof InternalServerError ||
    error instanceof ForbiddenError
  ) {
    return responses.identifiedErrorResponse(response, {
      status: error.code,
      message: error.message
    });
  }

  return responses.errorResponse(response, {
    status: 500,
    defaultMessage
  });
}

module.exports = { getErrosFromRequestValidation, errorFormatter };
