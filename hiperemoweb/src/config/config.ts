const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const host = isDev ? 'http://localhost:3000' : '';

export const prefixWeb = '/hiperemo';
export const prefixApi = `${host}/hiperemo/api`;
export const debugMode = isDev;
