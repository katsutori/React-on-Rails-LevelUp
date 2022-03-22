const LOAD_JOBS = 'jobs/LOAD'

export const loadJobs = payload => {
    return {
        type: LOAD_JOBS,
        payload
    }
}


export const getAllJobs = () => async dispatch => {

}
