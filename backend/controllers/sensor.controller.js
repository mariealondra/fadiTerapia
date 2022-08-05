const getSensorValues = async (req, res) => {
   
  try {
  
   const signal = req.body;
   const parsedSignal = parseFloat(Object.keys(signal)[0]);
   // console.log(parsedSignal); 

   if (parsedSignal > 0.0 && parsedSignal < 5.0) {

     console.log(parsedSignal);
     
     } else {
     
     console.log("medidaDescartada");
     
     }

  } catch (error) {
   console.log(error);
  } 

  
 };

 module.exports = {
   getSensorValues,
   }