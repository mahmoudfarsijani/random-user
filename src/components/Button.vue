<template>
    <component :is="tag" :class="['btn',`btn--${isIconOnly ? 'default' : 'simple'}`]">
        <slot v-if="!isIconOnly"/>
        <Icon v-if="icon" :name="icon"/>
    </component>
</template>



<script setup>
    import { defineProps } from 'vue';
    import {bool, oneOf, string} from 'vue-types';

    import Icon from '@/components/Icon.vue'


    defineProps({
        isIconOnly:bool().def(false),
        icon:string(),
        tag:oneOf(['button','a','span','router-link']).def('button')
    })


</script>

<style scoped>
    .btn{
        @apply cursor-pointer rounded-none outline-none
    }

    .btn--default{
        @apply rounded-full flex justify-center items-center p-[10px]
    }

    .btn--simple {
        @apply px-[10px] py-[7px] flex 
        justify-between items-center rounded-md 
        capitalize bg-sky hover:bg-opacity-45
         transition-all duration-300 shadow-md text-white
    }
</style>