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
            <button type="submit" class="btn save-btn">{{ editingIndex !== null ? 'Update' : 'Save' }}</button>
            <button type="button" v-if="editingIndex !== null" class="btn cancel-btn" @click="cancelUpdate">Cancel</button>
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
              <button type="button" @click="editUser(index)" class="btn edit-btn">Edit</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          password: ''
        },
        userList: [],
        editingIndex: null // Index of the user being edited, null if no user is being edited
      };
    },
    methods: {
      saveOrUpdateData() {
        if (this.editingIndex !== null) {
          // Update user data if editing existing user
          this.userList[this.editingIndex] = { ...this.formData };
          this.editingIndex = null; // Reset editing index
        } else {
          // Save user data if not editing
          this.userList.push({ ...this.formData });
        }
        // Clear form fields after saving or updating
        this.formData = {
          name: '',
          email: '',
          phone: '',
          password: ''
        };
      },
      editUser(index) {
        // Set form data to the selected user's data for editing
        this.formData = { ...this.userList[index] };
        this.editingIndex = index; // Set editing index to the selected user's index
      },
      cancelUpdate() {
        // Reset form data and editing index
        this.formData = {
          name: '',
          email: '',
          phone: '',
          password: ''
        };
        this.editingIndex = null;
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-page {
    margin-top: 40px;
    padding: 20px;
  }
  
  .profile-form {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: calc(100% - 24px);
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .save-btn {
    background-color: #007bff;
    color: white;
  }
  
  .cancel-btn {
    background-color: #dc3545;
    color: white;
  }
  
  .user-list {
    border-top: 1px solid #ccc;
    padding-top: 20px;
  }
  
  .user-list h3 {
    margin-bottom: 10px;
  }
  
  .user-list ul {
    list-style: none;
    padding: 0;
  }
  
  .user-list .user-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  
  .user-list .user-details {
    flex-grow: 1;
  }
  
  .user-list .user-actions {
    flex-shrink: 0;
  }
  
  .user-list .edit-btn {
    background-color: #28a745;
    color: white;
  }
  </style>
    