<template>
  <div class="container">
    <nav class="main-nav">
      <a class="logo-wrapper" href="#">
        <p class="logo-name">Place</p>
        <p class="logo-location">Russia</p>
      </a>
    </nav>
    <UserPanel />
    <ul class="cards-wrapper">
      <Card
        v-for="card in cards.slice().reverse()"
        :key="card.id"
        :topic="card.topic"
        :imageURL="card.imageURL"
        :likes="card.likes"
        :isLiked="card.isLiked"
      />
    </ul>
    <div class="copyright">© 2020 Place</div>
  </div>
</template>

<script>
import UserPanel from "./components/UserPanel";
import Card from "./components/Card";

export default {
  name: "App",
  components: { UserPanel, Card },

  data() {
    return {
      cards: [
        {
          id: 1,
          imageURL:
            "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
          topic: "hello world!",
          likes: 1,
          isLiked: false,
        },
        {
          id: 2,
          imageURL: "https://www.meissl.com/media/images/8f24db1f/schweiz.jpg",
          topic: "nature",
          likes: 0,
          isLiked: false,
        },
        {
          id: 3,
          imageURL:
            "https://cnet2.cbsistatic.com/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg",
          topic: "awesome",
          likes: 3,
          isLiked: true,
        },
        {
          id: 4,
          imageURL:
            "https://eskipaper.com/images/awesome-nature-wallpaper-1.jpg",
          topic: "awesome",
          likes: 15,
          isLiked: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  @apply bg-black text-white;
  font-family: "Inter", sans-serif;
  button {
    @apply outline-none;
  }
}

.container {
  @apply py-6 mx-auto;
}

.main-nav {
  @apply pb-8 mb-7 border-b border-white border-opacity-50;
}

.logo {
  &-wrapper {
    @apply block relative w-28 h-10 cursor-pointer;
  }
  &-name {
    @apply text-3xl absolute bottom-0 left-0;
  }
  &-location {
    @apply text-xs absolute top-0 right-0;
  }
}

.cards-wrapper {
  @apply grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10;
}

.copyright {
  @apply text-base text-gray-400 cursor-auto;
}
</style>