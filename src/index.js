const express = require('express')
const app = express();

const {PORT}= require('./config/serverConfig');


const {sendBasicEmail} = require('./services/email-service'); 

const prepareAndStartServer =  ()=>{
app.listen(PORT ,()=>{
    console.log(`server is running fine on port ${PORT}`);
    sendBasicEmail(
        'support@admin.com',
        'kk63961207@gmail.com',
        'This is a testing email',
        'Hey how are you , I hope doing good'

    );
})

}

prepareAndStartServer();