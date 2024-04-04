<template>
  <router-link to="/view" class="container">
    <div class="small-card" v-for="index in videoList" :key="index.id">
      <img :src="index.imgSrc" :alt="'Card Image ' + index" class="card-image">
      <div class="card-content">
        <h3 class="card-title">{{ index.title }}</h3>
      <p class="card-views">{{ index.views }}</p>
      </div>
      <input type="text" placeholder="Enter your comment" v-model="comment" class="comment-input">
      <button @click="addComment" class="add-comment-btn">Add Comment</button>
    </div>
  </router-link>
</template>

<script setup>

import { ref } from 'vue';
import Data from '/work_dsi/Vue Training/dstube/src/assets/config/data.json';

const videoList = ref(Data)
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.small-card {
  border: 2px solid #ccc;
  /* border-radius: 10px 10px 0 0; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  padding: 20px;
  max-width: 700px; 
  margin-top: 20px;
}

.card-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  /* border-radius: 10px 10px 0 0; */
}

.card-content {
  padding: 20px 0;
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
}

.comment-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px; 
}

.add-comment-btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #ff0000;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

</style>
