<template>
  <li class="card">
    <div
      class="card__image-frame"
      :style="{ backgroundImage: `url(${imageURL})` }"
    ></div>
    <div class="card__bottom-side">
      <p class="card__topic">
        {{ topic }}
      </p>

      <div class="card__likes-wrapper">
        <button
          :class="[
            isLiked ? 'card__like--liked' : 'card__like--unliked',
            'card__like',
          ]"
          type="button"
        ></button>
        <p class="card__likes">{{ likes }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Card",
  props: ["topic", "imageURL", "likes", "isLiked"],

  data() {
    return {};
  },

  methods: {
    // toogleLike() {
    //   if (this.isLiked) this.likes = this.likes - 1;
    //   else this.likes = this.likes + 1;
    //   this.isLiked = !this.isLiked;
    //   return {
    //     likes: this.likes,
    //     isLiked: this.isLiked,
    //   };
    // },
  },
};
</script>

<style lang="scss">
.card {
  @apply w-72 mb-10 rounded-lg;

  &__image-frame {
    @apply w-full h-80 cursor-pointer bg-center rounded-t-xl;
  }

  &__bottom-side {
    @apply bg-white flex flex-row px-4 h-20 rounded-b-xl;
    justify-content: space-between;
    align-items: center;
  }

  &__topic {
    @apply text-black font-black text-2xl;
  }

  &__like {
    @apply bg-no-repeat bg-center w-6 h-6 hover:opacity-70;
    &--liked {
      background-image: url("https://code.s3.yandex.net/web-code/dom/heart-filled.svg");
    }
    &--unliked {
      background-image: url("https://nail-ya.github.io/mesto/49570bcb1d637fdb38e5d51e248ddff6.svg");
    }
  }

  &__likes {
    @apply text-black text-center;
  }

  &__likes-wrapper {
    @apply w-6;
  }
}
</style>