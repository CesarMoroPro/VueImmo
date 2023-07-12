<template>
        <section class="housing-presentation__others-housings">

                <h2 class="housing-presentation__title" 
                        v-if="eachCategories.category.gender === 'female' " @click="console.log(eachCategories.houses)">
                        Toutes nos {{ eachCategories.category.title }}
                </h2>
                <h2 class="housing-presentation__title" 
                        v-else-if="eachCategories.category.gender === 'male' ">
                        Tous nos {{ eachCategories.category.title }}
                </h2>

                <div class="housing-presentation__others-housings__all-housings">
                        <router-link
                                class="housing-presentation__others-housings__all-housings__title-and-image"
                                v-for="oneHouse in eachCategories.houses"
                                :key="oneHouse.id"
                                :to="{name: 'one.housing.show', params:{ houseSlug: oneHouse.title }}"
                        > <!--  houseSlug = props dans le SFC OneHousingShow -->
                                        <h3 class="housing-presentation__others-housings__all-housings__title-and-image__title" @click="console.log(oneHouse)"> {{ oneHouse.title }}</h3>
                                        <img class="housing-presentation__others-housings__all-housings__title-and-image__image-element" 
                                                :src="oneHouse.img1"
                                                :alt="oneHouse.title"
                                        />
                        </router-link>
                </div>

        </section>
</template>

<script>
export default {
        props: {
                eachCategories:
                        {
                                type: Object,
                                required: true,
                        },
        },
}
</script>