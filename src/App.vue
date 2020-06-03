<template>
  <div id="app">
    <transition name="activity">
      <welcomePage v-if="iswelcome" />
    </transition>
    <showNum :text="text" />
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
      num--
      this.text = num
      console.log(num)
      if (num === 0) {
        this.iswelcome = false
        clearInterval(this.InterVal)
      }
    }, 1000)
  }
}
</script>
<style lang="scss">
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
