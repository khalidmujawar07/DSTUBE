<template>
    <header class="header">
      <div class="leftSide">
        <span class="logo">DS Tube</span>
      </div>
      <div class="center">
        <input v-model="search" type="text" placeholder="Search">
        <button @click="searchbtn">Search</button>
      </div>
      <div class="right-side">
        <button @click="goToHome">Home</button>
        <button @click="goToProfile">Profile</button>
      </div>
    </header>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    background-color: black;
    margin-top: 1px;
    white-space: nowrap; 
  }
  
  .leftSide, .center, .right-side {
    display: inline-flex; 
  }
  
  .logo {
    display: flex;
    font-size: 16px;
    padding: 10px 16px;
    font-weight: bold;
    color: white;
    background-color: red;
    border-radius: 4px;
  }
  
  .center input[type="text"] {
    margin-right: 5px; 
  }
  
  button {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    padding: 10px 16px;
    font-size: 16px;
    font-weight: bold;
    border: solid 3px rgb(255, 255, 255);
    border-radius: 6px;
    background-color:black;
    color:white;
    cursor: pointer;
    margin-left: 10px;
  }
  
  input[type="text"] {
    width: 500px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: black;
    color: white;
  }
  </style>














