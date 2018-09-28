import KeyMirror from 'key-mirror'

const Constants = KeyMirror({
  TOKEN_REQUEST: null,
  TOKEN_SUCCEEDED: null,
  TOKEN_FAILED: null,
  //jobs
  FETCH_JOBS: 'FETCH_JOBS',
  FETCH_JOBS_SUCCEEDED: 'FETCH_JOBS_SUCCEEDED',
  FETCH_JOBS_FAILED: 'FETCH_JOBS_FAILED',
  //users login
  LOGIN_SUCCEEDED: 'LOGIN_SUCCEEDED',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  //detail
  FETCH_DETAILS: 'FETCH_DETAILS',
  FETCH_DETAILS_FAILED: 'FETCH_DETAILS_FAILED',
  FETCH_DETAILS_SUCCEEDED: 'FETCH_DETAILS_SUCCEEDED'
})

export default Constants
