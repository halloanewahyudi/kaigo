
<script setup>
import { ref } from 'vue';
import imageOne from '@/assets/botol-1.png' ;
import imageTwo from '@/assets/botol-2.png' ;
import imageThree from '@/assets/botol-3.png' ;
import imageFour from '@/assets/botol-4.png' ;
import imageFive from '@/assets/botol-5.png' ;
const products =  ref( [
    {
        title:'Product One',
        description:'Exercitationem aut perferendis laborum laboriosam eveniet',
        image:imageOne,
    },
    {
        title:'Product Two',
        description:' Ea necessitatibus adipisci consequuntur vel provident',
        image:imageTwo,
    },
    {
        title:'Product Three',
        description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        image:imageThree,
    },
    {
        title:'Product Four',
        description:' Vero beatae, nulla at rerum eveniet laboriosam tempore cupiditate quidem',
        image:imageFour,
    },
    {
        title:'Product Five',
        description:' Fuga earum atque. Totam, doloribus reiciendis! Magnam alias deleniti doloremque',
        image:imageFive
    }
])
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-3  max-w-[960px] mx-auto">
        <div class="flex gap-3 flex-wrap lg:flex-nowrap items-center p-3 lg:p-4 hover:bg-gray-100 duration-300 rounded-lg" v-for="item in products" :key="item">
            <img :src="item.image" alt="" class="h-28">
            <div>
               <a href="#"> <h4 class="text font-medium text-blue-500">{{ item.title }}</h4> </a>
                <div>{{ item.description }}</div>
            </div>
        </div>
    </div>
</template>