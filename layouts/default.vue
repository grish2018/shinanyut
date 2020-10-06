<template>
  <div class="layout" id="layout-default" itemscope itemtype="http://schema.org/WebPage">
    <template v-if="isMenuOpen">
      <AppHeader class="layout__header" />
      <main class="layout__content" slot="content">
        <div>
          <ul class="layout-menu">
            <li class="layout-menu__item">
              <button class="layout-menu__link">
                Прайс-лист
              </button>
            </li>
            <li class="layout-menu__item">
              <button class="layout-menu__link">
                Отслеживание заказа
              </button>
            </li>
            <li class="layout-menu__item">
              <button class="layout-menu__link">
                Каталог товаров
              </button>
            </li>
            <li class="layout-menu__item">
              <nuxt-link class="layout-menu__link" to="/info/delivery/">
                Доставка
                <Icon class="layout-menu__icon layout-menu__icon--angle-right" name="gm-angle-right" />
              </nuxt-link>
            </li>
            <li class="layout-menu__item">
              <nuxt-link class="layout-menu__link" to="/about/">
                О компании
                <Icon class="layout-menu__icon layout-menu__icon--angle-right" name="gm-angle-right" />
              </nuxt-link>
            </li>
            <li class="layout-menu__item">
              <nuxt-link class="layout-menu__link" to="/info/contacts/">
                Контакты
                <Icon class="layout-menu__icon layout-menu__icon--angle-right" name="gm-angle-right" />
              </nuxt-link>
            </li>
            <li class="layout-menu__item">
              <ExternalLink class="layout-menu__link" href="https://gdematerial.ru/blog/" target="_blank">
                Блог
              </ExternalLink>
            </li>
            <li class="layout-menu__item">
              <ExternalLink class="layout-menu__link" href="https://partner.gdml.ru" target="_blank">
                Поставщикам
              </ExternalLink>
            </li>
          </ul>
        </div>
      </main>
    </template>
    <template v-else-if="isActive">
      <div class="layout" id="layout-default" itemscope itemtype="http://schema.org/WebPage">
        <AppHeader class="layout__header" />
        <main class="layout__content" slot="content">
          <nuxt />
        </main>
      </div>
    </template>
    <template v-else>
      <div class="layout" id="layout-default" itemscope itemtype="http://schema.org/WebPage">
        <AppHeader class="layout__header" />
        <main class="layout__content" slot="content">
          <nuxt />
        </main>
        <AppFooter class="layout__footer" />
      </div>
    </template>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader/AppHeader.vue';
import AppFooter from '~/components/AppFooter/AppFooter.vue';
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    ExternalLink,
  },
  computed: {
    isMenuOpen() {
      return this.$store.getters.getSowMenu;
    },
    isActive() {
      return this.$store.getters.getShowCatalog;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &__content {
    flex-grow: 1;
    background: white;
  }
}

.layout-menu {
  --link-background-color: hsl(0, 0%, 100%);
  --link-border-radius: 0;
  --link-padding: 6px 8px;
  --link-color: hsl(198, 23%, 19%);
  --link-outline-color: transparent;
  --icon--angle-right-color: hsl(199, 22%, 77%);

  padding: 0;
  overflow-y: scroll;
  list-style: none;
  background-color: hsl(0, 0%, 100%);

  &__item {
    @media (min-width: $screen-lg) {
      --link-padding: 7px 20px;
    }

    &:hover,
    &--active {
      --link-background-color: hsl(230, 78%, 51%);
      --link-color: hsl(0, 0%, 100%);
      --link-outline-color: hsl(230, 78%, 51%);
      --icon--angle-right-color: hsl(0, 0%, 100%);
    }

    &:first-child {
      margin-top: 10px;

      @media (min-width: $screen-lg) {
        --link-padding: 16px 20px 10px 20px;
      }
    }

    &:last-child {
      @media (min-width: $screen-lg) {
        --link-padding: 10px 20px 16px 20px;
      }
    }
  }

  &__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--link-padding);
    font-family: $font-family-montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    color: var(--link-color);
    cursor: pointer;
    background-color: var(--link-background-color);
    border: 1px solid transparent;
    border-radius: var(--link-border-radius);
    outline: none;
    -webkit-tap-highlight-color: transparent;

    @media (min-width: $screen-lg) {
      outline: 3px solid var(--link-outline-color);
    }
  }

  &__icon {
    flex-shrink: 0;

    &--angle-right {
      width: 6px;
      height: 20px;
      margin-left: 8px;
      color: var(--icon--angle-right-color);

      @media (min-width: $screen-lg) {
        margin-left: 10px;
      }
    }
  }
}
</style>
