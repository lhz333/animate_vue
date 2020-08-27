<template>
  <div class="animation-list">
    <section v-for="(item, index) in animationEffect" :key="index">
      <h3 class="animation-title">{{ item.title }}</h3>
      <ul class="animation-group">
        <li class="animation-item" v-for="(group, i) in item.group" :key="i">{{ group }}</li>
      </ul>
    </section>
  </div>
</template>
<script>
import AnimateList from "@/assets/js/animateList.js";
export default {
  name: "",
  data () {
    return {};
  },
  components: {},
  props: {},
  computed: {
    animationEffect () {
      return AnimateList.animationEffect;
    }
  },
  methods: {},
  created () { },
  mounted () { },
  watch: {}
};
</script>

<style lang="less" scoped>
.animation-list {
  text-align: left;
  padding: 15px;
  .animation-title {
    margin: 25px 0 5px;
    font-weight: bold;
  }
  .animation-group {
    line-height: 28px;
    .animation-item {
      cursor: pointer;
    }
  }
}
</style>
