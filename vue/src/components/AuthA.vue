<template>
    <div class="auth-container">
        <div class="auth-container-box">

            <form @submit="store.HandleSubmit">
                <h2>{{store. heading }}</h2>
                <p v-if="store.error"  class ="error" @change.prevent="HandleChange">{{store.error}}</p>

                <input type="email" name="" id="" placeholder="Please enter your Email" v-model.lazy="store.email" @change.prevent="HandleChange">
                <input type="password" name="" id="" placeholder="Please enter your Password" v-model="store.password" @change.prevent="HandleChange">
                <input v-if="!store.isLogin" type="password" name="" id="" placeholder="Please Confirm password " v-model="store.confirmPassword" @change.prevent="HandleChange">
                <input type="submit" value="" class="create" onclick.prevent="store.HandleSubmit ">

            </form>
            <div class="auth-options">
                <button @click.prevent="() =>store.ViewLogin(false)" :style="{'background-color' :! store.isLogin ? 'rgb(255,255,255)' :'rgb(188,188,188)' }">Sign Up</button>
                <button @click.prevent="()=>store.ViewLogin(true)" :style="{'background-color' : store.isLogin ? 'rgb(255,255,255)' :'rgb(188,188,188)' }">Login</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import {AuthStore} from '../stores/Auth'
import {computed, ref} from 'vue';


const store = AuthStore()
console.log(store.$state)

const HandleChange = (e) => {
    e.preventDefault()
    console.log('changing', e)

    const { name, value } = e.target

    computed(() => {
        let setval = {}
        setval[name] = value
        return store.$state = (setval)

    })
    console.log(store.$state)
}
</script>