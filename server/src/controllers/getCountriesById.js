const {Country, Activiti} = require("../db");

const getCountriesById =  async (id) => {
    console.log("id ",id);
    try { 
        const countrie = await Country.findOne({ where: { id: id }})
        if (countrie !== null) {
            // agrego las actividades del pais
            
            return countrie;
        }
        return "error";
    } catch(error) {
            return ( error.message)
        }
};


module.exports = {
    getCountriesById
}
