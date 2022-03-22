const LOAD_JOBS = 'jobs/LOAD'

export const loadJobs = payload => {
    return {
        type: LOAD_JOBS,
        payload
    }
}


export const getAllJobs = () => async dispatch => {
    const response = await fetch(`/api/v1/jobs`)

    if(response.ok) {
        const data = await response.json()
        dispatch(loadJobs(data))
    }
}

export const initialState = {entries:[]}

const jobsReducer = (state = initialState, action) => {
    let newState
    switch(action.type) {
        case LOAD_JOBS:
            newState = {...state, entries: [...action.payload]}
            return newState
        default:
            return state
    }
}


export default jobsReducer
