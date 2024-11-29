<template>
  <div id="app">
    <h1 class="text-center">Task Manager</h1>

    <!-- Formulário para adicionar/editar tarefas -->
    <form @submit.prevent="handleSubmit">
      <div>
        <input
          type="text"
          v-model="taskForm.subject"
          placeholder="Task Subject"
          required
        />
        <input
          type="text"
          v-model="taskForm.description"
          placeholder="Task Description"
          required
        />
        <input
          type="text"
          v-model="taskForm.userLogin"
          placeholder="User Login"
          required
        />
        <input
          type="date"
          v-model="taskForm.dueDate"
          placeholder="Due Date"
          required
        />
        <label>
          <input type="checkbox" v-model="taskForm.done" /> Done
        </label>
      </div>
      <button type="submit">
        {{ isEditing ? "Update Task" : "Add Task" }}
      </button>
      <button v-if="isEditing" @click="cancelEdit" type="button">Cancel</button>
    </form>

    <!-- Tabela de tarefas -->
    <tasks
      :tasks="tasks"
      @edit="editTask"
      @delete="deleteTask"
    ></tasks>
  </div>
</template>

<script>
import Tasks from "@/components/Tasks"; // Importa o componente tasks
import TaskService from "@/services/TaskService"; // Importa o serviço de tarefas

export default {
  name: "App",
  components: { tasks },
  data() {
    return {
      tasks: [], // Lista de tarefas
      taskForm: {
        id: null,
        subject: "",
        description: "",
        userLogin: "",
        dueDate: "",
        done: false,
      },
      isEditing: false, // Indica se está editando uma tarefa
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    // Obtém todas as tarefas
    getTasks() {
      TaskService.getTasks().then((response) => {
        this.tasks = response.data;
      });
    },
    // Adiciona ou atualiza uma tarefa
    handleSubmit() {
      if (this.isEditing) {
        // Atualiza tarefa existente
        TaskService
          .updateTask(this.taskForm.id, this.taskForm)
          .then(() => {
            this.getTasks();
            this.resetForm();
          });
      } else {
        // Adiciona uma nova tarefa
        TaskService.createTask(this.taskForm).then((response) => {
          this.tasks.push(response.data);
          this.resetForm();
        });
      }
    },
    // Inicia a edição de uma tarefa
    editTask(task) {
      this.taskForm = { ...task };
      this.isEditing = true;
    },
    // Cancela a edição
    cancelEdit() {
      this.resetForm();
    },
    // Remove uma tarefa
    deleteTask(taskId) {
      TaskService.deleteTask(taskId).then(() => {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      });
    },
    // Reseta o formulário de tarefas
    resetForm() {
      this.taskForm = {
        id: null,
        subject: "",
        description: "",
        userLogin: "",
        dueDate: "",
        done: false,
      };
      this.isEditing = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
form {
  margin-bottom: 20px;
}
form div {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}
button {
  margin: 5px;
}
</style>