<template>
    <div>
        <header>
            <nav class="nav">
                <div class="logo">
                    <h1> logo</h1>
                </div>
                <ul>
                    <router-link :to="{name:'Home'}" > Home </router-link>
                    <router-link :to="{name:'Create'}" >Create </router-link>
                    <router-link :to="{name:'Login'}" >Login</router-link>
                    <li @click.prevent="HandleSubmit">Logout</li>
                </ul>
            </nav>
        </header>

    </div>
</template>
<script setup>
import { useCookies } from '@vueuse/integrations/useCookies'
import {ref} from "vue";
const Cookie = ref(useCookies())
const HandleSubmit=(e)=>{
    e.preventDefault()
    Cookie.value.remove('Email')
    Cookie.value.remove('Authtoken')
    window.location.reload()


}
</script>
<style lang="scss">
header{
    background-color: rgb(24, 156, 238);
    color: rgb(236, 248, 255);
    .nav{
        display: flex;
        justify-content: space-between;
        
       
        padding: 12px 10px;
        min-width: 70%;
     
      
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Roboto;
            font-size: 15px;
            justify-self: start;
        }
        ul{
            display: flex;
            justify-content: end;
            flex: 1;
            text-decoration: none;
            list-style: none;

            li{
          margin-left: 13px;
          cursor: pointer;
            }
            a{
          
            text-decoration: none;
            list-style: none;
                text-decoration: none;
            list-style: none;
    color: rgb(236, 248, 255);
    margin-left:  12px; ;
          
            }
        }
    }
    }
</style>