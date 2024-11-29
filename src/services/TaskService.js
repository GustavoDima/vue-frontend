import axios from "axios";

const TASK_API_BASE_URL = "http://ec2-54-91-202-176.compute-1.amazonaws.com:8080/api/todo";


class TaskService {
    // GET: Obter todas as tarefas
    getTasks() {
        return axios.get(TASK_API_BASE_URL);
    }

    // POST: Criar uma nova tarefa
    createTask(task) {
        return axios.post(`${TASK_API_BASE_URL}/new`, task);
    }

    // PUT: Atualizar uma tarefa existente
    updateTask(id, task) {
        return axios.put(`${TASK_API_BASE_URL}/update/${id}`, task);
    }

    // DELETE: Remover uma tarefa pelo ID
    deleteTask(id) {
        return axios.delete(`${TASK_API_BASE_URL}/delete/${id}`);
    }
}

export default new TaskService();
