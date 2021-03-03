<template>
  <ul class="menu-list">
    <li class="menu-list__list-item" v-for="(item, index) in menuItems" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ['Каталог', 'Доставка', 'Оплата', 'Контакты', 'О галерее'],
    };
  },
};
</script>

<style lang="scss">
.menu-list {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: 48px;

  &__list-item {
    @include font(14px, $gray-color2);
    line-height: 21px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 48px;
    }
  }
}
</style>
