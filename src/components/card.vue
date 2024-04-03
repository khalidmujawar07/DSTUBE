<template>
    <div class="card">
      <img src="https://wallpapers.com/images/featured/tom-and-jerry-2f5fbl2k3wwi31aq.jpg" alt="Card Image" class="card-image">
      <div class="card-details">
        <h3 class="card-title">Tom & Jerry | Getting Ready for Picture Day | WB Kids - YouTube</h3>
        <p class="card-views">Views: 12,567,980</p>
        <p class="card-disc">The series features comic fights between an iconic set of adversaries, a house cat (Tom) and a house mouse (Jerry).</p>
      </div>
    </div>
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhbjM7QzPr-5349n9MoWA6z_KRIH06mG-AexqRW_Z8Q&s" alt="Card Image" class="card-image">
      <div class="card-details">
        <h3 class="card-title">Jerry in Full Force | Classic Cartoon Compilation</h3>
        <p class="card-views">Views: 35,783,999</p>
        <p class="card-disc">It's almost time for the all important Picture Day once more, and Nibble wants to make sure he looks the best for his family picture!</p>
      </div>
    </div>
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNF18euOBNyt66-d8_zlBDEEUq9T7CXWPmg&s" alt="Card Image" class="card-image">
      <div class="card-details">
        <h3 class="card-title">Tom & Jerry | Happy Easter! | Classic Cartoon Compilation</h3>
        <p class="card-views">Views: 15,823,988</p>
        <p class="card-disc">Happy Easter! Let's get on with some Easter celebrations with some fun from Tom, Jerry, and Little Quacker! WB Kids is the home of all of ...</p>
      </div>
    </div>
    
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .card {
    display: flex;
    margin: 20px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  
  .card-image {
    width: 400px;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover{
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
  .card:hover .card-image{
    transform: scale(1.05);
  }
  .card-details {
    flex: 1;
    padding: 20px;
  }
  
  .card-title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-views {
    font-size: 14px;
    color:black;
    margin-bottom: 5px;
  }
  
  </style>
  