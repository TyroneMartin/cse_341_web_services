const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
  // console.log("Result: ", result);

};

// const getSingle = async (req, res, next) => {
//   const userId = new ObjectId(req.params.id);
//   const result = await mongodb
//     .getDb()
//     .db()
//     .collection('contacts')
//     .find({ _id: userId });
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]);
//   });
// };


const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .findOne({ _id: userId });

  if (result) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
};

module.exports = { getAll, getSingle };