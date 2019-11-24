// configuration can be found in server/src/main/resources/application.yml
const SERVER_URL = typeof process != "undefined" && process.env.NODE_ENV ? '' : 'http://localhost:8080';

export const API_NAME = SERVER_URL + "/name/";
