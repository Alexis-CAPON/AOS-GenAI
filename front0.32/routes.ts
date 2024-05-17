/**
 * An array of public routes
 * @type {string[]}
 */

export const publicRoutes = [
    "/"
];


/**
 * An array of auth routes use for authentication
 * @type {string[]}
 */
export const authRoutes = [
    "/login",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * The default login path redirect
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";