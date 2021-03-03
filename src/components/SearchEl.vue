<template>
  <form class="search" novalidate @submit.stop.prevent>
    <input type="text" placeholder="Поиск по названию картины" class="search__input" />
    <button-el @click="$wip" class="search__button">Найти</button-el>
  </form>
</template>

<style lang="scss">
.search {
  display: flex;
  max-width: 416px;
  height: 48px;
  width: 100%;

  &__button {
    width: 122px;
  }

  &__input {
    outline: none;
    border-radius: 0;
    padding: 15px;
    border: 1px solid $gray-color1;
    border-right: 0;
    background: transparent;
    height: inherit;
    width: 294px;
    @include font(14px, $gray-color2);

    &::placeholder {
      color: $gray-color3;
    }
  }
}
</style>
