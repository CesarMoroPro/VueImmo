<template>

        <section class="villas">
                <h2 class="villas_title">Villas de rêves</h2>

                <div class="villas__property" 
                        v-for="property in properties"
                        :key="property.id">

                        <div class="villas__property__title">
                                <h3 class="villas__property__title__element">{{ property.name }}</h3>
                        </div>

                        <div class="villas__property__content">
                                <img class="villas__property__content__main-img" :src=property.img1 />
                                <p class="villas__property__content__resume">{{ property.resume }}</p>

                                <div class="villas__property__content__others-img">
                                        <img class="villas__property__content__others-img__one-element" :src=property.img2 />
                                        <img class="villas__property__content__others-img__one-element" :src=property.img3 />
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
                        properties: dataSource.properties,
                }
        },
}

</script>