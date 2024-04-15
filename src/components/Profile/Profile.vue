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
import { ref } from 'vue';

export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
      phone: '',
      password: ''
    });

    const userList = ref([]);
    const editingIndex = ref(null);

    const saveOrUpdateData = () => {
      if (editingIndex.value !== null) {
        userList.value[editingIndex.value] = { ...formData.value };
        editingIndex.value = null;
      } else {
        userList.value.push({ ...formData.value });
      }
      resetFormData();
    };

    const editUser = (index) => {
      formData.value = { ...userList.value[index] };
      editingIndex.value = index;
    };

    const cancelUpdate = () => {
      resetFormData();
      editingIndex.value = null;
    };

    const resetFormData = () => {
      formData.value = {
        name: '',
        email: '',
        phone: '',
        password: ''
      };
    };

    return {
      formData,
      userList,
      editingIndex,
      saveOrUpdateData,
      editUser,
      cancelUpdate
    };
  }
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
  background-color: #fff;
  padding: 20px;
  /* border-radius: 8px; */
  margin-bottom: 50px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  /* border-radius: 4px; */
  box-sizing: border-box;

  color: black;
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

.save-btn {
  background-color: #007bff;
  color: #fff;
}

.cancel-btn {
  background-color: #dc3545;
  color: #fff;
  margin-right: 10px;
}

/* User list styles */
.user-list {
  background-color: #fff;
  padding: 40px;
  color: black;
  
  
}

.user-list h3 {
  margin-top: 5px;
  color: #333;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
color: black;
}

.user-details {
  flex-grow: 1;
  color: black;
}

.user-actions {
  flex-shrink: 0;
}

.edit-btn {
  background-color: #28a745;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
