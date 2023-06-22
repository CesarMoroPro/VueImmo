<template>
        <div class="housing-presentation__others-housings__all">
                <div class="housing-presentation__others-housings__title-and-image">
                        <h3 class="housing-presentation__others-housings__title-and-image__title"> {{ allHousings.title }}</h3> <!-- allHousings = la props, qui contient les data enregistrée dans la variable 'house' dans la boucle du SFC Parent -->
                        <img class="housing-presentation__others-housings__title-and-image__image-element" 
                                :src="allHousings.img1"
                                :alt="allHousings.title"
                        />
                </div>
        </div>
</template>

<script>
export default {
        props: {
                allHousings:
                        {
                                type: Object,
                                required: true,
                        }
        }
}
</script>