let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    ses.sendEmail({
        Destination: {
            ToAddresses: ['indunil@adroitlogic.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: `testyyyy`
                }
            },
            Subject: {
                Data: 'test1.3.11'
            }
        },
        Source: 'indunil@adroitlogic.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });

    return { "message": "Successfully executed" };
};