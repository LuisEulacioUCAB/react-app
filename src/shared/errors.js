export class IntegrityError extends Error {
    constructor(message) {
        super(message);
        this.name = 'IntegrityError';
    }
}

export class ValidationError extends Error {
    constructor(arr) {
        super(arr);
        this.name = 'ValidationError';
        this.arr = arr;
    }
}