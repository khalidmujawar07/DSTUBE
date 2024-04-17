<template>
  <div class="profile-page">
    <h2>Profile Page</h2>
    <div class="profile-form">
      <form @submit.prevent="saveOrUpdateData">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="text" id="phone" v-model="formData.phone" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required>
        </div>
        <div class="buttons">
          <button type="submit" class="btn save-btn">{{ userIndex !== null ? 'Update' : 'Save' }}</button>
          <button type="button" v-if="userIndex !== null" class="btn cancel-btn" @click="cancelUpdate"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </form>
    </div>
    <div class="user-list">
      <h3>User List</h3>
      <ul>
        <li v-for="(user, index) in userList" :key="index" class="user-item">
          <div class="user-details">
            <div><strong>Name:</strong> {{ user.name }}</div>
            <div><strong>Email:</strong> {{ user.email }}</div>
            <div><strong>Phone:</strong> {{ user.phone }}</div>
          </div>
          <div class="user-actions">
            <button type="button" @click="editUser(index)" class="btn edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  password: ''
});

const userList = ref([]);
const userIndex = ref(null);

const saveOrUpdateData = () => {
  if (userIndex.value !== null) {
    userList.value[userIndex.value] = { ...formData.value };
    userIndex.value = null;
  } else {
    userList.value.push({ ...formData.value });
  }
  resetFormData();
};

const editUser = (index) => {
  formData.value = { ...userList.value[index] };
  userIndex.value = index;
};

const cancelUpdate = () => {
  resetFormData();
  userIndex.value = null;
};

const resetFormData = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };
};
</script>

<style scoped>
/* Container styles */
.profile-page {
  max-width: 800px; /* Set maximum width for the container */
  margin: 40px auto; /* Center the container horizontally */
  padding: 20px;
  background-color: red;
  border-radius: 8px;
  padding-bottom: 80px;
}

/* Form styles */
.profile-form {
  background-color:black;
  padding: 20px;
  margin-bottom: 50px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  color: white;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid white;
  box-sizing: border-box;
  color: white;
}

.buttons {
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.save-btn,
.cancel-btn,
.edit-btn {
  background-color: red;
  color: #fff;
}

.cancel-btn {
  margin-right: 10px;
  margin-left: 20px;
}

/* User list styles */
.user-list {
  background-color: black;
  padding: 40px;
  color: white;
}

.user-list h3 {
  margin-top: 5px;
  color: white;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 15px 0;
  color: white;
}

.user-details {
  flex-grow: 1;
  color: white;
}

.user-actions {
  flex-shrink: 0;
}
</style>
