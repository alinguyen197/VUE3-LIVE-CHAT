<template lang="">
    <div class="container">    
        <Navbar />
        <ChatWindowVue />
        <NewChatFormVue />
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import ChatWindowVue from '@/components/ChatWindow.vue';
import NewChatFormVue from '@/components/NewChatForm.vue'


export default {
    components: { Navbar, ChatWindowVue, NewChatFormVue },
    setup(props) {
        const { user } = getUser()
        const router = useRouter()
        watch((user), () => {
            if (!user.value) {
                router.push({ name: "Welcome" })
            }
        })
    }

}
</script>
<style lang="">
    
</style>