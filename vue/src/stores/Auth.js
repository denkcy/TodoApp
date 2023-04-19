import { defineStore } from 'pinia'
import { useCookies } from '@vueuse/integrations/useCookies'
import { toast } from 'vue3-toastify';
import { POSITION } from "vue-toastification";

export const AuthStore  = defineStore('Auth',{
    state:()=>({
        email: null,
        password: null,
        confirmPassword : null,
        error : null,
        isLogin:true,

        Cookies:null,
        removeCookies:null
    }),
    getters:{
         heading (state){
            return state.isLogin  ? 'Please log in' : 'Please sign Up'
         },
         endpoint (){
            return this.isLogin ? 'login' :  'signup'
         }


    },
    actions:{
        ViewLogin (status){
            this.error = null
 return this.isLogin = status

           },
        async  HandleSubmit (e,){
            e.preventDefault()
            if (!this.isLogin && this.password !== this.confirmPassword) {
              toast('Make sure Password match!',{
                autoClose:3000,

              })

                return
            }
            const email = this.email
             const password = this.password

            const response=  await  fetch(`http://localhost:3000/${this.endpoint}`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email,password})
            })
            const data = await response.json()
            if(data.detail){
               this.error = data.detail
              console.log(this.error)
            toast(this.error,{
              autoClose:3000
            })
            }else {

                this.Cookies =  useCookies(['Email',data.email])
                this.Cookies = useCookies(['AuthToken',data.token])
               this.Cookies.set('Authtoken',data.token)
                this.Cookies.set('Email',data.email)
              toast('success',{
                autoClose:3000
              })
                window.location.reload()
                            }


        }
    }
})
