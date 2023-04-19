<template>
  <div class="app">
    <div v-if="authToken">
      <ListHeader title=" 🪆Holiday todo task" :getData="getData" />
        <p class="user-email"> welcome back {{email}}</p>
      <ListItem v-for="task in sortData" :key="task.id" :task="task" :getData="getData" />
        <p class="copyright">Creative coding LLC</p>

    </div>
    <div v-else="!authToken">
      <AuthA />
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watchEffect } from 'vue'
import ListHeader from '../components/ListHeader.vue'
import ListItem from '../components/ListItem.vue'
import AuthA from '../components/AuthA.vue'
import { useCookies } from '@vueuse/integrations/useCookies'
import { AuthStore } from '../stores/Auth'
const store = AuthStore()

const task = ref(null)
const Cookie = ref(useCookies())
const email = Cookie.value.get('Email')
const authToken = Cookie.value.get('Authtoken')
console.log(Cookie.value.get('Authtoken'))

const getData = async () => {
  const email = Cookie.value.get('Email')
  try {
    const response = await fetch(`http://localhost:3000/todos/${email}`)
    const json = await response.json()
    task.value = json
    console.log(task.value)
  } catch (error) {
    console.error(error)
  }
}
watchEffect(() => {
  getData()
})
console.log(task.value)

const sortData = computed(() => {
  return task.value?.sort((a, b) => new Date(a.date) - new Date(b.date))
})
</script>
<style>

</style>