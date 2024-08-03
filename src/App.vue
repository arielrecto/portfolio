<script setup>
  import NavBar from '@/components/NavBar.vue';
  import Header from '@/components/Header.vue';
  import Skills from '@/components/Skills.vue';
  import Project from '@/components/Project.vue';
  import Contact from '@/components/Contact.vue'
  import About from '@/components/About.vue';
  import Feedback from '@/components/Feedback.vue';
</script>

<template>
  <div class="h-auto max-w-screen overflow-x-hidden relative bg-gradient-to-r from-m-primary to-m-secondary flex flex-col gap-2"> 
    
    <NavBar/>
     <Header />
    <About />
    <Skills />
    <Project />
    <!-- <Feedback /> -->
    <Contact /> 
    <!-- <a href="" class="sticky z-10 bg-m-accent h-12 aspect-square rounded-full left-0">
      go up
    </a> -->
  </div>
</template>


