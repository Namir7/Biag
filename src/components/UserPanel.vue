<template>
  <div class="user-panel">
    <div class="user-panel__avatar-wrapper">
      <button class="user-panel__change-avatar" type="button" />
      <img
        class="user-panel__avatar"
        v-bind:src="user.avatarURL"
        alt="user's avatar"
      />
    </div>

    <div class="user-panel__info">
      <p class="user-panel__name">{{ user.name }}</p>
      <p class="user-panel__activity">{{ user.activity }}</p>
      <button class="user-panel__change-info" />
    </div>

    <button class="user-panel__add-card" v-on:click="addCard" />
  </div>
</template>

<script>
import { createCard } from "./../firebase";

export default {
  name: "UserPanel",
  data() {
    return {
      user: {
        name: "Namirius",
        activity: "study WEB",
        avatarURL:
          "https://pbs.twimg.com/profile_images/978338492509052935/CUXtDl-5_400x400.jpg",
      },
    };
  },
  methods: {
    changeUserName(newName) {
      this.name = newName;
      return newName;
    },
    changeUserActivity(newActivity) {
      this.name = newActivity;
      return newActivity;
    },
    changeUserAvatar(newAvatarURL) {
      this.avatarURL = newAvatarURL;
      return newAvatarURL;
    },
    addCard() {
      createCard({
        imageURL:
          "https://pbs.twimg.com/profile_images/978338492509052935/CUXtDl-5_400x400.jpg",
        topic: "DB action",
      });
    },
  },
};
</script>

<style lang="scss">
.user-panel {
  @apply px-24 mb-12 flex flex-row;

  &__avatar-wrapper {
    @apply w-32 h-32 mr-7 relative;
  }

  &__avatar {
    @apply w-full h-full rounded-full absolute;
  }

  &__change-avatar {
    @apply w-full h-full rounded-full absolute z-10 bg-no-repeat bg-center hover:bg-black hover:bg-opacity-50 transition duration-500;
    background-size: 25%;
    &:hover {
      background-image: url("https://nail-ya.github.io/mesto/8667ac4a523e8fc42e59641845fc8448.svg");
    }
  }

  &__info {
    @apply pr-12 relative mr-auto;
  }

  &__name {
    @apply text-4xl mb-4;
  }

  &__activity {
    @apply text-lg;
  }

  &__change-info {
    @apply w-6 h-6 border border-white absolute top-0 right-0 bg-no-repeat bg-center hover:opacity-80;
    background-image: url("https://nail-ya.github.io/mesto/8667ac4a523e8fc42e59641845fc8448.svg");
  }

  &__add-card {
    @apply w-48 h-14 my-auto border-2 border-white bg-no-repeat bg-center hover:opacity-80;
    background-image: url("https://nail-ya.github.io/mesto/d86bb2edc2f6eadb96b785d29c82b56e.svg");
  }
}
</style>