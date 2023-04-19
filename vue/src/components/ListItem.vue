<template>
    <li class="list-item">
        <div class="info-container">
            <font-awesome-icon icon = 'fa-solid  fa-circle-check' class="icon" />
             <p class="task-title">{{ task.title }}</p>
            <ProgressBar  progress="task.progress"/>
        </div>
<div class="btn-container">
    <button class="edit" @click="showModal">Edit</button>
    <button class="del" @click="DeleteTodo">Delete</button>
</div>
<ModalApp  mode = 'edit' :ActiveModal="ModalActive" @close="showModal"  :task="task" :getData="getData"/> 
    </li>
</template>
<script setup>
import { ref } from 'vue';
import ProgressBar from '../components/ProgressBar.vue'
import ModalApp from './ModalApp.vue';

const props=defineProps([
    'task',
    'getData'
])
console.log(props)
const ModalActive= ref(
    false
)
const showModal = ()=>{
    ModalActive.value = !ModalActive.value
}
console.log(props)

const DeleteTodo = async()=>{
    try {
        const response = await fetch(`http://localhost:3000/todos/${props.task.id}`,{
            method:'DELETE'
        })
        if(response.status==200){
            console.log('deleted')
            props.getData()
        }
    } catch (error) {
        console.error(error)
    }
}
</script>
