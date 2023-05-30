const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: `"Ionut 👻" <${process.env.SENDER_EMAIL}>`, // sender address - Use in .ENV
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
