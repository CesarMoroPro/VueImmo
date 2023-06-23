<template>

</template>

<script>
import sourceData from '../assets/json/dataBetter.json';

export default {
        props: {
                id: {
                        type: Number,
                        required: true,
                },

                houseSlug: {
                        type: String,
                        required: true,
                }
        },

        computed: {
                computedCategory() {
                        return sourceData.housings.find(object => object.id === this.id)
                },

                computedHouse() {
                        return computedCategory.house.find(element => element.title === this.houseSlug)
                }
        }
}
</script>
