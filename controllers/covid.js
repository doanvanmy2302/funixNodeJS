const BodyTemp = require('../models/body-temperature');
const Vaccine = require('../models/vaccine');
const Staff = require('../models/staff');

exports.postBodyTemp = (req, res, next) => {
    const temperature = req.body.bodytemp;
    const staffId = req.staff._id;
    const today = new Date();
    const bodytemp = new BodyTemp({
        temperature: temperature,
        time: today,
        staffId: staffId
    })
    bodytemp
        .save()
        .then(result => {
            console.log('Posted body temperature success!');
            res.redirect('/covid')
        })
        .catch(err => console.log(err))
}

exports.postVaccine = (req, res, next) => {
    const numberVaccine = req.body.numberVaccine;
    const type = req.body.vaccine_type;
    const date = req.body.vaccine_date;
    const staffId = req.staff._id;
  
    const vaccine = new Vaccine({
        numberVaccine: numberVaccine,
        type: type,
        date: date,
        staffId: staffId
    })
    vaccine
        .save()
        .then(result => {
            console.log('Posted vaccince success!');
            res.redirect('/covid')
        })
        .catch(err => console.log(err))
}

exports.postTestResult = (req, res, next) => {
    const result = req.body.test_result;
    const staffId = req.staff._id;
  
    Staff.findById(staffId)
        .then(staff => {
            staff.covidTestResult = result;
            return staff.save()
        })
        .then(result => {
            console.log('Updated covid test result!');
            res.redirect('/covid')
        })
        .catch(err => console.log(err))
}

exports.getCovid = (req, res, next) => {
    res.render('covid/covid', {
        pageTitle: 'Covid',
        path: '/covid'
      });
}


