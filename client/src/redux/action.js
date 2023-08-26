import axios from "axios";

export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";

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


