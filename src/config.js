export const environment = {
    production: {
        SERVER_NAME: "PRODUCTION",
        API: {
            PROTOCOL: "https://",
            HOST: "localhost",
            PORT: "8080",
            VERSION: "/api"
        }
    },
    development: {
        SERVER_NAME: "LOCAL",
        API: {
            PROTOCOL: "http://",
            HOST: "localhost",
            PORT: "8080",
            VERSION: "/api"
        }
    }
};
export const BASE_URL = environment[process.env.NODE_ENV].API.PROTOCOL + environment[process.env.NODE_ENV].API.HOST + ":" + environment[process.env.NODE_ENV].API.PORT;
export const API_BASE_URL = BASE_URL + environment[process.env.NODE_ENV].API.VERSION;