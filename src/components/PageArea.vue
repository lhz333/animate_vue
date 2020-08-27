<template>
  <div class="pagearea">
    <h2
      class="pagearea-title animate__animated"
      :class="`animate__${animateClassName}`"
    >
      动画效果展示
    </h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  data () {
    return {};
  },
  computed: {
    ...mapGetters(["animateClassName"])
  },
  methods: {},
  created () { },
  mounted () { },
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
