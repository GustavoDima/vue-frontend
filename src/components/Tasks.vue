<template>
  <div class="container">
    <h2 class="text-center">Tasks List</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Task ID</th>
          <th>Subject</th>
          <th>Description</th>
          <th>User Login</th>
          <th>Create Date</th>
          <th>Due Date</th>
          <th>Done</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.subject }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.userLogin }}</td>
          <td>{{ task.createDate }}</td>
          <td>{{ task.dueDate }}</td>
          <td>{{ task.done ? "Yes" : "No" }}</td>
          <td>
            <button @click="$emit('edit', task)">Edit</button>
            <button @click="$emit('delete', task.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};

</script>

<style>
.container {
  margin: 20px auto;
  max-width: 800px;
}
</style>