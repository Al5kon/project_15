class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
};

class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
};

class NotYoursError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 403;
    }
};

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
};

/* class OtherError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 500;
    }
}; */

module.exports = {
    BadRequestError,
    UnauthorizedError,
    NotYoursError,
    NotFoundError
};