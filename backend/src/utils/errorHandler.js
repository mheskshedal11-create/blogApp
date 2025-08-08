class ErrorHandler extends Error {
    constructor(
        success = false,
        message = "Something went wrong",
        data = null,
        statusCode = 500
    ) {
        super(message);
        this.success = success;
        this.data = data;
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default ErrorHandler;
