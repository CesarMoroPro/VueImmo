<template>
        <section class="one-housing">

                <h2 class="one-housing__title"></h2>

        </section>
</template>

<script>
import sourceData from '../assets/json/dataBetter.json';

export default {
        data() {
                return {
                        housings: sourceData.housings,
                }
        },
}
</script>
