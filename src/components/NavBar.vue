<script setup>
import { ref } from 'vue'



const isShow = ref(false)

</script>


<template>
    <nav class=" w-full lg:flex justify-center fixed top-0 bg-gradient-to-r from-m-primary to-m-secondary z-20 hidden">
        <div class="w-5/6 flex items-center justify-between py-2">
            <div class="flex items-center space-x-5">
                <img src="@/assets/logo.ico" alt="" srcset="" class="w-10 aspect-square rounded-full">
                <h1 class="text-2xl font-semibold font-mono text-m-accent capitalize">Ariel recto</h1>
            </div>
            <div class="flex items-center space-x-5 text-m-neutral">
                <a href="#home" class="font-mono">Home</a>
                <a href="#about" class="font-mono">About Me</a>
                <a href="#skills" class="font-mono">Skills</a>
                <a href="#projects" class="font-mono">Projects</a>
            </div>
            <a href="#contact"
                class="px-4 py-2 rounded-tl-lg rounded-br-lg bg-m-accent text-m-neutral font-mono font-thin">
                Contact Me
            </a>
        </div>
    </nav>

    <button
        class="fixed left-5 lg:hidden bg-m-neutral p-2 flex items-center justify-center z-10 top-10 w-12 aspect-square rounded-full text-m-accent"
        @click="isShow = true">
        <img src="/menu.gif" alt="" srcset="">
    </button>

    <Transition v-show="isShow" enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 transform -translate-y-10" enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-500 ease-in" leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-10" :duration="{ enter: 500, leave: 500 }">
        <nav
            class="w-full  lg:hidden flex-col items-center fixed  top-0 bg-gradient-to-t from-m-primary to-m-accent z-20">
            <div class="w-5/6 flex flex-col justify-between items-center py-2 space-y-10">
                <div v-motion-slide-visible-right :delay="100" class="flex items-center flex-col space-y-2">
                    <img @click="isShow = false" src="@/assets/logo.ico" alt="" srcset=""
                        class="w-16 aspect-square rounded-full">
                    <h1 class="text-2xl font-bold font-mono text-m-primary capitalize">Ariel recto</h1>
                </div>
                <div class="flex flex-col items-center space-y-2 text-m-neutral ">
                    <a v-motion-slide-visible-right :delay="100" @click="isShow = false" href="#home"
                        class="font-mono">Home</a>
                    <a v-motion-slide-visible-right :delay="200" @click="isShow = false" href="#about"
                        class="font-mono">About Me</a>
                    <a v-motion-slide-visible-right :delay="300" @click="isShow = false" href="#skills"
                        class="font-mono">Skills</a>
                    <a v-motion-slide-visible-right :delay="400" @click="isShow = false" href="#projects"
                        class="font-mono">Projects</a>
                </div>
                <a v-motion-slide-visible-right :delay="500" @click="isShow = false" href="#contact"
                    class="px-4 py-2 rounded-tl-lg rounded-br-lg bg-m-accent text-m-neutral font-mono font-thin">
                    Contact Me
                </a>
            </div>
        </nav>
    </Transition>


</template>