const initialState = {
  countries: [],
  allCountries: [],
  //allActivities: [],
  //activities: [],
  //detail: {}
}

import { GET_COUNTRIES, FILTER_BY_NAME, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY } from "./action";

const rootReducer = (state = initialState, action) => {
  //console.log("en  REDUCER",action);  
  switch (action.type){
        case GET_COUNTRIES:
          return { ...state, 
            countries: action.payload,
            allCountries: action.payload 
           }

        case FILTER_BY_NAME: //por query
          return {...state, countries: action.payload}

        case FILTER_BY_CONTINENT:
          const allCountries = state.allCountries;
          const filtered = action.payload === "Todos" ?
          allCountries 
          : 
          allCountries.filter(e => e.continents === action.payload);
          return{
              ...state,
              countries: filtered
          }
           
        case FILTER_BY_ACTIVITY:
       // const allCountries = state.allCountries;
        //console.log("all filt by cont",allCountries);
        //const filtered = action.payload === "Todos" ?
        allCountries 
        : 
        allCountries.filter(e => e.continents === action.payload);
        //console.log("fint filt by cont",filtered);
        return{
            ...state,
            countries: filtered
        }
           
        default:
          return { ...state};
    }
     
};

export default rootReducer;