import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/students',  // Your backend base URL + controller mapping

});
