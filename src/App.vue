<!--
 * @Author: GuluGulu 2295980270@qq.com
 * @Date: 2023-04-27 00:23:13
 * @LastEditors: GuluGulu 2295980270@qq.com
 * @LastEditTime: 2023-05-04 21:40:13
 * @FilePath: \vue-examples\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBarView from './views/SideBarView.vue'
</script>

<template>
  <SideBarView id="sidebar" />
  <RouterView id="router" />
</template>

<style>
#app {
  display: flex;
}
#sidebar {
  border: 1px solid red;
  width: 300px;
}
#router {
  border: 1px solid red;
  flex: 1;
}
</style>
