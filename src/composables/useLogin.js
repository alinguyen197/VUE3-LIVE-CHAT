import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);

const login = async (email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email,password);
    error.value = null;
    console.log(res);
    return res;
  } catch (err) {
    error.value = "Incorrect login credentials";
    // error.value = err.message;
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin