const fs = require("fs");
const handlebars = require("handlebars");
const nodemailer = require("nodemailer");

/**
 * @function sendEmail
 * @param {string} to The destinaion address to send the email to
 * @param {string} subject the subject of the email
 * @param {string} template the HTML template used to send the email
 */
module.exports.sendEmail = async (to, subject, template) => {
  const transporter = nodemailer.createtransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  await transporter.sendMail({
    from : "olubiyipeter@gmail.com",
    to,
    subject,
    html:template
  })
};

/**
 * @function sendConfirmationEmail
 * @param {string} username username of the recipient to be used inside the email template
 * @param {string} email Destination address to send the email to
 * @param {string} confirmationToken Token to used to confirm user account
 */
module.exports.sendConfirmationEmail = async (username, email, confirmationToken) => {
  try {
    const source = fs.readFileSync("templates/confirmationEmail.html", "utf-8");
    const template = handlebars.compile(source);
    const html = template({
      username: username,
      confirmationUrl: `${process.env.HOME_URL}/confirm/${confirmationToken}`,
      url: process.env.HOME_URL,
    });
    await this.sendEmail(email,"Please confirm your account", html)
  } catch (err) {
    console.log(err);
  }
};
