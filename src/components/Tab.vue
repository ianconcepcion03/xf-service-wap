<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',

  props: {
    name: { required: true },
    selected: { default: false }
  },

  data() {
    return {
      isActive: false
    }
  },

  created() {
    this.isActive = this.selected
  }
}
</script>

<style></style>
