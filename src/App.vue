<template>
  <div id="app">
    <transition :name="transitionDirection">
      <router-view :key="$route.name"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  created() {
    if (document.getElementById("Loading")) {
      document.getElementById("Loading").remove();
    }
  },
  name: "App",
  data() {
    return {
      transitionDirection: "",
    };
  },
  methods: {},
  watch: {
    $route: {
      handler(to, from) {
        if (to.meta.index != undefined && to.meta.index > from.meta.index) {
          this.transitionDirection = "to-left";
        } else {
          this.transitionDirection = "to-right";
        }
      },
    },
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden; /** 为了避免动画过程中出现水平方向的滚动条 */
}
.to-left-enter-active,
.to-left-leave-active {
  transition: all linear 1.3s;
}

.to-left-enter,
.to-left-leave {
  transform: translate3d(-100%, 0, 0);
}
.to-right-enter-active,
.to-right-leave-active {
  transition: all linear 1s;
}

.to-right-enter,
.to-right-leave {
  transform: translate3d(100%, 0, 0);
}
</style>
