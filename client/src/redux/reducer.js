const initialState = {
  countries: [],
  allCountries: [],
  detail: {}
}

import { GET_COUNTRIES, FILTER_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_COUNTRY_DETAIL, POST_ACTIVITY, ORDER_BY_AREA, ORDER_BY_POPULATION } from "./action";

const rootReducer = (state = initialState, action) => {
  //console.log("en  REDUCER",action);  
  const allCountries = state.allCountries;
  switch (action.type){
        case GET_COUNTRIES:
          return { ...state, 
            countries: action.payload,
            allCountries: action.payload 
           }

        case GET_COUNTRY_DETAIL:
          console.log("reducer");
        return{
            ...state,
            detail: action.payload
        }
        case POST_ACTIVITY:
            return {
                ...state,
            }  

        case FILTER_BY_NAME: //por query
          return {...state, countries: action.payload}

        case FILTER_BY_CONTINENT:
          const filtered = action.payload === "Todos" ?
          allCountries 
          : 
          allCountries.filter(e => e.continents === action.payload);
          return{
              ...state,
              countries: filtered
          }
           
        case FILTER_BY_ACTIVITY:
        // este filtro es un poco complicado porque las actividades son un array de objetos
        const filteredByAct = action.payload === "Todas" ?
        allCountries 
        : 
        allCountries.filter((pais) => {//recorre todos los paises
          
          for (let i = 0; i < pais.Activities.length; i++) {//recorre todas las actividades de cada pais
             const actividad = pais.Activities[i].nombre;
             console.log("for ",actividad);
            if (actividad === action.payload ) {
               return pais;
            }
           }
        });
        
        return{
            ...state,
            countries: filteredByAct
        }

        case ORDER_BY_POPULATION:
            // Copia el array de países del estado actual
            const countriesCopy = [...state.countries];
            // Utiliza la función de comparación para ordenar el array de países
            countriesCopy.sort((a, b) => {
                
              if (action.payload === "Ascendente") {
                 
                return a.population - b.population; // Orden ascendente
                } else {
                        
                return b.population - a.population; // Orden descendente
                }
            });
            return {
              ...state,
              countries: countriesCopy, // Asigna el array de países ordenado
            };
         

        case ORDER_BY_AREA:
            // Copia el array de países del estado actual
            const countriesCopy0 = [...state.countries];

            // Utiliza la función de comparación para ordenar el array de países
            countriesCopy0.sort((a, b) => {
                if (action.payload === "Ascendente") {
                   
                return a.area - b.area; // Orden ascendente
                } else {
                       
                return b.area - a.area; // Orden descendente
                }
            });

            return {
                ...state,
                countries: countriesCopy0, // Asigna el array de países ordenado
            };
           
        default:
          return { ...state};
    }
     
};

export default rootReducer;