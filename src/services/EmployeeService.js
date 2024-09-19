import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://3.82.10.225:25000/api/employees"

class EmployeeService {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService()
