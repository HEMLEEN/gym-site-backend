const getFullYear=new Date().getFullYear();

const commonFooter= async()=>{
    // let yadara =emailTemplateConstants.userCommonTemplates.commonFooter.yadara
    // let myticket=emailTemplateConstants.userCommonTemplates.commonFooter.myticket
    
    let footerTitle = "LIFE CHANGE FITNESS"
    let footerTerms =`Terms`
    let footerprivacy =`Privacy`
    let footerCopyright =`All Rights Reserved Life Change Fitness`
    
    return`
    <div style="width:100%;box-sizing:border-box;background: #F8F8F8;padding: 12px 10px" class="footer ">
    <div style="text-align: center;">
    ${footerTitle}
    </div>
        <div class="footer-section.mobile-view" style="text-align:center;box-sizing: border-box;">
            <p class="order-Copyright-mobile" style="font-family: 'Open Sans Regular', sans-serif ;font-style: normal;font-weight: 400;font-size: 13px;line-height: 16px;text-align: center;color: #556573; margin:14px 0 10px">Copyright &copy; ${getFullYear}. ${footerCopyright}</p>
            <a class="order-Copyright-mobile" href="${footerTerms}terms-and-conditions" style="font-family: 'Open Sans Semibold', sans-serif;font-style: normal;font-weight: 600;font-size: 13px;line-height: 16px;text-align: center;text-decoration-line: underline;color: #556573;padding: 0 10px;text-decoration:none;">Terms of Use</a>
            <a class="order-Copyright-mobile" href="${footerprivacy}privacy-policy"  style="font-family: 'Open Sans Semibold', sans-serif;font-style: normal;font-weight: 600;font-size: 13px;line-height: 16px;text-align: center;text-decoration-line: underline;color: #556573;padding: 0 10px;text-decoration:none;">Privacy Policy</a>
        </div>
    </div>`
    }

    module.exports ={
        commonFooter
    }