<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="round" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      console.log(this.$store.state.profile);
      return this.$store.state.profile;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}

.round {
  border-radius: 50%;
}
</style>
