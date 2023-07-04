<template>
        <!-- Premier bloc = présentation générale de la catégorie cliquée -->
        <section class="housing-presentation">
                <h2 class="housing-presentation__title">{{computedOneCategory.category.title}}</h2>

                <div class="housing-presentation__content">
                        <img class="housing-presentation__content__image"
                                :src=computedOneCategory.category.img
                                :alt=computedOneCategory.category.title />
                        <p class="housing-presentation__content__resume">{{ computedOneCategory.category.resume }}</p>
                </div>
        </section>

        <!-- Deuxième bloc = Affichage des miniatures des biens de la catégorie  cliquée -->
        <section class="housing-presentation__others-housings">
                <!-- H2 dynamique selon le genre de la catégorie -->
                <h2 class="housing-presentation__title" 
                        v-if="computedOneCategory.category.gender === 'female' "
                >
                        Toutes nos {{ computedOneCategory.category.title }}
                </h2>
                <h2 class="housing-presentation__title" 
                        v-else-if="computedOneCategory.category.gender === 'male' "
                >
                        Tous nos {{ computedOneCategory.category.title }}
                </h2>

                <div class="housing-presentation__others-housings__all-housings">
                        <router-link
                                class="housing-presentation__others-housings__all-housings__title-and-image"
                                v-for="oneHouse in computedOneCategory.houses"
                                :key="oneHouse.id"
                                :to="{name: 'one.housing.show', params:{id: oneHouse.id, houseSlug: oneHouse.title }}"
                        > <!-- houseSlug = props dans le SFC OneHousingShow -->
                                        <h3 class="housing-presentation__others-housings__all-housings__title-and-image__title"> {{ oneHouse.title }}</h3>
                                        <img class="housing-presentation__others-housings__all-housings__title-and-image__image-element" 
                                                :src="oneHouse.img1"
                                                :alt="oneHouse.title"
                                        />
                        </router-link>
                </div>

        </section>

        <AllHousingsByCategoryComponent
                :eachCategories="computedOneCategory"
        />

</template>



<script>
import sourceData from '../assets/json/dataBetter.json';
import NavigationComponent from '../components/navigation/TheNavigation.vue';
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
                NavigationComponent,
                AllHousingsByCategoryComponent,
        }
}

</script>