var nodeMailer = require('nodemailer');
// const constants = require("../constants/constants")
require('dotenv').config();

const outgoingMails = async (mailContents) => {
    mailContents.to = process.env.EMAIL_SAMPLE
  

    let transporter = nodeMailer.createTransport({
        service: process.env.EMAIL_SERVICE,
       secure: 'true',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
    });
    var subject =  mailContents.subject;
    let mailOptions = {
        from: mailContents.from,
        to: mailContents.to,
        subject: subject,
        html: mailContents.message,
        replyTo: mailContents.replyTo
    };
    console.log('passs-------',mailOptions)
    
    let mailStatus = await transporter.sendMail(mailOptions);

    if(mailStatus && mailStatus.messageId !== undefined){
        console.log('passs')
        return true;
    }else{
        console.log('fail')

        return false;
    }

    
}

module.exports = {
    outgoingMails
}
