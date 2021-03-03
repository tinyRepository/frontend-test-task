<template>
  <div class="search">
    <input type="text" placeholder="Поиск по названию картины" class="search__input" />
    <button-el>Найти</button-el>
  </div>
</template>

<style lang="scss">
.search {
  display: flex;
  max-width: 416px;
  height: 48px;
  width: 100%;

  &__input {
    outline: none;
    border-radius: 0;
    padding: 13px 16px;
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
