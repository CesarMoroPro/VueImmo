<template>

        <footer class="footer">
                <p>Vue 3 Immo - Projet fictif d'entraînement à Vue.js 3 avec Vue Router.</p>
                <p>Copyright - {{ automaticYear }}</p>
                <p>César MORO</p>
                <p>Développeur JavaScript - Vue.js 3</p>
                <a href="https://cesar-moro.fr">Portfolio</a>
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