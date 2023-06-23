/*
 * @Author: GuluGulu 2295980270@qq.com
 * @Date: 2023-04-27 00:23:13
 * @LastEditors: GuluGulu 2295980270@qq.com
 * @LastEditTime: 2023-05-04 20:59:03
 * @FilePath: \vue-examples\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
