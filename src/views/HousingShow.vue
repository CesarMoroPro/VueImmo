<template>
        <section class="housing-presentation">
                <h2 class="housing-presentation__title">{{housing.category.title}}</h2>

                <div class="housing-presentation__content">
                        <img class="housing-presentation__content__image"
                                :src=housing.category.img
                                :alt=housing.category.title />
                        <p class="housing-presentation__content__resume">{{ housing.category.resume }}</p>
                </div>

                <div class="housing-presentation__others-housings">
                        <h2 class="housing-presentation__title" 
                                v-if="housing.category.gender === 'female' ">
                                Toutes nos {{ housing.category.title }}
                        </h2>
                        <h2 class="housing-presentation__title" 
                                v-else-if="housing.category.gender === 'male' ">
                                Tous nos {{ housing.category.title }}
                        </h2>

                        <div class="housing-presentation__others-housings__all">
                                <div class="housing-presentation__others-housings__title-and-image"
                                        v-for="element in housing.house"
                                        :key="housing.house.id">
                                        <h3 class="housing-presentation__others-housings__title-and-image__title">{{ element.title }}</h3>
                                        <img class="housing-presentation__others-housings__title-and-image__image-element" 
                                                :src=element.img1 
                                                :alt=element.title />
                                </div>
                        </div>
                </div>
        </section>

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