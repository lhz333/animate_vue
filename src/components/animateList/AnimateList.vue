<template>
  <div class="animation-list">
    <section v-for="(item, index) in animationEffect" :key="index">
      <h3 class="animation-title">{{ item.title }}</h3>
      <ul class="animation-group">
        <li
          class="animation-item"
          :class="{ active: group == animateClassName }"
          v-for="(group, i) in item.group"
          :key="i"
          @click="selectAnimate(group)"
        >
          <span>{{ group }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import AnimateList from "@/assets/js/animateList.js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "",
  data () {
    return {};
  },
  components: {},
  props: {},
  computed: {
    ...mapGetters(["animateClassName"]),
    animationEffect () {
      return AnimateList.animationEffect;
    }
  },
  methods: {
    ...mapActions(["setAnimateClassName"]),
    selectAnimate (value) {
      this.setAnimateClassName(value);
    }
  },
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
      &.active {
        text-shadow: 5px 2px 6px blue;
      }
    }
  }
}
</style>
