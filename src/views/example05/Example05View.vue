<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

const httpInstance = axios.create()

const example05API = () => {
  return httpInstance({
    url: 'https://api.github.com/users/bwhyman'
  })
}

export interface GitData {
  name?: string
  login?: string
  conapny?: string
  avatar_url?: string
  public_repos?: number
  url?: string
}

const user = ref<GitData>({})
const getData = async () => {
  const res = await example05API()
  user.value = res.data
  console.log(user.value)
}
onMounted(() => getData())
</script>
<template>
  <img src="user.avater_url" alt="" style="width: 30%" />
  <br />
  company: {{ user?.conapny }}
  <br />
  login: {{ user?.login }}
  <br />
  public_repos: {{ user?.public_repos }}
</template>
