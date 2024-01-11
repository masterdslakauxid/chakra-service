const express = require("express")
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// router.get('/', (req, res) => {
//     res.send("A list of enquiries New");
// });


router.get('/', async (req, res) => {
    try {
        const enquiries = await Enquiry.find();
        res.json(enquiries);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/:equiryId', async (req, res) => {
    try {
        const enquiry = await Enquiry.findById(req.params.equiryId);
        res.json(enquiry);
    } catch (err) {
        res.json({ message: err });
    }

});

router.delete('/:equiryId', async (req, res) => {
    try {
        const deletedEnquiry = await Enquiry.deleteOne({ "_id": req.params.equiryId });
        res.json(deletedEnquiry);
    } catch (err) {
        res.json({ message: err });
    }

});

router.patch('/:equiryId', async (req, res) => {
    try {
        const updatedEnquiry = await Enquiry.updateOne({ "_id": req.params.equiryId }, { $set: { mobile: req.body.mobile } });
        res.json(updatedEnquiry);
    } catch (err) {
        res.json({ message: err });
    }

});

router.post('/', (req, res) => {
    console.log(req.body);
    const enquiry = new Enquiry({
        emailId: req.body.emailId,
        mobile: req.body.mobile
    })

    enquiry.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.json({ message: err });
        })

});

module.exports = router;