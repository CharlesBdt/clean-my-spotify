<template>
  <div v-if="isDisplayed" class="modal-backdrop">
    <div class="modal grid-listing">
      <div class="modal-header listing-header-area pa-3 ma-0">
        <slot name="title">
        </slot>
      </div>

      <div class="listing-content-area modal-content pa-3">
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

      <div class="listing-footer-area modal-footer right-position pa-3 pr-5">
        <slot name="button">
          <button
            class="btn btn-round btn-sm btn-ghost-red btn-bg-white"
            @click="closeModal"
          >
            {{ $t.closeBtn }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemsListing',
  props: {
    isDisplayed: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => {}
    }
  },
  emits: ['closeModal'],
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  }
};
</script>
