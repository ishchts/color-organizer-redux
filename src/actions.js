import { v4 } from 'uuid';
import { createActions, handleActions, combineActions } from 'redux-actions';


const C = {
    ADD_COLOR: "ADD_COLOR",
    RATE_COLOR: "RATE_COLOR",
    REMOVE_COLOR: "REMOVE_COLOR",
    SORT_COLORS: "SORT_COLORS"
}


export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    })

export const removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        id
    })

export const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })

export const sortColors = sortBy =>
    ({
        type: "SORT_COLORS",
        sortBy
    })
