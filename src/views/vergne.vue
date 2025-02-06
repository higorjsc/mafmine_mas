<template>

    <header
        class="header-container"
    >
        <vueHeader/>
    </header>

    <main
        class="main-container"
    >

        <vueNavBar class="main-elements navbar">
        </vueNavBar>

        <vueInputs
            class="main-elements vueInputs"
        >
        </vueInputs>

        <vueFluxograma
            class="main-elements vueFluxograma"
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
import vueInputs from "@/components/inputsVergne.vue"
import vueBalao from "@/components/balao.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-vergne",
    components: {
        vueNavBar,
        vueInputs,
        vueFluxograma,
        vueIlustrations,
        vueHeader,
        vueFooter
    },
    mixins: [
        vueBalao
    ],
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Vergne")
        aplicarTema("temaVermelho")
    }
}
</script>
