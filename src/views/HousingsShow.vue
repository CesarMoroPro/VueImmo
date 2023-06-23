<template>
        <section class="housing-presentation">
                <h2 class="housing-presentation__title">{{computedOneCategory.category.title}}</h2>

                <div class="housing-presentation__content">
                        <img class="housing-presentation__content__image"
                                :src=computedOneCategory.category.img
                                :alt=computedOneCategory.category.title />
                        <p class="housing-presentation__content__resume">{{ computedOneCategory.category.resume }}</p>
                </div>

        </section>

        <AllHousingsByCategoryComponent
                :eachCategories="computedOneCategory"
        />

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
                computedOneCategory() {
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