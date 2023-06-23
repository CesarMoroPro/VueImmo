<template>

        <HeaderComponent />
        <NavigationComponent />

        <router-view /> <!-- ViewRouter principal, qui appelle la route statique homepage, la route dynamique par catégorie de biens -->

        <FooterComponent />

</template>

<script>
import HeaderComponent from './components/layouts/Header.vue';
import NavigationComponent from './components/navigation/TheNavigation.vue';
import FooterComponent from './components/layouts/Footer.vue';

export default {
        components: {
                HeaderComponent,
                NavigationComponent,
                FooterComponent,
        }
}
</script>
