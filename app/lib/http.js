import axios from 'axios';
import settings from '../config/settings';
var http = axios.create({
  baseUrl  : settings.serverUrl,
  timeout  : settings.requestTimeout,
  headers  : {
    'api_token' : settings.apiToken     
  }
});
export default http;
