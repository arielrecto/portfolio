<script setup>
import { feedbacks } from '@/data/feedback.json'

</script>

<template>

    <div class="min-h-screen w-full flex justify-center items-center">
        <div class="w-5/6 flex flex-col gap-2">
            <h1 class="text-m-accent font-mono text-5xl py-10">My clients</h1>

            <div class="grid grid-cols-3 grid-flow-row gap-2 h-auto">


                <template v-for="feedback, index in feedbacks" :key="index">
                    <div
                        class="flex items-center flex-col space-y-2 rounded-lg as w-full aspect-square justify-center grayscale hover:grayscale-0 duration-700 hover:bg-m-secondary hover:shadow-m-accent hover:shadow-lg">
                        <div class="w-32 aspect-square rounded-full bg-m-neutral flex items-center justify-center overflow-hidden">
                            <img :src="feedback.image" alt="" srcset="">
                        </div>
                        <h1 class="text-2xl font-semibold font-mono text-m-accent">
                            {{ feedback.name }}
                        </h1>
                        <p class="text-xs text-m-neutral font-thin">{{ feedback.project }}</p>
                        <p class="text-5xl font-bold text-m-accent w-full text-left px-4">''</p>
                        <p class="p-5 font-thin text-m-neutral text-justify">
                            {{ feedback.message }}
                        </p>
                        <p class="text-5xl font-bold text-m-accent w-full text-right px-4">''</p>
                    </div>
                </template>

            </div>
        </div>
    </div>

</template>