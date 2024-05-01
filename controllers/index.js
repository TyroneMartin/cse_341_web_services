
const Controller = {};

Controller.getName = (req, res) => {
    // res.json is used to create backend api
    res.json({ name: 'Rose Bent' });    //  sends this an json object
};



module.exports = Controller

   