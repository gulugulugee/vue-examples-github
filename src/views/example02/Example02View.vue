<!--
 * @Author: GuluGulu 2295980270@qq.com
 * @Date: 2023-05-20 20:20:41
 * @LastEditors: GuluGulu 2295980270@qq.com
 * @LastEditTime: 2023-05-27 18:49:56
 * @FilePath: \vue-examples\src\views\example02\Example02View.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const name = ref('宋克振')
    return {
      name
    }
  }
})
</script>
<template>
  <div>
    <p>这里是Example2的内容</p>
    <p><input type="text" v-model="name" /></p>
    <p>当前的名字是：{{ name }}</p>
  </div>
</template>
