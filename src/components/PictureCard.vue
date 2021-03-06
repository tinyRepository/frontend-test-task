<template>
  <div class="card" :class="{ card_sold: pictureIsSold }">
    <img :src="require(`../assets/images/cards/${content.image}`)" class="card__image" />
    <div class="card__title">{{ content.title }}</div>
    <div class="card__content">
      <div>
        <div class="card__old-cost">{{ content.oldCost | formatCost }}</div>
        <div class="card__cost">{{ content.cost | formatCost }}</div>
      </div>
      <div v-if="pictureIsSold" class="card__sold-text">Продана на аукционе</div>
      <button-el
        v-else
        :loading="loading"
        :inCart="inCart"
        @click="addToCart(content.id)"
        class="card__button"
      >
        <template v-if="inCart">
          <check-icon class="button__check-icon" />
          В корзине
        </template>

        <template v-else>
          Купить
        </template>
      </button-el>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ButtonEl from './ButtonEl.vue';
import CheckIcon from '../components/Icons/CheckIcon';

export default {
  components: { ButtonEl, CheckIcon },
  props: {
    content: {
      type: Object,
      require: true,
    },
    inCart: Boolean,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    pictureIsSold() {
      return this.content.cost === 'sold';
    },
  },
  methods: {
    ...mapActions(['sendRequest']),
    addToCart(id) {
      this.loading = true;
      this.sendRequest(id).finally(() => {
        this.loading = false;
      });
    },
  },
  filters: {
    formatCost(cost) {
      const validCost = cost && cost !== 'sold';
      return validCost ? `${cost.toLocaleString('Ru-ru')} $` : '';
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 280px;
  user-select: none;
  padding-bottom: 18px;

  &_sold {
    opacity: 0.5;
  }

  &__title {
    padding: 17px 23px;
    @include font(18px, $gray-color2);
    line-height: 27px;
  }

  &__content {
    display: flex;
    align-items: center;
    padding: 5px 23px;
  }

  &__old-cost {
    @include font(14px, $gray-color6, 300);
    text-decoration-line: line-through;
    line-height: 20px;
  }

  &__cost {
    @include font(16px, $gray-color2, bold);
    line-height: 27px;
  }

  &__image {
    width: 278px;
    height: 159px;
    object-fit: cover;
    border-bottom: 1px solid $gray-color1;
  }

  &__button {
    margin-left: auto;
  }

  &__sold-text {
    @include font(16px, $gray-color2, bold);
    height: 48px;
    display: flex;
    align-items: center;
  }
}
</style>
