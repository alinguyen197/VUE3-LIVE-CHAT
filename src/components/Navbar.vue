<template>
    <nav v-if="user">
        <div>
            <p>Hey there {{ user.displayName }}</p>
            <p class="email">Currently logged in as {{ user.email }}</p>
        </div>
        <button @click="handleLogout">Logout</button>
    </nav>
</template>
  
<script>
import { useRouter } from 'vue-router'
import useLogout from "../composables/useLogout"
import getUser from "../composables/getUser"
export default {
    components: {},
    setup(props) {
        const router = useRouter()
        const { error, logout } = useLogout()
        const { user } = getUser()

        const handleLogout = async () => {
            await logout()
            if (!error.value) {
                console.log("user logout");
                // router.push({ path: "/" })
            }
        }
        return { handleLogout, error, user }
    }
}
</script>
  
<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}

nav p.email {
    font-size: 14px;
    color: #999;
}
</style>