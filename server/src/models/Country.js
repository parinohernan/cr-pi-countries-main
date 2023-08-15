const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID : {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validator :{
        min : 3,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagenBandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validator: {
        len: [3]
      }
    }
  });
};
    


