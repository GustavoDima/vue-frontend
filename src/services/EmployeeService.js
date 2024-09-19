import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://ec2-3-82-10-225.compute-1.amazonaws.com:25000/api/employees"

class EmployeeService {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService()
