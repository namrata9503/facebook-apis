const mongoose = require('mongoose')

var PageSchema = new mongoose.Schema({
    name: String,
    followers: Number,
    pageType: String,
    createdBy: String,
    createdOn: Date
})

const Page = mongoose.model('Page', PageSchema);

module.exports = Page;