<script setup>


import skills from '@/data/skills.json'

const delay = (delay, index) => {
    console.log(delay * index)

    return delay * index;
}

</script>

<template>
    <div class="h-auto w-full flex items-center justify-center" id="skills">
        <div class="w-5/6 h-auto flex flex-col space-y-2">
            <h1 class="text-m-accent font-mono text-2xl lg:text-5xl py-10">Skills</h1>
            <p class="font-thin text-sm text-m-neutral">Technical </p>
            <div class="flex space-x-4 w-full">
                <div class="grid grid-cols-2 lg:grid-cols-4 grid-flow-row h-auto w-full gap-5">

                    <template v-for="(skill, index)  in skills.skills" :key="index">
                        <div v-motion-roll-visible-right :delay="delay(100, index)" class=" rounded-lg w-full hover:shadow-lg
                         hover:shadow-m-accent duration-700 hover:scale-105 p-5
                         grayscale hover:grayscale-0
                         ">
                            <h1 class="text-m-neutral text-lg lg:text-xl font-mono">{{skill.name}}</h1>
                            <div class="flex justify-center">
                                <div class="flex items-center gap-2 py-5">
                                    <img :src="skill.image_url" alt="" srcset="" class="w-16 lg:w-32 aspect-auto" />
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>