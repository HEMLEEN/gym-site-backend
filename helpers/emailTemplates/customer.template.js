const asyncHandler = require("express-async-handler");
const { commonFooter } = require("./commonTemplates")
const {eventDetails, gym_name, gym_owner, position } = require('../../constants/emailConstants')

const customerDetails = asyncHandler(async (eventData) => {
	const { name, email, message,contact} = eventData
	let commonFooterDiv = await commonFooter()
	return (`<!DOCTYPE html>
	<html lang="en">
		<head>
			<title>My Ticket Email template</title>
			<meta charset="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<!--font-->
			<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
			<style>
			@media only screen and (max-width:475px){
				.mobile-view-mail-title{
				Width:179.27px
				Height:42px
				font-size:18px !important;
				}
				
			}
			</style>
		</head>
		
		<body>
		<p>
                     Dear, ${name}</p>
                       <p> Thank you for choosing our gym!</P
                        <p>Customer Email: ${email}</p>
                        <p>Contact Number: ${contact}</p>
						<p> Message and Feedback: ${message}</p>
                        <p>We look forward to seeing you at the gym! If you have any further questions, feel free to contact us.</p>
                       <p>
                        Best regards,
                        <p>${gym_owner}<br>${position}<br>${gym_name}<br>${eventDetails.address}<br>${contact}</p>
                         </p>
		
	`+ commonFooterDiv + `
					</body>
	</html>`)
})

module.exports = {
	customerDetails
}