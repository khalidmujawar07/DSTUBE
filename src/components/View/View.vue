<template>
  <div class="page">
    <div class="container">
      <div class="video-card">
        <div class="video-thumbnail">
          <iframe :src="video.videoSrc" :alt="'Card Image ' + video.id" allowfullscreen class="youtube-video" />
        </div>

        <div class="video-details">
          <h3 class="video-title">{{ video.title }}</h3>
          <p class="video-views">Views: {{ video.views }}</p>
          <p class="video-tag" :class="[getStatusClass]">{{ videoTag }}</p>
          <div class="channel-info">
            <img :src="video.channelImg" :alt="'Channel Image ' + video.id" class="channel-image" />
            <div class="creator-details">
              <p class="creator-name">
                {{ video.creator.firstname }} {{ video.creator.lastname }}
              </p>
              <button @click="toggleSubscription" class="subscribe-button" :class="{ subscribed: isSubscribed }">
                {{ isSubscribed ? "Subscribed" : "Subscribe" }}
              </button>
            </div>
          </div>
          <div class="video-actions">
            <button @click="likeVideo" class="action-button like-button">
              <i class="fa-solid fa-thumbs-up"></i> {{ likes }}
            </button>
            <button @click="dislikeVideo" class="action-button dislike-button">
              <i class="fa-solid fa-thumbs-down"></i>
            </button>
            <button class="action-button share-button"><i class="fa-solid fa-share"></i></button>
          </div>
        </div>
        <input type="text" placeholder="Enter your comment" v-model="comment" class="comment-input" />
        <button @click="submitComment" class="submit-button">Submit</button>

        <div v-if="submittedComment" class="submitted-comment">
          <p>{{ submittedComment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import data from "../../assets/config/data.json";
import {useGlobalStore} from '../store.js';

const video = reactive({
  imgSrc: "",
  title: "",
  views: 0,
  channelImgSrc: "",
  creator: {
    firstname: "",
    lastname: "",
  },
});

const likes = ref(0);
const comment = ref("");
const submittedComment = ref("");

const likeVideo = () => {
  likes.value++;
};

const dislikeVideo = () => {
  likes.value--;
};

const isSubscribed = ref(false);

const toggleSubscription = () => {
  isSubscribed.value = !isSubscribed.value;
};

const videoTag = computed(() => {
  if (likes.value > 15) {
    return "TRENDING";
  } else if (likes.value > 10) {
    return "POPULAR";
  } else {
    return "";
  }
});



const submitComment = () => {
  if (comment.value.trim() !== "") {
    submittedComment.value = comment.value; // store  comment
    console.log("Comment submitted:", comment.value);
    comment.value = ""; // clear comment 
  } else {
    console.error("Comment cannot be empty");
  }
};

const route = useRoute();

onMounted(() => {
  const id = route.params.id;
  const fetchedVideo = data.find((item) => item.id === id);
  Object.assign(video, fetchedVideo);
  useGlobalStore().addToMyRecentlyViewed(fetchedVideo);

  console.log("Global Array :",useGlobalStore().recentlyView)
});
</script>

<style scoped>
.video-tag {
  font-size: 15px;
  color: red;
  margin-bottom: 10px;
  width: 80px;
  padding-left: 4px;
}

.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-grow: 1;  */
  margin-bottom: 80px;
}

.video-card {
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}



.video-thumbnail {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 8px;
}

.youtube-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}


.thumbnail-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.video-details {
  padding: 20px 0;
}

.video-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.video-actions {
  margin-bottom: 10px;
  margin-top: 15px;
}

.action-button {
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.like-button {
  background-color: #4caf50;
  color: white;
}

.dislike-button {
  background-color: #f44336;
  color: white;
}

.share-button {
  background-color: #008cba;
  color: white;
}

.channel-info {
  display: flex;
  align-items: center;
}

.creator-details {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.creator-name {
  font-size: 18px;
 font-weight:bold;
  padding: 4px;
}

.subscribe-button {
  padding: 8px 16px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  transition: background-color 0.3s ease;
}

.subscribe-button.subscribe {
  background-color: gray;
}

.subscribe-button:hover {
  background-color: #d32f2f;
}

.comment-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.submitted-comment {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.channel-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
