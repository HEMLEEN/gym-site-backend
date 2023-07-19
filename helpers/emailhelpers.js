
const sendMail = require('./mailer');
const {customerDetails} = require ('../helpers/emailTemplates/customer.template');


async function eventTemplate(eventData) {
    const { email } = eventData;
    const subject = 'welcome to life change fitness';
    const message = await customerDetails(eventData); // Corrected function name
  
    const emailParams = {
      to: email,
      subject,
      message: message,
    };
    await sendmail(emailParams);
  }
  
async function sendmail(content) {
    try {
      let mailContents = {
        from: 'Life Change Fiteness',
        to: content.to,
        subject: content.subject,
        message: content.message,
      };
      await Promise.resolve(await sendMail.outgoingMails(mailContents));
     
    } 
    catch (error) {
      console.log("error on common template send mail ==>",error);
    }
  }

module.exports ={
    eventTemplate
}