<template>
  <div class="top-list-card">
    <div class="top-list-title pa-3">
      <slot name="title" />
    </div>
    <div class="no-bg-color pl-5 pr-5 pb-5 pt-3">
      <div v-for="item in items" :key="item.id">
        <div class="inline-picture-text pb-3 pt-3">
          <div class="picture-area">
            <slot name="image" :item="item" />
          </div>
          <div class="text-area ml-3">
            <slot name="text" :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="top-list-footer pt-1 pb-1">
      <span class="clickable">
        {{ $t.seeMoreText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopElementsCard',
  props: {
    items: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.text-area {
  text-align: left;
}
</style>
