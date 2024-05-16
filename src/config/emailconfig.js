const nodemailer = require("nodemailer");

const {EMAIL_ADD,EMAIL_PASS} = require('./serverconfig');

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user:EMAIL_ADD,
      pass:EMAIL_PASS,
    },
  });

module.exports = transporter