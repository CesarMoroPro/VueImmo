<template>

        <HeaderComponent />
        <NavigationComponent />

        <router-view /> <!-- ViewRouter principal, qui appellent les routes homepage, villas, appartements, chalets -->

        <NavigationComponent />

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
