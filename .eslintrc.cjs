/*
 * @Author: GuluGulu 2295980270@qq.com
 * @Date: 2023-04-27 00:23:13
 * @LastEditors: GuluGulu 2295980270@qq.com
 * @LastEditTime: 2023-04-27 00:40:53
 * @FilePath: \vue-examples\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
