
const errorHandlers = (err, req, res, next) => {
    if (err) {
        switch (err.name) {
            case "SequelizeValidationError":
                let errorMessage = err.errors.map(err => {
                    return {
                        message: err.message
                    }
                })
                res.status(400).json({ errorMessage })
                break;
            case "Invalid Email/Password":
                res.status(401).json({ message: "Invalid email/password" })
                break;
            case "SignInError":
                res.status(401).json({ message: "Please Sign In First" })
                break;
            case "AccessError":
                res.status(401).json({ message: "You Don't Have Access" })
                break;
            case "ResourceNotFound":
                res.status(404).json({ message: "Not Found" })
                break;
            case "FindUserError":
                res.status(404).json({ message: "User Not Found" })
                break;
            default:
                res.status(500).json({ message: "Internal Server Error" })
        }
    }
}

module.exports = errorHandlers