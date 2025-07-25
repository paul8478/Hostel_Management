import axios from '../api/student_axios';

export const getAllStudents = () => axios.get('');
export const createStudent = (student) => axios.post('', student);

export const getStudentById = (id) => axios.get(`/${id}`);
