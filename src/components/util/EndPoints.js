
//const host = 'http://localhost:8085/zx-demo/'

const host = process.env.REACT_APP_ZX_APP_SERVER;

export const EndPoint = { 
    LOGIN: host + 'auth/login'
}