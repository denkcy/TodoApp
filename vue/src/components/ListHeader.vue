<template>
    <div class="List-Header">
<h3>{{ title }}</h3>
<div class="button-container">
    <button class="create" @click="showModal">Add New</button>
    <button class="signOut " @click.prevent="HandleSubmit">Sign Out</button>
</div>
<ModalApp mode = 'create' :ActiveModal="ModalActive" @close="showModal" :getData="getData"/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ModalApp from './ModalApp.vue';
import { toast  } from 'vue3-toastify';
import { useCookies } from '@vueuse/integrations/useCookies'
import { POSITION } from "vue-toastification";
const Cookie = ref(useCookies())
const ModalActive= ref(
    false
)
const showModal = ()=>{
    ModalActive.value = !ModalActive.value
}
const props = defineProps([
    'title',
    'getData'
])
const HandleSubmit=(e)=>{
    e.preventDefault()
    toast('signing out',{
        autoClose:4000,
        position:POSITION.TOP_LEFT,
        progress:3000,
    })
    setTimeout(()=>{
        Cookie.value.remove('Email')
        Cookie.value.remove('Authtoken')
        window.location.reload()
    },4000)



}
console.log(props)
</script>