<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AnimateList />
        </el-aside>
        <el-main>
          <PageArea />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/common/Header.vue";
import AnimateList from "@/components/animateList/AnimateList.vue";
import PageArea from "@/components/PageArea.vue";

export default {
  name: "Home",
  components: {
    Header,
    AnimateList,
    PageArea
  }
};
</script>

<style lang="less">
.home {
  height: 100%;
  user-select: none;
}
.el-container {
  height: 100% !important;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
