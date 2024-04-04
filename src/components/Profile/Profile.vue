<template>
  <div class="profile-container">
    <h1>Profile Information</h1>
    <div class="profile-content">
      <div class="profile-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" class="form-control">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control">
        </div>
        <button @click="saveData" class="btn btn-primary">Save</button>
      </div>
      <div class="profile-details-wrapper">
        <div class="profile-details-container" v-if="dataDisplayed">
          <h2>Profile Details</h2>
          <p>Name: {{ name }}</p>
          <p>Email: {{ email }}</p>
          <p>Password: {{ password }}</p>
          <button @click="editData" class="btn btn-secondary">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let name = ref('');
let email = ref('');
let password = ref('');
let dataDisplayed = ref(true);

const saveData = () => {
  dataDisplayed.value = true;
};

const editData = () => {
  dataDisplayed.value = true;
};
</script>


<style scoped>
.profile-container {
  margin: auto;
  margin-top: 100px;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  text-align: center;
}

.profile-content {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.profile-form {
  flex: 1;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.profile-details-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-details-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 300px;
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.form-control {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90%;
}

.btn {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>


