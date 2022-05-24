const { log } = require('console');
// var url = require('url')
module.exports = roles => async (req, res, next) => {
    // if (typeof(roles)==="string"){
    console.log(req.tokenData, "req.tokendata", roles, "roles")
    if (req.tokenData.assignMethod) {
        console.log(req.originalUrl, "lllllllllllll");
        const urldata = (req.originalUrl).split('/')[1]
        console.log(urldata);
        var allow = false
        // console.log(typeof (req.tokenData.assignMethod));
        let perms = (req.tokenData.assignMethod
        )[`${urldata}`]
        if (perms) {
            perms.map((perm) => {
                log(perm)
                if (req.method == "POST" && perm == 'create') allow = true;
                else if (req.method == "GET" && perm == 'view') allow = true;
                else if (req.method == "PUT" && perm == 'update') allow = true;
                else if (req.method == "PATCH" && perm == 'update') allow = true;
                else if (req.method == "DELETE" && perm == 'delete') allow = true;
            })
        }

        if (!allow) {
            console.log(allow);
            return res.status(403).send({
                message: "Access denied!",
                status: 403
            })
        }
    }

    else if (!roles.includes(req.tokenData.role)) {
        return res.status(403).send({
            message: "Access denied!",
            status: 403
        })
    }
    next()
};
