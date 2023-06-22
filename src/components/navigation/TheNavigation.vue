<template>

        <nav class="navigation" >
                        <router-link class="navigation__link"
                                v-for="housing in housings"
                                :key="housing.id"
                                :to="{name: 'housings.show', params:{id: housing.id, slug: housing.name}}">{{ housing.name }}</router-link>
        </nav>

</template>

<script>
import sourceData from '../../assets/json/dataBetter.json';

export default {
        data() {
                return {
                        housings: sourceData.housings,
                }
        },
}

</script>