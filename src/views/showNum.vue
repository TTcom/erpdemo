<template>
  <div class="showNum">
    <div class="number">
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

<style lang="scss" scoped>
.showNum {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .number {
    font-size: 120px;
    color: white;
    font-weight: bold;
    z-index: 9999;
  }
}
</style>
