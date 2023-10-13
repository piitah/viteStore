<template>
    <div class="wrapper flex justify-center items-center">
        <div class="register-container bg-white shadow-lg rounded w-11/12 sm:w-1/3">
            <div class="flex flex-col justify-center  items-center mt-5 mx-12 mb-10">
                <h1 class="text-3xl font-bold my-5">
                    Register 
                </h1>
                <p class="text-sm text-gray-400 font-normal mb-8">
                    Enter your detils to register
                </p>
                <form class="w-full">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                            First Name
                        </label>
                        <input
                            class="border border-gray-400 rounded text-xs py-4 px-3 text-gray-700 leading-tight w-full focus:outline-none "
                            id="firstname" type="text" placeholder="Firstname ">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                            Surname
                        </label>
                        <input
                            class="border border-gray-400 rounded text-xs py-4 px-3 text-gray-700 leading-tight w-full focus:outline-none "
                            id="surname" type="text" placeholder="Surname">
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
                            Email Address
                        </label>
                        <input
                            class="border border-gray-400 rounded text-xs py-4 px-3 text-gray-700 leading-tight w-full focus:outline-none "
                            id="email" type="text" placeholder="Email Address">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
                            Password
                        </label>
                        <input
                            class="appearance-none border text-xs border-gray-400 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="Enter Password">
                        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                    </div>
                    <div>
                        <button class="w-full h-10 rounded shadow-xl text-white mb-3 bg-[#41a1bb] text-sm"> Submit</button>
                    </div>
                    <div class="mt-12">
                        <div>
                            Already have an account? <i class="text-sm text-[#41a1bb] font-bold " style="cursor: pointer;"><router-link to="login">Login here</router-link></i> 
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
    width : 100%;
    padding: 40px 0;
}
.register-container {
    /* height : 30rem; */

}

</style>