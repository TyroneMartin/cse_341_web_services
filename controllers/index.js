// const awesomeFunction =  (req, res, next) => {
//     console.log("awesomeFunction was called: ", awesomeFunction)
//     res.json('Awsome person') 
//    }

// module.exports = {awesomeFunction}

const getName = (req, res) => {
    res.send('Rose Bent');
  };
  
  
module.exports = { getName };
   