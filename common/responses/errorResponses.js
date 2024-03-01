const responses = require('./successResponses');
const { logger } = require('../../shared/log/logger');
const {
  BadRequestError,
  NotFoundError,
  ForbiddenError,
  ConflictError,
  UnauthorizedError,
} = require('../../shared/errors/requestError');

exports.errorResponse = (
  res,
  error,
  internalErrorMessage = 'Erro interno do servidor'
) => {
  logger.error(error);

  if (error instanceof UnauthorizedError) {
    return responses.unauthorizedResponse(res, {
      status: 401,
      message: error.message,
    });
  }

  if (error instanceof NotFoundError) {
    return responses.notFoundResponse(res, {
      status: 404,
      message: error.message,
    });
  }

  if (error instanceof BadRequestError) {
    return responses.badRequest(res, {
      status: 400,
      message: error.message,
    });
  }

  if (error instanceof ForbiddenError) {
    return responses.forbiddenResponse(res, {
      status: 403,
      message: error.message,
    });
  }

  if (error instanceof ConflictError) {
    return responses.conflictResponse(res, {
      status: 409,
      message: error.message,
    });
  }

  return responses.errorResponse(res, {
    status: 500,
    message: internalErrorMessage,
  });
};
