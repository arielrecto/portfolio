<script setup>
import { aboutMe } from '@/data/about.json';



</script>

<template>
    <div class="min-h-screen max-w-screen flex items-center  justify-center" id="about">
        <div class="w-full lg:w-5/6 h-auto flex flex-col space-y-2">
            <h1 class="text-m-accent font-mono text-2xl lg:text-5xl py-10" v-motion-slide-visible-right :delay="100">
                About Me</h1>
            <div class="flex flex-col lg:flex-row lg:justify-between w-full">
                <div class="flex flex-col items-center space-y-5 w-full lg:w-1/3 justify-center p-2">
                    <img :src="aboutMe.image"  v-motion-slide-visible-right :delay="150" alt="" srcset=""
                        class="w-64 aspect-square rounded-full object-cover object-top">
                    <p class="text-center text-sm text-m-neutral space-y-2"  v-motion-slide-visible-right :delay="200">{{ aboutMe.description }}</p>
                    <h1  v-motion-slide-visible-right :delay="250"
                        class="text-2xl font-semibold font-mono tracking-widest text-m-neutral py-5 border-b-2 border-m-accent capitalize">
                        {{ aboutMe.name }}
                    </h1>
                    <p class="text-xs text-m-accent capitalize"  v-motion-slide-visible-right :delay="300">{{ aboutMe.role }}</p>
                </div> 



                <div class="lg:w-5/6 h-auto flex flex-col gap-2 w-full p-5 lg:p-0"  v-motion-slide-visible-right :delay="350">
                    <h1 class="text-m-neutral text-2xl lg:text-4xl font-bold tracking-widest text-end py-10">Education
                        Background</h1>
                    <ul class="flex flex-col text-m-accent space-y-10">
                        <template v-for="education, index in aboutMe.education" :key="index">
                            <li>
                                <div class="text-m-neutral"  v-motion-slide-visible-right :delay="400 + (50 * (index + 1))">
                                    <h1 class="text-lg font-bold text-m-accent text-end">{{ education.course }}</h1>
                                    <p class="font-thin text-xs lg:text-sm text-end">
                                        {{ education.school }}

                                        {{ education.yearGraduated }}
                                    </p>
                                </div>
                            </li>
                        </template>
                    </ul>
                    <h1 class="text-m-neutral text-2xl lg:text-4xl font-bold tracking-widest text-end py-10"  v-motion-slide-visible-right :delay="350">Experience</h1>
                    <ul class="flex flex-col text-m-accent space-y-10">
                        <template v-for="experience, index in aboutMe.experiences" :key="index">
                            <li>
                                <div class="text-m-neutral" v-motion-slide-visible-right :delay="400 + (50 * (index + 1))">
                                    <h1 class="text-lg font-bold text-m-accent text-end">{{ experience.name }}</h1>
                                    <p class="font-thin text-xs lg:text-sm text-end">
                                        {{ experience.company }}

                                        {{ experience.year }}
                                    </p>
                                </div>
                            </li>
                        </template>
                    </ul>
                </div> 

            </div>
        </div>
    </div>
</template>