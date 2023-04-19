<template>
  <div v-if="authToken" >
<Navbar />
<router-view />
  </div>
  <div v-else="!authToken">
      <AuthA />
  </div>
</template>
<script setup>

import Navbar from './components/Navbar.vue';
import AuthA from './components/AuthA.vue'
import { useCookies } from '@vueuse/integrations/useCookies'
import { AuthStore } from './stores/Auth'
import {ref, watchEffect} from "vue";
const store = AuthStore()

const task = ref(null)
const Cookie = ref(useCookies())
const authToken = Cookie.value.get('Authtoken')
console.log(store.$state)

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

</script>
<style>

</style>