<!--
 * @Author: GuluGulu 2295980270@qq.com
 * @Date: 2023-05-04 21:23:44
 * @LastEditors: GuluGulu 2295980270@qq.com
 * @LastEditTime: 2023-05-27 15:14:55
 * @FilePath: \vue-examples\src\views\example01\Example01View.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- <div id="app">
    {{ user.id }}

    <p>{{ userRef.name }}</p>

    <button @click="changeUserRef()">+</button>
  </div> -->
  <h1>Example01的内容部分</h1>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue'

export default defineComponent({
  setup() {
    interface User {
      id: number
      name: string
      address?: string
    }
    const user: User = {
      id: 1,
      name: 'Bo',
      address: 'Linda'
    }
    const userRef = ref(user)
    const changeUserRef = () => {
      userRef.value.name = 'BOBOBOBO'
    }
    watch(userRef, (newUser, oldUser) => alert(`旧名：${oldUser.name},新名：${newUser.name}`))
    return {
      user,
      userRef,
      changeUserRef,
      watch
    }
  }
})
</script>

<style>
h1 {
  margin: 0;
}
</style>
