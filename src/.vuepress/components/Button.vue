<template>
    <div class="action">
        <!-- <a :href="href">
            {{ text }}
        </a>        -->
        <router-link :to="href" class="button">{{ text }}</router-link> 
    </div>
</template>

<script>
    export default {
        data () {
            return {
                href: '/portfolio/walls',
                text: 'Сделать эскиз'
            }
        }    
    }
</script>