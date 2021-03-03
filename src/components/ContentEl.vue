<template>
  <main class="content">
    <h1>Картины эпохи Возрождения</h1>
    <div class="picture-list">
      <picture-card
        v-for="card in cards"
        :key="card.id"
        :content="card"
        class="picture-card"
        @sendRequest="sendRequest"
      />
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import PictureCard from './PictureCard';

export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          cost: 1000000,
          oldCost: 2000000,
          title: '«Рождение Венеры» Сандро Боттичелли',
          image: 'card-1.jpg',
        },
        {
          id: 2,
          cost: 3000000,
          title: '«Тайная вечеря» Леонардо да Винчи',
          image: 'card-2.jpg',
        },
        {
          id: 3,
          cost: 5000000,
          oldCost: 6000000,
          title: '«Сотворение Адама» Микеланджело',
          image: 'card-3.jpg',
        },
        {
          id: 4,
          cost: 'sold',
          title: '«Урок анатомии» Рембрандт',
          image: 'card-4.jpg',
        },
      ],
    };
  },
  components: {
    PictureCard,
  },
  methods: {
    sendRequest(id) {
      const testUrl = 'https://jsonplaceholder.typicode.com/posts';
      axios(`${testUrl}/${id}`);
    },
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
  justify-content: space-between;
  margin-top: 38px;
}

.picture-card {
  border: 1px solid $gray-color1;
}
</style>
