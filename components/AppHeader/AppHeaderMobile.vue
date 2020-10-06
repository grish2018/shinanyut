<template>
  <div class="header">
    <div class="header__container">
      <div class="header__row">
        <button class="header__btn header__btn--menu" aria-label="Меню" @click="openMenu">
          <Icon v-if="isMenuOpen" class="header__icon header__icon--burger" name="nav-close" />
          <Icon v-else class="header__icon header__icon--burger" name="nav-burger" />
        </button>
        <AppHeaderLogo class="header__logo" />
        <AppHeaderUserMenu class="header__user-menu" />
      </div>
      <div class="header__row">
        <AppHeaderCatalogBtn class="header__btn header__btn--catalog" />
        <AppSearch class="header__search" />
      </div>
    </div>
    <div class="header__wrapper header__wrapper--menu">
    </div>
  </div>
</template>

<script>
import AppHeaderLogo from '~/components/AppHeader/AppHeaderLogo.vue';
import AppHeaderUserMenu from '~/components/AppHeader/mobile/AppHeaderUserMenu.vue';
import AppHeaderCatalogBtn from '~/components/AppHeader/buttons/AppHeaderCatalogBtn.vue';
import AppSearch from '~/components/AppSearch/AppSearch.vue';

export default {
  components: {
    AppHeaderLogo,
    AppHeaderUserMenu,
    AppHeaderCatalogBtn,
    AppSearch,
  },
  computed: {
    isMenuOpen() {
      return this.$store.getters.getSowMenu;
    },
    isActive() {
      return this.$store.getters.getShowCtalog;
    },
  },
  methods: {
    openMenu() {
      if (!this.isMenuOpen && this.isActive) {
        this.$store.commit('HIDE_CATALOG');
        this.$store.commit('SHOW_MENU');
      } else if (!this.isMenuOpen) {
        this.$store.commit('SHOW_MENU');
      } else {
        this.$store.commit('HIDE_MENU');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__container {
    max-width: $container-xl;
    padding: 10px 8px 10px 8px;
    margin: 0 auto;
  }

  &__row {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__user-menu {
    margin-left: auto;
  }

  &__search {
    flex-grow: 1;
  }

  &__btn {
    flex-shrink: 0;

    &--menu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin-right: 18px;
      color: hsl(0, 0%, 0%);
      cursor: pointer;
      background-color: transparent;
      border: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }

    &--catalog {
      margin-right: 5px;
    }
  }

  &__icon {
    &--burger {
      width: 20px;
      height: 14px;
    }
  }
}
</style>
