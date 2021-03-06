<template>
  <button
    class="button"
    :disabled="disabled"
    v-on="$listeners"
    :class="{ 'button_in-cart': inCart, button_loading: loading }"
  >
    <div v-if="loading" class="button__loader" />
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    inCart: Boolean,
    disabled: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.button {
  @include removeBtnDefaults;
  @include font(14px, $white-color, bold);
  min-width: 118px;
  height: 48px;
  background: $brown-color1;
  text-align: center;
  transition: background $transition;

  &__loader {
    margin: auto;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: relative;

    border-top: 3px solid $white-color;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;

    animation: spin $transition * 2 ease-out infinite;
  }

  &__check-icon {
    margin-right: 4px;
    position: relative;
    left: 1px;
    top: 1px;
  }

  &_in-cart {
    background: $brown-color4;
  }

  &_loading {
    pointer-events: none;
  }

  &[disabled] {
    background: $brown-color3;
  }

  &:hover {
    background: $brown-color2;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
