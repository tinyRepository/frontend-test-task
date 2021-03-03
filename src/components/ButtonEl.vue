<template>
  <button class="button" :disabled="disabled" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @include removeBtnDefaults;
  min-width: 118px;
  height: 48px;
  background: $brown-color1;
  text-align: center;
  color: $white-color;
  transition: background $transition;

  &[disabled] {
    background: $brown-color3;
  }

  &:hover {
    background: $brown-color2;
  }
}
</style>
