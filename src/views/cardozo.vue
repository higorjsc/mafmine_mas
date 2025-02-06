<template>


    <header
        class="header-container"
    >
        <vueHeader/>
    </header>

    <main
        class="main-container"
    >

        <vueNavBar
            class="main-elements navbar"
        >
        </vueNavBar>

        <vueInputs class="main-elements inputs"></vueInputs>

        <vueFluxograma
            class="main-elements fluxograma"
        />

        <vueIlustrations
            class="main-elements resultados"
        />

    </main>


    <vueFooter/>


</template>

<script>
import vueNavBar from "@/components/navbar.vue"
import vueHeader from "@/components/header.vue"
import vueFooter from "@/components/footer.vue"
import vueFluxograma from "@/components/fluxograma.vue"
import vueIlustrations from "@/components/ilustrations.vue"
import vueInputs from "@/components/inputsCardozo.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-cardozo",
    components: {
        vueNavBar,
        vueInputs,
        vueFluxograma,
        vueHeader,
        vueFooter,
        vueIlustrations
    },
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Cardozo")
        aplicarTema("temaVermelho")
    }
}
</script>
<style scoped>

</style>