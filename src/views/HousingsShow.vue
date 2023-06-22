<template>
        <section class="housing-presentation">
                <h2 class="housing-presentation__title">{{computedHousing.category.title}}</h2>

                <div class="housing-presentation__content">
                        <img class="housing-presentation__content__image"
                                :src=computedHousing.category.img
                                :alt=computedHousing.category.title />
                        <p class="housing-presentation__content__resume">{{ computedHousing.category.resume }}</p>
                </div>

        </section>

        <section class="housing-presentation__others-housings">

                <h2 class="housing-presentation__title" 
                        v-if="computedHousing.category.gender === 'female' ">
                        Toutes nos {{ computedHousing.category.title }}
                </h2>
                <h2 class="housing-presentation__title" 
                        v-else-if="computedHousing.category.gender === 'male' ">
                        Tous nos {{ computedHousing.category.title }}
                </h2>

                <AllHousingsByCategoryComponent 
                        v-for="house in computedHousing.house"
                        :key="house.title"
                        :allHousings="house"
                />

        </section>

</template>

<script>
import sourceData from '../assets/json/dataBetter.json';
import AllHousingsByCategoryComponent from './AllHousingsByCategory.vue';

export default {
        data() {
                return {
                        housingsObject: sourceData.housings,
                }
        },

        computed: {
                computedHousing() {
                        return sourceData.housings.find(housing => housing.id === this.id);
                },
        },

        props: {
                id: {
                        "type": Number,
                        "required": true,
                }
        },

        components: {
                AllHousingsByCategoryComponent,
        }
}

</script>