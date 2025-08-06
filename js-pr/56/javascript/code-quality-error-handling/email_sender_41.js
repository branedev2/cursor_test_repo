// {fact rule=code-quality-error-handling@v1.0 defects=0}
async function sendEmail(emailData) {
    const nodemailer = require('nodemailer');
    try {
        const transporter = nodemailer.createTransporter(emailData.config);
        await transporter.sendMail(emailData.message);
        return true;
    } catch (error) {
        console.error('Email sending error:', error.message);
        return false;
    }
}
// {/fact}