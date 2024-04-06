<template>
    <Card tag="li" v-if="user" class= "w-[300px] h-[260px] flex flex-col justify-center items-center bg-black bg-opacity-25 px-[30px] py-[15px] rounded-xl shadow-lg" >
        <template #header>
            <div v-if="user.picture?.large" class="pt-[10px] rounded-full">
                <Img :src="user.picture?.large" :alt="user.gender" loading="lazy" class="rounded-full"/>
            </div>
        </template>
        <div class="mt-[10px]">
            <h2 class="text-center text-white capitalize" v-if="user.name?.first || user.name?.last">
                {{ user.name?.first }} {{ user.name?.last }}
            </h2>
        </div>
        <template #footer>
            <h3 class="text-center text-white capitalize" v-if="user?.gender || user.location?.country">
                {{ user?.gender }}
                <br>
                {{ user.location?.country }}
            </h3>
        </template>
    </Card>
</template>




<script setup>
    import { defineProps } from 'vue';
    import {array, shape, string,object,func} from 'vue-types';

    import Img from '@/components/Img.vue'
    import Card from '@/components/Card.vue'

    const props = defineProps({
        tag:string(),
        user:object({
            email:string(),
            gender:string(),
            picture:object({
                large:string()
            }),
            name:object({
                first:string(),
                last:string()
            }),
            location:shape({
                country:string(),
                city:string()
            })
        })
    })

    console.log(props.user?.email);
</script>