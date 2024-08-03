<script setup>

import { ref, onMounted } from 'vue'
import { contacts } from '@/data/contact.json'
const emailData = ref({
    from: "",
    to: "arielrecto29@gmail.com",
    message: ""
})
const isLoading = ref(false)




const sendEmail = async () => {



    isLoading.value = true

    await emailjs.send(
        'service_5spy7bo',
        'template_zy7kz5j',
        {
            from_email: emailData.value.from,
            message: emailData.value.message
        }
    ).then((response) => {
        Toastify({
            text: `Email Sent!`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #31363F, #76ABAE)",
            },
        }).showToast();

    }).catch((error) => {

        Toastify({
            text: `${error}`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #31363F, #76ABAE)",
            },
        }).showToast();

    })


    emailData.value = {
        from: "",
        to: "arielrecto29@gmail.com",
        message: ""
    }



    isLoading.value = false

}


onMounted(() => {
    emailjs.init({
        publicKey: "1IjuMSzitbJ023LEn",
    })
    console.log("mounted")
})

</script>

<template>
    <div class="min-h-screen w-full flex items-center bg-m-accent justify-center mt-[20rem]" id="contact">
        <div class="w-5/6 h-full flex flex-col space-y-2 justify-between">
            <h1 class="text-m-primary font-mono text-2xl lg:text-5xl py-10" v-motion-slide-visible-right :delay="500">Contact
                Me</h1>
            <!-- <p class="font-thin text-sm text-m-neutral">Technical </p> -->
            <div class="flex flex-col lg:flex-row justify-between w-full">
                <div class="flex flex-col space-y-5">
                    <template v-for="contact, index in contacts"  :key="index">
                        <h1 class="flex items-center gap-5" v-motion-slide-visible-right :delay="500 + (50 * (index + 1))">
                            <span
                                class="p-2 bg-m-neutral w-12 aspect-square rounded-full flex items-center justify-center">
                                <img :src="contact.icon" alt="" srcset="" class="w-6 aspect-square">
                            </span>
                            <span class="text-m-neutral text-xs lg:text-md">
                                {{ contact.address }}
                            </span>
                        </h1>
                    </template>


                </div>

                <form  v-motion-slide-visible-right :delay="500" @submit.prevent="sendEmail" class="flex flex-col backdrop-blur-2xl bg-m-accent/10 gap-2 rounded-lg
                 shadow-sm shadow-m-accent hover:shadow-lg hover:shadow-m-accent duration-700 h-auto p-5 w-full lg:w-1/2">
                    <p class="text-m-primary text-lg font-mono flex items-center gap-5"> <span>Send me a email now
                        </span> <span><img src="/email-send.gif" alt="" srcset="" class="w-12 aspect-square"></span></p>
                    <div class="flex flex-col gap-2">
                        <h1 class="text-xs lg:text-md text-m-neutral">Email</h1>
                        <input type="email" v-model="emailData.from"
                            class="py-2 px-2 text-m-accent rounded-lg bg-m-neutral w-full" required>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="text-xs lg:text-md text-m-neutral">Message</h1>
                        <textarea v-model="emailData.message" required
                            class="h-32  p-2 w-full text-m-accent rounded-lg border border-m-accent bg-m-neutral">

        </textarea>
                    </div>
                    <button :disabled="isLoading"
                        :class="`py-2 px-4  font-bold text-m-accent rounded-lg flex justify-center text-xs lg:text-md ${!isLoading ? 'bg-gradient-to-tr from-m-primary to-m-secondary' : 'bg-m-neutral'}`">

                        <template v-if="!isLoading">
                            <span>Send</span>
                        </template>
                        <template v-else>
                            <span>
                                <img src="/loading.gif" alt="" srcset="" class="w-6 aspect-square">
                            </span>
                        </template>
                    </button>
                </form>

            </div>
        </div>
    </div>

    <div class="flex items-center gap-10 justify-center py-10">
        <img src="@/assets/logo.ico" alt="" srcset="" class="w-12 aspect-square rounded-full">
        <p class="text-m-neutral tracking-widest uppercase"> Ariel Dev</p>
    </div>
</template>