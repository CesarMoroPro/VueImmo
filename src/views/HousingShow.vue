<template>
        <div>
                <h2>{{housing.category.title}}</h2>

                <div>
                        <img 
                                style="width: 300px; height: 150px; object-fit: cover;" 
                                :src="housing.category.img" />
                        <p>{{ housing.category.resume }}</p>
                </div>
        </div>

</template>

<script>
import sourceData from '../assets/json/dataBetter.json';

export default {
        computed: {
                housingId() {
                        return parseInt(this.$route.params.id);
                },

                housing() {
                        return sourceData.housings.find(housing => housing.id === this.housingId);
                }
        }
}

</script>