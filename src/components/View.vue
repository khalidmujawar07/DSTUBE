<template>
  <div class="container">
    <div class="small-card">
      <img src="https://wallpapers.com/images/featured/tom-and-jerry-2f5fbl2k3wwi31aq.jpg" alt="Card Image" class="card-image">
      <div class="card-content">
        <h3>Tom & Jerry | Getting Ready for Picture Day | WB Kids - YouTube</h3>
        <p>Description: The series features comic fights between an iconic set of adversaries, a house cat (Tom) and a house mouse (Jerry).</p>
      </div>
      <input type="text" placeholder="Enter your comment" v-model="comment" class="comment-input">
      <button @click="addComment" class="add-comment-btn">Add Comment</button>
    </div>
  </div>
</template>

<script setup>
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
