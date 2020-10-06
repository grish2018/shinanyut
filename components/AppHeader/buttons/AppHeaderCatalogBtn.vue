<template>
  <a class="header-catalog-btn button button--secondary" href="#" @click.prevent="toggleCatalog">
    <Icon class="header-catalog-btn__icon header-catalog-btn__icon--catalog" name="gm-catalog" />
    <span class="header-catalog-btn__label">Каталог</span>
    <Icon :class="isActive ? 'header-catalog-btn__icon header-catalog-btn__icon--angle-down' : 'header-catalog-btn__icon header-catalog-btn__icon--angle-up'" name="gm-angle-top" />
  </a>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$store.getters.getShowCatalog;
    },
    isMenuOpen() {
      return this.$store.getters.getSowMenu;
    },
  },
  methods: {
    toggleCatalog() {
      if (this.isMenuOpen && !this.isActive) {
        this.$store.commit('HIDE_MENU');
        this.$store.commit('SHOW_CATALOG');
        this.$router.push('/catalog');
      } else if (this.isMenuOpen && this.isActive) {
        this.$store.commit('HIDE_MENU');
        this.$store.commit('SHOW_CATALOG');
        this.$router.push('/catalog');
      } else if (!this.isActive) {
        this.$store.commit('SHOW_CATALOG');
        this.$router.push('/catalog');
      } else {
        this.$store.commit('HIDE_CATALOG');
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-catalog-btn {
  --icon--angle-top-rotate: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  font-family: $font-family-montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(230, 78%, 51%);
  border-color: hsl(230, 78%, 51%);
  -webkit-tap-highlight-color: transparent;

  @media (min-width: $screen-lg) {
    padding: 11px 12px;
    font-size: 15px;
  }

  &__label {
    margin: 0 8px 0 6px;

    @media (min-width: $screen-lg) {
      margin: 0 12px 0 14px;
    }
  }

  &__icon {
    &--catalog {
      width: 14px;
      height: 14px;

      @media (min-width: $screen-lg) {
        width: 18px;
        height: 18px;
      }
    }

    &--angle-up {
      width: 10px;
      height: 10px;
    }

    &--angle-down {
      width: 10px;
      height: 10px;
      transform: rotate(-180deg);
    }
  }
}
</style>
