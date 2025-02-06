<template>

    <div id="app" ref="app">

        <RouterView></RouterView>
        <vueBalao
            class="balao"
        />
        <vuePopUp/>

    </div>

</template>

<script>
import vueBalao from "@/components/balao.vue"
import vuePopUp from "@/components/popUp.vue"

export default {
    name: "vue-app",
    components: {
        vueBalao,
        vuePopUp
    }
}
</script>
