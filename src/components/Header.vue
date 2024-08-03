<script setup>
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'
const showModal = ref(false)
import personal from '@/data/personal.json'
import header from '@/data/header.json'
const { dataTwo, dataThree } = header;


console.log(dataTwo)

</script>

<template>
    <div class="min-h-screen  flex justify-center items-center" id="home">
        <div class="flex flex-col lg:flex-row justify-between gap-2 items-center w-5/6">
            <div class="">
                <img src="@/assets/img.jpg" alt="" srcset="" class="w-32 md:w-64 lg:w-96 aspect-square rounded-full object-cover object-top 
                shadow-xl shadow-m-accent
                ">
                <!-- <div class="w-64 aspect-square border-2 border-m-accent rounded-full
                 absolute z-0 right-10">

                </div> -->
            </div>

            <div class="w-full lg:w-1/2 flex flex-col space-y-5">
                <h1 class="text-sm lg:text-lg font-thin font-mono text-m-accent uppercase">Hi!!</h1>
                <h1 class="text-m-neutral font-mono font-bold text-2xl lg:text-4xl">I'm <span
                        class="text-m-accent">FULL-STACK WEB
                        DEVELOPER AND ANDROID DEVELOPER</span></h1>
                <p class="text-m-neutral text-xs md:text-sm lg:text-md">As a full-stack web developer, I am totally
                    committed to fulfilling the needs
                    of the client and developing a strong connection with them so that they are satisfied with the
                    results I provide.</p>

                <div
                    class="flex items-center space-x-5 rounded-lg bg-gradient-to-r from-m-accent to-m-secondary w-auto p-2">
                    <a href="https://www.facebook.com/profile.php?id=100005579118863" target="_blank"
                        class="grayscale hover:grayscale-0 duration-700 hover:scale-110">
                        <img src="/facebook.png" alt="" srcset="" class="w-6 aspect-square">
                    </a>
                    <a href="https://www.linkedin.com/in/recto-ariel-644782250/" target="_blank"
                        class="grayscale hover:grayscale-0 duration-700 hover:scale-110">
                        <img src="/linkedin.png" alt="" srcset="" class="w-6 aspect-square">
                    </a>
                    <a href="https://github.com/arielrecto" target="_blank"
                        class="grayscale hover:grayscale-0 duration-700 hover:scale-110">
                        <img src="/github.png" alt="" srcset="" class="w-6 aspect-square">
                    </a>

                </div>

                <!-- <button class="px-4 py-2 rounded-lg bg-m-accent text-m-neutral font-thin" @click="showModal = true">About Me</button>       -->
            </div>

        </div>
    </div>


    <div class="bg-m-accent mex-w-screen h-96 flex justify-center items-center" v-motion-slide-bottom :delay="100">
        <div class="w-5/6 grid grid-cols-3 grid-flow-row">
            <template v-for="data, index in dataTwo" :key="index">
                <div class="flex flex-col gap-2 items-center w-full" v-motion-slide-bottom :delay="100 * (index + 1)">
                    <img :src="data.sticker" class=" w-12 lg:w-24 aspect-square" alt="" srcset="">
                    <h1
                        class="text-m-primary font-mono text-xl lg:text-2xl capitalize flex flex-col space-y-5 items-center">
                        <span class="text-xl lg:text-5xl font-bold text-m-neutral">{{ data.total }}</span> <span>{{
        data.name }}</span> </h1>
                </div>
            </template>

        </div>
    </div>



    <div class="min-h-screen max-w-screen flex lg:flex-row lg:justify-center lg:items-center">
        <div class="lg:w-5/6  w-full flex flex-col gap-2 h-full">
            <h1 class="text-m-accent font-mono text-2xl lg:text-5xl py-10">What I can Do?</h1>

            <div class="grid lg:grid-cols-3 lg:grid-flow-row gap-2 h-full items-center">
                <template v-for="data3, index in dataThree" :key="index">
                    <div
                        class="flex items-center flex-col space-y-2 lg:rounded-lg lg:border 
                        lg:border-m-accent w-full h-auto aspect-square justify-center">
                        <div  v-motion-slide-visible-left :delay="100 * (index + 1)" class="w-16 md:w-32 aspect-square rounded-full bg-m-neutral flex items-center justify-center p-5">
                            <img :src="data3.sticker" alt="" srcset="">
                        </div>
                        <h1  v-motion-slide-visible-left :delay="150 * (index + 1)" class="text-xl lg:text-2xl font-semibold font-mono text-m-accent">
                            {{ data3.name }}
                        </h1>
                        <p  v-motion-slide-visible-left :delay="200 * (index + 1)" class="text-xs md:text-sm lg:text-md p-5 font-thin text-m-neutral text-justify">
                            {{ data3.description }}
                        </p>
                    </div>
                </template>

            </div>
        </div>
    </div>

</template>