<template>
    <div class="containe flex flex-row justify-center items-center">
        <div class="login-container w-11/12 sm:w-1/3 bg-white shadow-md rounded-sm ">
            <div class="mt-1 mb-12 mx-12 flex flex-col items-center">
                <h1 class="text-3xl font-bold my-5">Login</h1>
                <p class=" text-sm text-gray-400 font-normal mb-8">Enter Login detils to get access</p>
                <form class="w-full" @submit.prevent="onSubmitHandler()">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                            Username
                        </label>
                        <input v-model="formData.username" 
                            class="border border-gray-400 rounded text-xs py-4 px-3 text-gray-700 leading-tight w-full focus:outline-none "
                            id="username" :class="v$.username.$error ? input_field_error : ''" type="text" placeholder="Username">
                        <div v-if="submitted && v$.username.$error" class="invalid-feedback">
                            <span v-if="v$.username.required.$invalid" class="text-red-600 text-xs font-medium">Username is required </span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                            Email Address
                        </label>
                        <input v-model="formData.email"
                            class="border border-gray-400 rounded text-xs py-4 px-3 text-gray-700 leading-tight w-full focus:outline-none "
                            id="email" :class="v$.email.$error ? input_field_error : ''" type="text" placeholder="Email Address">
                            <div v-if="v$.email.$error">
                                <span v-if="v$.email.required.$invalid" class="text-red-600 text-xs font-medium"> Email is required</span>
                                <span v-if="v$.email.$error" class="text-red-600 text-xs font-medium"> Email is invalid</span>
                            </div>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
                            Password
                        </label>
                        <input v-model="formData.password"
                            class="appearance-none border text-xs border-gray-400 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="Enter Password">
                        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                    </div>
                    <div>
                        <button class="w-full h-10 rounded shadow-xl text-white mb-3 bg-[#41a1bb] text-sm" type="submit">
                            Submit</button>
                    </div>
                    <div class="flex flex-row justify-between items-center w-full">
                        <div class="flex items-center">
                            <input type="checkbox" name="check" id="check">
                            <label class="text-black font-medium text-sm ml-2" for="check">Keep Me Logged In</label>
                        </div>
                        <div class="text-red-500 text-xs" style="cursor:pointer">
                            Forgot Password ?
                        </div>
                    </div>
                    <div class="mt-12">
                        <div>
                            Don’t have an account? <i class="text-sm text-[#41a1bb] font-bold "
                                style="cursor: pointer;"><router-link to="signup">Sign Up here</router-link></i>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core"
import { required, email } from "@vuelidate/validators"

const input_field_error = "input-field-error"
const formData = ref({
    username: "",
    email: "",
    password: ""
})
let submitted = ref(false)

const rules = {
    username: { required },
    email: { required,email },
    password: { required }
}
const v$ = useVuelidate(rules, formData)

const onSubmitHandler = async () => {
    submitted.value = true;
    v$.value.$touch()
    const result = await v$.value.$validate()
    //    alert("hellow rodl"+ v$)
    console.log(v$.value)
    console.log(submitted)
    console.log("Vaidate " + result)
    // console.log("Is Valid" + v$.value.$invalid)
}
</script>

<style scoped>
.containe {
    width: 100%;
    padding: 40px 0;
    /* height: ; */
}

.login-container {
    /* width: 500px; */
}
.input-field-error {
    border: 1px solid red;
}
</style>
