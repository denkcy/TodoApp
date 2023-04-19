<template xmlns="http://www.w3.org/1999/html">
  <div v-show="ActiveModal" class="overlay">
    <div class="modal">
      <div class="form-container">
        <h3>Let's {{ mode }} task</h3>
        <button @click="HandleClose">
          <font-awesome-icon icon="fa-regular fa-times-circle" class="icon" />
        </button>
      </div>

      <form @submit.prevent="">
        <input
          type="text"
          name="title"
          placeholder="Your Task Goes here"
          maxlength="30"
          @change="HandleChange"
          v-model="data.title"
        />
        <br />
        <label for="range">Drag to select your progress  </label>
        <input
          type="range"
          name="progress"
          id="range"
          @change="HandleChange"
          v-model="data.progress"
        />
        <input type="submit" value="" :class="mode" @click.prevent="transmit" />
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { toast } from 'vue3-toastify';
import {useCookies} from "@vueuse/integrations/useCookies";
const Cookie = ref(useCookies())
const props = defineProps(['mode', 'ActiveModal', 'task', 'getData'])
const emit = defineEmits(['close'])

const editMode = computed(() => {
  return props.mode === 'edit' ? true : false
})
const transmit = computed(() => {
toast('success',{
  autoClose:3000
})
  return editMode.value ? editData : HandleSubmit
})

const data = ref({
  email: editMode.value ? props.task.email : Cookie.value.get('Email'),
  title: editMode.value ? props.task.title : null,
  description: '',
  progress: editMode.value ? props.task.progress: Number,
  date: editMode.value ? props.task.date : new Date()
})
const HandleClose = () => {
  emit('close')
}
const HandleChange = (e) => {
  e.preventDefault()


  const { name, value } = e.target

  computed(() => {
    let setval = {}
    setval[name] = value
    return (data.value = setval)
  })

}
const HandleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',

      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data.value)
    })

    if (response.status === 200) {
      console.log('woked')
      HandleClose(false)
      props.getData()
    }
  } catch (e) {
    console.error(e.message)
  }
  transmit
}

const editData = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch(`http://localhost:3000/todos/${props.task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data.value)
    })
    if (response.status === 200) {
      console.log('edited')
      HandleClose(false)
      props.getData()
    }
  } catch (error) {
    console.error(error)
  }
}
</script>


