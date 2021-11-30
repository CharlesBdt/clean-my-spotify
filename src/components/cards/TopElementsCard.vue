<template>
  <div class="top-list-card">
    <div v-for="item in items" :key="item.id">
      <div class="inline-picture-text">
        <div class="picture-area">
          <slot name="image" :item="item" />
        </div>
        <div class="text-area">
          <slot name="text" :item="item" />
        </div>
      </div>
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
