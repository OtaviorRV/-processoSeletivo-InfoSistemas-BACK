exports.successResponse = (res, message) => {
  res.status(200).json(message);
};

exports.noContentResponse = (res) => {
  res.status(204).send();
};

exports.badRequest = (res, message) => {
  res.status(400).json(message);
};

exports.unauthorizedResponse = (res, message) => {
  res.status(401).json({ message: `Falha na autenticação - ${message}` });
};

exports.forbiddenResponse = (res, message) => {
  res.status(403).json(message);
};

exports.notFoundResponse = (res, message) => {
  res.status(404).json(message);
};

exports.conflictResponse = (res, message) => {
  res.status(409).json(message);
};

exports.errorResponse = (res, err) => {
  res.status(500).json({ error: err, message: err.message });
};

exports.identifiedErrorResponse = (res, message) => {
  res.status(message.status).json(message);
};

const responseJSON = (responseObj) => {
  const {
    value = [],
    message = '',
    status = '',
    attributes = {},
  } = responseObj;

  return {
    value,
    message,
    status,
    ...attributes,
  };
};

exports.response = (res, responseObj) => {
  const status = responseObj.status ? responseObj.status : 200;
  return res.status(status).json(responseJSON(responseObj));
};
