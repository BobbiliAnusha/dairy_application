const jwt = require('jsonwebtoken');
const jwtauthentication = require('../middlewares/Auth');
const credentials = require('../models').credentials;
exports.getUserCredentials = [
    async (req, res) => {
        try {
            const credentials = await credentials.findAll();
            return res.send({ status: 200, credentials });
        } catch (error) {
            return res.send({ status: 500, data: error.message });
        }
    },
];
exports.addNewCredentials = [
    jwtauthentication,
       async (req, res) => {
        const userid = req.params.userid;
        const { platform,email,password} =
            req.body;
        const newCredentials = {
            userid,
            platform,
            email,
            password
        };
         try {
            const findCredentials = await credentials.findOne({
                where: { userid },
            });
            if(findCredentials){
                //await credentials.create(newCredentials);
                //return res.send({ status: 200, data: 'Credentials created successfully' });
                return res.send({status: 500, message:'User not found'})
            }
            else{
                await credentials.create(newCredentials);
                return res.send({ status: 200, data: 'Credentials created successfully' });
                //return res.send({status: 500, message:'User not found'})
            }
        }
        catch (error) {
            return res.send({ status: 500, data: error.message });
        }
    }
];
exports.editCredentials = [
   jwtauthentication,
     async (req, res) => {
        const userid = req.params.userid;
        try {
            const findCredentials = await credentials.findOne({
                where: { userid },
            });
            findCredentials.platform = req.body.platform;
            findCredentials.email=req.body.email;
            findCredentials.password=req.body.password;

            await findCredentials.save();
            return res.send({ status: 200, data: findCredentials });
        } catch (error) {
            return res.send({ status: 500, data: error.message });
        }
    },
];
exports.credentialsById = [
    jwtauthentication,
    async (req, res) => {
        const userid = req.params.userid;
        console.log(userid);
        try {
            const findCredentials = await credentials.findOne({
                where: { userid },
            });
            return res.send({ status: 200, data: findCredentials });
        } catch (err) {
            return res.send({ status: 500, data: err.message });
        }
    },
];
exports.deleteCredentials = [
    jwtauthentication,
    async (req, res) => {
        const userid = req.params.userid;
        try {
            const findCredentials = await credentials.findOne({
                where: { userid },
            });
            await findCredentials.destroy();
            return res.json({ status: 200, message: 'credentials Deleted successfully' });
        } catch (error) {
            return res.send({ status: 500, data: error.message });
        }
    },
];