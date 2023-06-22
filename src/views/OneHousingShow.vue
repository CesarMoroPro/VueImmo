<template>
        <section class="one-housing"
                v-for="element in housings"
                :key="element.house.id">

                <div v-if="element.house.id === computedHousing">
                        <h2 class="one-housing__title">{{ element.house.title }}</h2>
                </div>


        </section>
</template>

<script>
import sourceData from '../assets/json/dataBetter.json';

export default {
        data() {
                return {
                        housings: sourceData.housings,
                }
        },
        computed: {
                computedHousing() {
                         return sourceData.housings.find(housing => housing.house.id === parseInt(this.$route.params.id));
                }
        }
}
</script>
