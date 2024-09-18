<template>
  <div class="container">

    <h1 class="text-center"> Employees List </h1>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Employee Id</th>
        <th>Employee First Name</th>
        <th>Employee Last Name</th>
        <th>Employee Email</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="employee in employees" v-bind:key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.employeeFirstName }}</td>
        <td>{{ employee.employeeLastName }}</td>
        <td>{{ employee.employeeEmail }}</td>
      </tr>
      </tbody>

    </table>

  </div>
</template>

<script>
import EmployeeService from "@/services/EmployeeService";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Employees',
  data() {
    return {
      employees: []
    }
  },
  methods: {
    getEmployees() {
      EmployeeService.getEmployees().then((response) => {
        this.employees = response.data;
      })
    }
  },
  created() {
    this.getEmployees()
  }
}
</script>
