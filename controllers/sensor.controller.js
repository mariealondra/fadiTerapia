const getSensorValues = async (req, res) => {
   
   try {
   
    const signal = req.body;
   console.log(signal); 


   } catch (error) {
    console.log(error);
   } 

   
  };
  
  module.exports = {
    getSensorValues
    }