import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

let user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  console.log(_user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};
export default getUser;
