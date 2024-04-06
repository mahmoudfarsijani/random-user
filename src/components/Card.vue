<template>
    <component :is="tag">
        <div v-if="$slots.header" class="text-white">
            <slot name="header" >
                Please Click Button!
            </slot>
        </div>
        <slot/>
        <div v-if="$slots.footer">
            <slot name="footer"/>
        </div>
    </component>
</template>


<script setup>
    import {defineProps} from 'vue';
    import {string} from 'vue-types';

    defineProps({
        tag:string().def('div'),
    })
</script>