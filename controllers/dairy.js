const jwt = require('jsonwebtoken');
const jwtauthentication = require('../middlewares/Auth');
const dairy = require('../models').dairy;

exports.getDairy = [
    jwtauthentication,
    async (req, res) => {
        try {
            const dairy_list = await dairy.findAll();
            return res.send({ status: 200, dairy_list });
        } catch (error) {
            return res.send({ status: 500, data: error.message });
        }
    },
];
exports.addEntryToDairy = [
    jwtauthentication,
     async (req, res) => {
        const { userid,description } =
            req.body;
        const newEntry = {
           userid, 
           description,
        };
           try {
                const findEntry = await dairy.findOne({
                    where: { description },
                });
                if (findEntry) {
                    return res.send({ status: 400, data: 'Entry already exist' });
                } else {
                    await dairy.create(newEntry);
                    return res.send({ status: 200, data: 'Entry created successfully' });
                }
            } catch (error) {
                return res.send({ status: 500, data: error.message });
            }
        }
];
exports.editEntry = [
   jwtauthentication,
       async (req, res) => {
        const id = req.params.userid;
        try {
            const findEntry = await  dairy.findOne({
                where: { id },
            });
            findEntry.description = req.body.description;

            await findEntry.save();
            return res.send({ status: 200, data: 'Entry updated successfully' });
        } catch (error) {
            return res.send({ status: 500, data: error.message });
        }
    },
];
exports.entryById = [
   jwtauthentication,
    async (req, res) => {
        const id = req.params.userid;
        try {
            const findEntry = await dairy.findOne({
                where: { id },
            });
            return res.send({ status: 200, entry_data: findEntry });
        } catch (err) {
            return res.send({ status: 500, data: err.message });
        }
    },
];
exports.deleteEntry = [
   jwtauthentication,
    async (req, res) => {
        const id = req.params.userid;
        try {
            const findEntry = await dairy.findOne({
                where: { id },
            });
            await findEntry.destroy();
            return res.json({ status: 200, message: 'entry Deleted successfully' });
        } catch (error) {
            return res.send({ status: 500, data: error.message });
        }
    },
];

exports.entryBYDate= [
    jwtauthentication,
     async (req, res) => {
         console.log("inside entrybydate");
         const createdAt= req.params.date;
         try {
             const findEntry = await dairy.findOne({
                 where: { createdAt },
             });
             
             return res.send({ status: 200, entry_data: findEntry});
         } catch (error) {
             return res.send({ status: 500, data: error.message });
         }
     },
 ];
 
