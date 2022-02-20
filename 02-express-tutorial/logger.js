// req => middleware => res
const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    
    // ALWAYS REMEMBER!!!
    // In middlewares, you always terminate means either you pass it on to the next middleware or you send back your own response.
    next();
}

module.exports = logger;