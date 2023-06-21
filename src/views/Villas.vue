<template>

        <section class="housing-presentation">
                <h2 class="housing-presentation__title">Villas de rêves</h2>

                <div 
                        v-for="category in categories"
                        :key="category.id"> <!-- Cette div ne sert qu'à boucler pour créer les propriétés nécessaires -->

                        <div class="housing-presentation__content"
                                v-show="category.name == 'villas'">
                                <img class="housing-presentation__content__image" :src="category.img" />
                                <p class="housing-presentation__content__resume">{{ category.resume }}</p>
                        </div>
        
                </div>
                
                <div class="housing-presentation__others-housing">
                        <h2>Toutes nos villas</h2>
                        <div class="housing-presentation__others-housing__title-and-image">
                                <div class="housing-presentation__others-housing__title-and-image__title-element"
                                        v-for="villa in villas"
                                        :key="villa.id">
                                        {{ villa.title }}

                                        <img class="housing-presentation__others-appartements__title-and-image__image-element" :src="villa.img1" />
                                </div>
                        </div>
                </div>

        </section>

</template>

<script>
import dataSource from '../assets/json/data.json';

export default {
        data() {
                return {
                        villas: dataSource.villas,
                        categories: dataSource.categories,
                }
        },
}

</script>