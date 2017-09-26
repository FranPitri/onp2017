import {
    DATA_FETCH_LUX,
    DATA_FETCH_TEMPERATURE,
    DATA_FETCH_WATER,
    MANAGE_DATA_DELETE_TEMPERATURE,
    MANAGE_DATA_DELETE_WATER,
    MANAGE_DATA_DELETE_LUX
} from '../constants/actionTypes'

const initialState = {
    temperature : [],
    water: [],
    lux: []
}

export default function data(state = initialState, action = {}) {
    switch (action.type) {
        case [DATA_FETCH_TEMPERATURE]:
            return {
                ...state,
                temperature: action.payload.temperature
            }
        case [DATA_FETCH_WATER]:
            return {
                ...state,
                water: action.payload.water
            }
        case [DATA_FETCH_LUX]:
            return {
                ...state,
                lux: action.payload.lux
            }
        case [MANAGE_DATA_DELETE_TEMPERATURE]:
            return {
                ...state,
                temperature: []
            }
        case [MANAGE_DATA_DELETE_WATER]:
            return {
                ...state,
                water: []
            }
        case [MANAGE_DATA_DELETE_LUX]:
            return {
                ...state,
                lux: []
            }
    }
    return state
}
