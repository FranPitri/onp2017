import {
    MANAGE_DATA_DELETE_TEMPERATURE,
    MANAGE_DATA_DELETE_WATER,
    MANAGE_DATA_DELETE_LUX
} from '../constants/actionTypes'
import { SERVER_URL } from '../utils/config'

export const truncateTemperature = (temperature) => ({
    type: MANAGE_DATA_DELETE_TEMPERATURE
})

export const truncateWater = (temperature) => ({
    type: MANAGE_DATA_DELETE_WATER
})

export const truncateLux = (temperature) => ({
    type: MANAGE_DATA_DELETE_LUX
})


export const deleteData = (type) => (
    async (dispatch) => {
        switch (type) {
            case 'temperature':
                await fetch(SERVER_URL + 'api/deleteTemperatura/')
                dispatch(truncateTemperature())
                break
            case 'water':
                await fetch(SERVER_URL + 'api/deleteAgua/')
                dispatch(truncateWater())
                break
            case 'lux':
                await fetch(SERVER_URL + 'api/deleteLuz/')
                dispatch(truncateLux())
                break
            default: return null
        }
    }
)