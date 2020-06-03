<template>
  <div class="showNum">
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss">
.welcomePage {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: row;
}
</style>
