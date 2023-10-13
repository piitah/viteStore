const jwt = require("jwt-simple");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const ConfirmationToken = require("../models/confirmationToken");
const crypto = require("crypto");
const validator = require("../Helpers/validator");

const { sendConfirmationEmail } = require("../utils/controllerUtils");

/**
 *
 * @param {object} req The request object
 * @param {object} res The response object
 * @returns
 */
exports.registerController = async (req, res) => {
  const { username, password, email } = req.body;
  const { errors, isValid } = await validator.regiserValidation(req.body);

  let user = null;
  let confirmationToken = null;

  if (!isValid) {
    return res.status(404).send({
      errorMsg: errors,
    });
  }
  try {
    user = new User({ username, password, email });
    confirmationToken = new ConfirmationToken({
      user: user._id,
      token: crypto.randomBytes(20).toString("hex"),
    });
    await user.save();
    await confirmationToken.save();
    res.status(201).send({
      user: {
        username: user.username,
        email: user.email,
      },
      token: jwt.encode({ id: user._id }, process.env.JWT_SECRET),
    });
  } catch (error) {
    next(error);
  }
  sendConfirmationEmail(user.username, user.email, confirmationToken.token);
};

module.exports.loginController = async (req, res, next) => {
  const { Authoriztion } = req.headers;
  const { UsernameOrEmail, password } = req.body;
// Validate existing token from user,
  if (Authoriztion) {
    try {
      const user = await this.verifyJWT(Authoriztion);
      return res.status(200).send({
        user,
        token: Authoriztion,
      });
    } catch (err) {
      return res.status(401).send({
        error: err,
      });
    }
  }

  if (!UsernameOrEmail || !password) {
    return res.status(400).send({
      error: "Please provide both email/username and password",
    });
  }

  try {
    const user = await User.findOne({
      $or: [{ username: UsernameOrEmail }, { email: UsernameOrEmail }],
    });

    if (!user) {
      return res.status(401).send({
        error: "User does not exist",
      });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) return next(err);

      if (!result) {
        return res.status(400).send({
          error: "The credentials you provided is incorrect, Please try again",
        });
      }
      res.status(200).send({
        token : jwt.encode({_id : id}, process.env.JWT_SECRET),
        user : {
            _id : user._id,
            email : user.email,
            username : user.email
        }
      })
    });

  } catch (err) {
    next(err);
  }
};

module.exports.verifyJWT = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = jwt.decode(token, process.env.JWT_SECRET)._id;
      const user = User.findOne({ _id: id });
      if (user) {
        return resolve(user);
      } else {
        reject("Not Authorized");
      }
    } catch (err) {
      return reject("Not Authorized");
    }
  });
};
