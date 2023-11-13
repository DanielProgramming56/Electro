export const errorResponseHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 400;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.ENV_MODE === 'production' ? null : err.stack
    })
}