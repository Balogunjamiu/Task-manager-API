const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'balogunjamiu49@gmail.com',
        subject: 'welcome to the app',
        text:`Welcome to the app. ${name}, let me know you get along with the app`,
    })
}

const concellation = (email,name)=>{
    sgMail.send({
        to:email,
        from:'Balogunjamiu49@gmail.com',
        subject:'Sorry to see you go',
        text:`Goodbye ${name}, is there anything we could have done to keep you on track`
    })
}

module.exports = {
    sendWelcomeEmail,
    concellation
}