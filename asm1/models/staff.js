const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  doB: {
    type: Date,
    required: true
  },
  salaryScale: {
    type: Number,
    required: true
  },
  startDate: {
    type: Number,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  imageUrl :{
    type: String,
    required: true
  },
  annualleave:{
    type: Number,
     required:true
  },
  timeRecord: {
    items: [{ 
      timeRecordId:{type: Schema.Types.ObjectId,ref:'TimeRecord', required: true}
    }]
  },
  annualleaveRecord: {
    items:[{ annualleaveRecordId: {type: Schema.Types.ObjectId,ref:'AnnualleaveRecord', required:true}
    }]
  }
});

module.exports = mongoose.model('Staff', staffSchema);


