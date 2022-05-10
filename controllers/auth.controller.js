function login(req, res) {
    const correctUser = 'user@email.com';
    const correctPassword = 'easy1234';

    const success = req.body.username === correctUser && req.body.password === correctPassword;

    let response;

    if (success) {
        const user = {
            firstName: 'John',
            lastName: 'Doe'
        };

        response = {
            user: user,
            validationError: false
        };
    } else {
        response = {
            validationError: true
        };
    }

    res.json(response);
}

function logout(req, res) {
    res.json({data: 'Logged out'});
}

module.exports = {
    login,
    logout
}