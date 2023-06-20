<template>

        <footer class="footer">
                <p>César MORO - Vue 3 Immo</p>
                <p>Projet fictif d'entraînement à Vue.js 3 avec Vue Router.</p>
                <p>Développeur JavaScript - Vue.js 3</p>
                <a href="https://cesar-moro.fr">Portfolio</a>
                <p>Copyright - {{ automaticYear }}</p>
        </footer>

</template>

<script>
export default {
        data() {
                return {
                        automaticYear: null,
                }
        },

        mounted() {
                window.addEventListener('load', () => {
                        const completeDate = new Date();
                        return this.automaticYear = completeDate.getFullYear();
                });
        }
}
</script>