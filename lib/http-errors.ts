export class RequestError extends Error {
  statusCode: number;
  errors?: Record<string, string[]>;
  constructor(
    statusCode: number,
    message: string,
    errors?: Record<string, string[]>
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.name = "RequestError";
  }
}
export class ValidationError extends RequestError {
  constructor(fieldErrors: Record<string, string[]>) {
    const message = ValidationError.formatMessage(fieldErrors);
    super(400, message, fieldErrors);
    this.name = "ValidationError";
    this.errors = fieldErrors;
  }

  static formatMessage(errors: Record<string, string[]>): string {
    const formattedMessages = Object.entries(errors).map(
      ([field, messages]) => {
        const filedName = field.charAt(0).toUpperCase() + field.slice(1);
        if (messages[0] === "Required") {
          return `${filedName} is required`;
        } else {
          return messages.join(" and ");
        }
      }
    );
    return formattedMessages.join(", ");
  }
}
export class NotFoundError extends RequestError {
  constructor(message: string, errors?: Record<string, string[]>) {
    super(404, message, errors);
    this.name = "NotFoundError";
  }
}
export class UnauthorizedError extends RequestError {
  constructor(message: string, errors?: Record<string, string[]>) {
    super(401, message, errors);
    this.name = "UnauthorizedError";
  }
}
export class ForbiddenError extends RequestError {
  constructor(message: string, errors?: Record<string, string[]>) {
    super(403, message, errors);
    this.name = "ForbiddenError";
  }
}
export class InternalServerError extends RequestError {
  constructor(message: string) {
    super(500, message);
    this.name = "InternalServerError";
  }
}
