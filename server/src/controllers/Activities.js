const {Activities, Country} = require("../db");

const postActivity = async (act, paises) => {
   // console.log("CONTROLLER");
    try {
        const newActivity = await Activities.create( act);
        //console.log("newactivities post CONTROLER", newActivity);
    
        const associateCountries = await Country.findAll({
            where :{
                id : paises
            }
        })
        if (associateCountries.length > 0) {
            await newActivity.addCountries( associateCountries) 
        }
        return newActivity;
        
    } catch (error) {
        console.log(error.messaje);
    }   
}

const getActivities = async () => {
    return "bustcara las actividades ";
}

module.exports = {
    getActivities,
    postActivity,
}