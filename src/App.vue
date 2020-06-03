<template>
  <div id="app">
    <transition name="activity">
      <welcomePage v-if="iswelcome" />
    </transition>
    <showNum :text="text" v-if="iswelcome" />
    <router-view />
  </div>
</template>
<script>
import welcomePage from "@/views/welcomePage.vue"
import showNum from "@/views/showNum.vue"
export default {
  components: {
    welcomePage,
    showNum
  },
  data() {
    return {
      iswelcome: true,
      text: null
    }
  },
  mounted() {
    let num = 5
    this.InterVal = setInterval(() => {
      console.log(12)
      if (num === -1) {
        this.iswelcome = false
        clearInterval(this.InterVal)
      }
      this.text = num
      num--
    }, 1000)
  },
  destroyed() {
    this.InterVal = null
  }
}
</script>
<style lang="scss" scoped>
.activity-leave-to {
  //过渡的进入开始的状态，离开过渡的结束状态
  opacity: 0;
}
.activity-leave-active {
  //过渡进入生效时的状态，过渡的离开生效时的状态
  transition: all 0.5s;
}
.activity-leave {
  //过渡的进入结束状态，过渡的离开开始状态
  opacity: 1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
