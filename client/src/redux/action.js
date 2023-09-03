import axios from "axios";

export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_AREA = "ORDER_BY_AREA";

export const getCountries = () => {
    
    return async (dispatch) => {
        try {
            let countries = await axios.get("http://localhost:3001/countries");
            return dispatch({type: GET_COUNTRIES, payload: countries.data } );
        } catch (error) {
            console.log("error action ",error.message);
        }
    };
};

export const getCountryDetail = (id) => {
    
    return async (dispatch) => {
        try {
            let country = await axios.get(("http://localhost:3001/countries/"+id));
            console.log("http://localhost:3001/countries/",id);
            return dispatch({type: GET_COUNTRY_DETAIL, payload: country.data } );
        } catch (error) {
            console.log("error action ",error.message);
        }
    };
};


export const postActivity = (payload) => {
    console.log("paiload",payload);
    console.log("paises", payload.paises);
    return async () => {
      try {
        let activity = await axios.post("http://localhost:3001/activities", payload);
        return activity.data; 
      } catch (error) {
        console.log("error action ", error.message);
        throw error; // Lanza el error nuevamente para manejarlo en otro lugar si es necesario
      }
    };
  };

export const filterPaisByName = (nombre) => {
    //return { type: FILTER_BY_NAME, payload: nombre };
    return async (dispatch) => {
    try {
        const url = ("http://localhost:3001/countries/?name=" + nombre);
        let countries = await axios.get(url);
        return dispatch({type: FILTER_BY_NAME, payload: countries.data } );
    } catch (error) {
        console.log("error action ",error.message);
    }
};
};

export const filterContinente = (continente) => {
    //return { type: FILTER_BY_NAME, payload: nombre };
    return  {type: FILTER_BY_CONTINENT, payload: continente };
    
};

export const filterActividad = (actividad) => {
    //return { type: FILTER_BY_NAME, payload: nombre };
    return  {type: FILTER_BY_ACTIVITY, payload: actividad };
    
};

export function orderByPopulation(payload) {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
}

export function orderByArea(payload) {
    return {
        type: ORDER_BY_AREA,
        payload
    }
}
