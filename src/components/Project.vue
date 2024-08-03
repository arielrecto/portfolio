<script setup>

import { projects } from '@/data/projects.json'


</script>

<template>
    <div class="min-h-screen max-w-screen flex items-center  justify-center" id="projects">
        <div class="w-5/6 h-auto flex flex-col space-y-10">
            <h1 class="text-m-accent font-mono text-2xl lg:text-5xl py-10" v-motion-slide-visible-left :delay="100">Projects</h1>
            <!-- <p class="font-thin text-sm text-m-neutral">Technical </p> -->
            <template v-for="project, index in projects" :key="index">
                <div :class="`flex lg:flex-row flex-col space-y-5 ${index % 2 == 0 ? 'lg:flex-row-reverse' : ' '} `">
                    <div v-motion-slide-visible-left :delay="200 + (50 * (index + 1))" class="w-[20rem] h-32 lg:w-[40rem] lg:h-64 rounded-xl bg-m-accent overflow-hidden relative">
                        <img :src="project.images[0]" alt="" srcset="" class="hover:scale-105 duration-700 hover:shadow-lg hover:shadow-m-neutral">
                    </div>

                    <div class="flex flex-col w-full justify-between">
                        <div class="flex items-center justify-between">
                            <h1 v-motion-slide-visible-left :delay="250 + (50 * (index + 1))"
                                class="-mx-2 flex flex-col gap-2 capitalize tracking-widest border-b
                                 border-m-accent w-full z-10 text-2xl lg:text-4xl font-mono font-bold text-m-neutral px-2 py-4">
                                <span> {{ project.name }}</span>
                                <span
                                    class="text-xs font-thin tracking-normal text-m-accent ml-10 flex 
                                    items-center space-x-2 divide-x">
                                    <p>clients </p>
                                    <template v-for="client, index in project.clients" :key="index">
                                        <p class="p-2"> {{ client }}</p>
                                    </template>

                                </span>
                            </h1>
                            <!-- <div
                                class="w-auto text-center  aspect-square rounded-full p-2 bg-m-accent flex items-center justify-center capitalize text-m-neutral font-mono">
                                <h1 class="">
                                    {{ project.type }}
                                </h1>
                            </div> -->

                        </div>
                        <div class="flex items-center p-2 gap-2"  v-motion-slide-visible-left :delay="300" >

                            <template v-for="stack, index in project.stacks" :key="index">
                                <div class="p-2 rounded-full border border-m-accent flex 
                                items-center space-x-2 uppercase hover:shadow-lg hover:shadow-m-accent hover:scale-105  duration-700">
                                    <img :src="stack.icon" alt="" srcset="" class="w-5 aspect-square">
                                    <h1 class="text-m-neutral tracking-wider lg:flex hidden">
                                        {{ stack.name }}
                                    </h1>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </template>

        </div>
    </div>
</template>