<script setup>
import { ref } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import Slideshow from '../components/Slideshow.vue'
import Sekilas from '@/components/Sekilas.vue';
import Section2 from '@/components/Section2.vue';
import Blog from '@/components/Blog.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';


const data = ref([
  {
    title:'Sebuah Judul yang pertama',
  description:'sebuah description ',
  image:'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title:'Sebuah Judul yang kedua',
  description:'sebuah description yang ke dua',
  image:'https://images.pexels.com/photos/4315575/pexels-photo-4315575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
 
])
</script>

<template>
  <main>
   <Slideshow > 
     <div class="hs-carousel-slide   flex flex-col items-center justify-center p-6 " :style="{
      backgroundImage:`url(${item.image})`,
      backgroundSize:'cover',
      backgroundPosition:'center'
      }" v-for="(item,index) in data" :key="index">
      <div class="layer"></div>
      <div class=" text-center slide-content">
        <h2 class="text-3xl font-medium">{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <template #bullet>
      <div v-for="item in data" :key="item">
        <div class="rounded-full bg-blue-400 w-3 h-3 hs-carousel-active:bg-blue-700"></div>
      </div>
    </template>
   </Slideshow>
   <Sekilas />
   <Blog />
   <Contact />
   <Section2 />
<Footer />
  </main>
</template>
<style scoped>
 .hs-carousel-slide.active{
  @apply scale-110 duration-300 delay-700;
 }
 .hs-carousel-slide .slide-content{
  @apply translate-y-[100px] relative z-40;
 }
 .hs-carousel-slide.active .slide-content {
  @apply translate-y-0 duration-300 delay-500;
 }
 .hs-carousel-slide.active .layer{
  @apply  absolute w-full h-full bg-black bg-opacity-30 top-0 left-0 z-0;
 }
</style>
