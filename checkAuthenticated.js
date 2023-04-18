require('express');

function checkAuthenticated (req, res, next)
{
    if (!req.session.authenticated)
    {
        res.redirect('/login');
        return;
    } 

    next();
}

module.exports = checkAuthenticated;