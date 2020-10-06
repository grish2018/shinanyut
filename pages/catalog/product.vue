<template>
  <div class="wrapper">
    <a class="backLink" href="#" @click.prevent="goBack">
      <Icon class="header-menu__icon header-menu__icon--angle-left" name="gm-angle-right" /> <span>{{ this.$route.query.name }}</span>
    </a>
    <ul class="header-menu">
      <li class="header-menu__item" v-for="(category,index) in subCategory" :key="index">
        <a class="header-menu__link" href="#" @click.prevent="">
          {{ category.name }}
          <Icon class="header-menu__icon header-menu__icon--angle-right" name="gm-angle-right" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    subCategory() {
      const categories = this.$store.getters['categories/getCategories'];
      const items = categories.find((item) => `${item.slug}` === this.$route.query.category);
      const itemSub = items.submenu.find((item) => `${item.slug}` === this.$route.query.slug);
      return itemSub.submenu;
    },
  },
  async fetch({ store }) {
    await store.dispatch('categories/fetchCategories');
  },
  methods: {
    toSubCategory(slug) {
      const { category } = this.$route.query;
      this.$router.push({
        path: '/catalog/product',
        query: { category, slug },
      });
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
}

.wrapper ul {
  width: 100%;
}

.header-menu {
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

    &--angle-left {
      width: 6px;
      height: 20px;
      margin-right: 8px;
      color: var(--icon--angle-right-color);
      transform: rotate(180deg);

      @media (min-width: $screen-lg) {
        margin-left: 10px;
      }
    }
  }
}

.backLink {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
}
</style>
