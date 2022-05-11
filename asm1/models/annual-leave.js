const mongoose = require('mongoose')

const Schema= mongoose.Schema;

const annulleaveSchema = new Schema ({ 
    dateOff: {type: Date, required: true},
    hours: {type:Number, required: true}, 
    reason: {type: String, required: true},
    staffId: { type: Schema.Types.ObjectId, ref: 'Staff', required: true}
})
module.exports= mongoose.model('Annualleave',annulleaveSchema)