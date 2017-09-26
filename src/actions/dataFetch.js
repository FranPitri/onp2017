import {
    DATA_FETCH_LUX,
    DATA_FETCH_WATER,
    DATA_FETCH_TEMPERATURE
} from '../constants/actionTypes'
import { SERVER_URL } from '../utils/config'

export const loadTemperature = (temperature) => ({
    type: DATA_FETCH_TEMPERATURE,
    payload: {
        temperature: temperature
    }
})

export const loadWater = (water) => ({
    type: DATA_FETCH_WATER,
    payload: {
        water: water
    }
})

export const loadLux = (lux) => ({
    type: DATA_FETCH_LUX,
    payload: {
        lux: lux
    }
})

export const fetchTemperature = () => (
    async (dispatch) => {
        const temperature = await fetch(SERVER_URL + 'api/temperatura/')
        console.log(temperature)
        dispatch(loadTemperature(temperature))
    }
)

export const fetchWater = () => (
    async (dispatch) => {
        const water = await fetch(SERVER_URL + 'api/agua/')
        console.log(water)
        dispatch(loadTemperature(water))
    }
)

export const fetchLux = () => (
    async (dispatch) => {
        const lux = await fetch(SERVER_URL + 'api/luz/')
        console.log(lux)
        dispatch(loadTemperature(lux))
    }
)