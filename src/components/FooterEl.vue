<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__logo" />
      <menu-list />
      <div class="footer__contacts">
        <div class="footer__phone">
          <phone-icon class="footer__icon" />
          <a href="tel:+74955555555" class="footer__phone">+7 (495) 555-55-55</a>
        </div>
        <div class="footer__address">
          <location-icon class="footer__icon" />
          <span>г. Москва, ул. Расплетина, 24</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MenuList from './MenuList';
import PhoneIcon from '../components/Icons/PhoneIcon';
import LocationIcon from '../components/Icons/LocationIcon';

export default {
  components: {
    MenuList,
    PhoneIcon,
    LocationIcon,
  },
};
</script>

<style lang="scss">
.footer {
  user-select: none;
  background-color: $gray-color5;
  height: $header-height;

  &__content {
    height: inherit;
    display: flex;
    align-items: center;
    margin: auto;
    max-width: $content-width;
    width: 100%;
  }

  &__logo {
    background: url('~@/assets/images/logo_dark.jpg') no-repeat;
    background-size: cover;
    width: 48px;
    height: 48px;
  }

  &__contacts {
    display: flex;
    margin-left: auto;
    @include font(14px, $gray-color4);
  }

  &__phone {
    @include font(14px, $gray-color4);
    text-decoration: none;
  }

  &__address {
    margin-left: 48px;
  }

  &__icon {
    margin-right: 8px;
  }

  &__phone,
  &__address {
    display: flex;
  }
}
</style>
