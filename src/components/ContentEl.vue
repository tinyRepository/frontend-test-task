<template>
  <main class="content">
    <h1>Картины эпохи Возрождения</h1>
    <div class="picture-list">
      <picture-card
        v-for="card in cards"
        :key="card.id"
        :content="card"
        class="picture-card"
        :inCart="checkPictureInCart(card.id)"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import PictureCard from './PictureCard';

export default {
  computed: {
    ...mapGetters(['cards', 'checkPictureInCart']),
  },
  components: {
    PictureCard,
  },
};
</script>

<style lang="scss">
.content {
  margin: 30px auto 45px;
  width: 100%;
  max-width: $content-width;
}
.picture-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 38px;
}

.picture-card {
  border: 1px solid $gray-color1;
  margin-bottom: 30px;
}
</style>
