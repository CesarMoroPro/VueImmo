<template>

        <section class="villas-presentation"
                v-for="category in categories"
                :key="category.id">
                <h2 class="villas-presentation__title">{{ category.title }}</h2>

                <div class="villas-presentation__content">
                        <img class="villas-presentation__content__image" :src="category.img" />
                        <p class="villas-presentation__content__resume">{{ category.resume }}</p>
                </div>

                <div class="villas-presentation__others-villas">
                        <h2>Toutes nos villas</h2>
                        <div class="villas-presentation__others-villas__images"
                                v-for="property in properties"
                                :key="property.id">
                                <img class="villas-presentation__others-villas__images__element" 
                                        :src="property.img1" />
                        </div>
                </div>
        </section>

</template>

<script>
import dataSource from '../assets/json/data.json';

export default {
        data() {
                return {
                        properties: dataSource.properties,
                        categories: dataSource.categories,
                }
        },
}

</script>