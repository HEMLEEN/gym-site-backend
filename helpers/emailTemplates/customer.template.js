const asyncHandler = require("express-async-handler");
const { commonFooter } = require("./commonTemplates")
const {gym_logo, orderDetails, eventDetails} = require ('../../constants/emailConstants')

const  customerDetails = asyncHandler(async (eventData) => {
let commonFooterDiv = await commonFooter()
	return(`<!DOCTYPE html>
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
			<section>
			<table style="max-width:600px;width:100%;margin:0 auto;" >
			<tr >
				<th class="mobile-view-mail-title" style="text-align:center;width: 100%; box-sizing: border-box ;padding-top: 25px;">
				<img src="${gym_logo}" alt="gym_logo" style=" margin: 0 auto; display:block;  width: 100%; height: 100%; max-width: 218px;max-height: 52px;" class="img-fluid"/>
				</th>
			</tr>
		</table>
		
		<table style="max-width:600px;height:auto;width:100%;margin:0 auto;box-sizing: border-box;background-color: #fff;">
    <tbody style="max-width:600px;height:auto;width:100%;box-sizing: border-box;" >
        <tr>
            <td>
			<table style="width:100%;margin:0 auto;">
			<tr>
				<td style="box-sizing: border-box; padding: 0 25px;">
					<table style="width: 100%;">
					<th class="mobile-view-mail-title" style="text-align:center;width: 100%; box-sizing: border-box ;padding-top: 25px;">
						<tr >
							<td style="font-family: 'Ubuntu', sans-serif; font-style: normal; font-weight: 700;font-size: 18px; line-height:16px; text-align: center; color: #121223;padding: 10px 0 28px 0;"> ${eventData.name}</td>
						</tr>
						</th>
						<tr>
							<td style="font-family: 'Open Sans', sans-serif;font-style: normal;font-weight: 700;font-size:22px; line-height:32px; text-align: center; color:#121223;padding: 0 5px;">
							<span style="display: block;">${orderDetails.description}
							</span>
						</tr>
						</table>
						</td>
					</tr>
				</tbody>
			</table>
	
			<table  style="max-width:600px;width:100%;margin:0 auto; padding-bottom:16px; background: #ffffff;">
                <tr>
                    <td style="  box-sizing: border-box; padding: 0 12px; ">
                        <table style="max-width: 575px;height: 190px; width: 100%; background: #FFFFFF; border: 2px solid #D1D4E1; border-radius: 5px; ">
                            <tr> 
                                <td style="padding:22px 20px;">
                                    <table style="width:100%; ">
                                        <tr>
                                            <td style="font-family: 'Ubuntu', sans-serif; font-style: normal; font-weight: 700; font-size: 22px; line-height: 25px; color: #121223;width:100%; padding-bottom: 5px;">${eventDetails.event_name}</td>
                                        </tr>
                                        <tr>
                                            <td style=" font-family: 'Open Sans', sans-serif; font-style: normal; font-weight: 600; font-size: 18px; line-height: 30px; color: #042F61; width:100%;">${eventDetails.address}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-family: 'Open Sans', sans-serif; font-style: normal; font-weight: 600; font-size: 18px; line-height: 30px; color: #2C91EE; display: inline-block;">${eventDetails.time}</td>
											
                                            <td style="font-family: 'Open Sans', sans-serif; font-style: normal; font-weight: 600; font-size: 18px; line-height: 25px; color: #556573;float:right;  ">Event ID: ${eventDetails.event_id}</td>
                                        </tr>
                                        
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
			
	`+commonFooterDiv+`
			
			</section>
		</body>
	</html>`)
})

module.exports ={
    customerDetails
}