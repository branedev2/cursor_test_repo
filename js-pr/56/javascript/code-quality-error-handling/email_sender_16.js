// {fact rule=code-quality-error-handling@v1.0 defects=1}
function sendEmail(emailData) {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransporter(emailData.config);
    transporter.sendMail(emailData.message);
}
// {/fact}