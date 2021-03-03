<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo" />
      <menu-list />
      <search-el class="header__search" />
    </div>
  </header>
</template>

<script>
import MenuList from './MenuList';
import SearchEl from './SearchEl';

export default {
  components: {
    MenuList,
    SearchEl,
  },
};
</script>

<style lang="scss">
.header {
  user-select: none;
  border-bottom: 1px solid $gray-color1;

  &__content {
    height: $header-height;
    display: flex;
    align-items: center;
    margin: auto;
    max-width: $content-width;
    width: 100%;
  }

  &__logo {
    background: url('~@/assets/images/logo.jpg') no-repeat;
    background-size: cover;
    width: 48px;
    height: 48px;
  }

  &__search {
    margin-left: auto;
  }
}
</style>
