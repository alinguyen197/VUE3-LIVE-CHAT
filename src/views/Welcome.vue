<template>
    <div class="welcome container">
        <h3>WELCOME</h3>
        <SignupForm v-if="mode" @signin="enterLogin" />
        <LoginForm v-else @login="enterChat" />
        <a @click="handleChangeMode">{{ !mode ? "Sign Up" : "Login" }}</a>
    </div>
</template>
  
<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import Loading from '@/components/Loading.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SignupForm, LoginForm , Loading },
    setup(props,context) {
        const mode = ref(false)
        const router = useRouter()
        const enterChat = () => {
            router.push({ name: 'ChatRoom' })
        }
        const enterLogin = (e) => {
            mode.value = !mode.value
            
        }
        const handleChangeMode = () => {
            mode.value = !mode.value
        }
        return { mode, handleChangeMode, enterChat, enterLogin  }
    }
}
</script>
  
<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

/* form styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
</style>