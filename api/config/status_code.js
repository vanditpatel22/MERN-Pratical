const CODES = {
    SUCCESS_STATUS: 200,
    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    INACTIVE: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
    SERVICE_UNAVAILABLE: 501,

    INVALID_CODE: -1,
    ERROR_CODE: 0,
    SUCCESS_CODE: 1,
    NODATA_CODE: 2,
    INACTIVE_CODE: 3,
    PHONE_UNVERIFIED: 4,
    EMAIL_UNVERIFIED: 5,
    SEND_EMAIL_FAILED: 11,
}

module.exports = CODES;