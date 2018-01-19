import { createStore, combineReducers } from './redux';

// action
let addBike = (bike) => {
    return {
        type: 'add_bike',
        bike
    }
}
let removeBike = (bike) => {
    return {
        type: 'remove_bike',
        bike
    }
}
// reducer
let bike = (state = [], action) => {
    switch (action.type) {
        case 'add_bike':
            return [...state, action.bike]
        case 'remove_bike':
            return state.filter(bike => action.bike.name !== bike.name)
        default:
            return state
    }
}

let reducer = combineReducers({bike})
let store = createStore(reducer)
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)
store.dispatch(addBike({ name: 'giant' }))
store.dispatch(addBike({ name: 'trek' }))
store.dispatch(removeBike({ name: 'giant' }))
