<template>
  <div id="app">
    <div class="page">
      <header-el class="page__header" />
      <content-el class="page__content" />
      <footer-el class="page__footer" />
    </div>
  </div>
</template>

<script>
import ContentEl from './components/ContentEl';
import HeaderEl from './components/HeaderEl';
import FooterEl from './components/FooterEl';

export default {
  name: 'App',
  components: {
    ContentEl,
    HeaderEl,
    FooterEl,
  },
};
</script>

<style lang="scss">
.page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__header,
  &__footer {
    flex-shrink: 0;
  }

  &__content {
    flex-grow: 1;
  }
}
</style>
