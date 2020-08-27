<template>
  <div class="pagearea">
    <h2
      ref="animate"
      class="pagearea-title animate__animated"
      :class="`animate__${animateClassName}`"
    >
      动画效果展示
    </h2>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "",
  data () {
    return {};
  },
  computed: {
    ...mapGetters(["animateClassName"])
  },
  methods: {
    ...mapActions(["setAnimateClassName"])
  },
  created () { },
  mounted () {
    this.$refs.animate.addEventListener("animationend", () => {
      this.setAnimateClassName("");
    });
  },
  watch: {}
};
</script>

<style lang="less" scoped>
.pagearea {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .pagearea-title {
    animation-fill-mode: backwards; // 动画结束后停留在第一帧
  }
}
</style>
