
<template>

    <section class="section-inputs-acessos">
        <!-- TITULO SEÇÃO -->
        <h2
            class="titulo-section-acessos"
        >
            {{ $t('tituloInputs') }}
        </h2>

        <!-- BOTÃO SWITCH -->
        <switchLanguage
            class="main-elements switch-language"
        />

        <!--LOGISTICA-->
        <div class='container-inputs-acessos' id="logistica">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('logisticaTituloMoser') }}
            </h3>
            <span>{{ $t('logisticaDescriptionMoser') }}</span>
            <div class="radio-container">
                <!-- SIM -->
                <input type="radio" v-model="moser.logistica" value="sim" id="logistica-sim">
                <label for="logistica-sim" name='logisticaInput' class="radio-label" id='logistica-moser-sim'></label>
                <span>{{ $t('sim') }}</span>
                <!-- NÃO -->
                <input type="radio"  v-model="moser.logistica" value="nao" id="logistica-nao">
                <label for="logistica-nao" name='logisticaInput' class="radio-label" id='logistica-moser-nao'></label>
                <span>{{ $t('nao') }}</span>
            </div>
        </div>
        <!--ROCK CONDITIONS-->
        <div class='container-inputs-acessos' id="rm">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('rmTituloMoser')}}
            </h3>
            <span>{{ $t('rmDescriptionMoser') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="rm" v-model="moser.rockMass" value="menor" id="rm-menor">
                <label for="rm-menor" class="radio-label" id='rm-moser-maior'></label>
                <span>{{ $t('rmMenorMoser') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="rm" v-model="moser.rockMass" value="maior" id="rm-maior">
                <label for="rm-maior" class="radio-label" id='rm-moser-maior'></label>
                <span>{{ $t('rmMaiorMoser') }}</span>
            </div>
        </div>
        <!-- SURFACE MATERIALS-->
        <div class='container-inputs-acessos' id="sm">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('smTituloMoser')}}
            </h3>
            <span>{{ $t('smDescriptionMoser') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="moser.surfaceMaterial" value="menor" id="sm-menor">
                <label for="sm-menor" class="radio-label" id='sm-moser-menor'></label>
                <span>{{ $t('smMenorMoser') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="moser.surfaceMaterial" value="maior" id="sm-maior">
                <label for="sm-maior" class="radio-label" id='sm-moser-maior'></label>
                <span>{{ $t('smMaiorMoser') }}</span>
            </div>
        </div>
        <!-- OPEN PIT -->
        <div class='container-inputs-acessos' id="op">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('opTituloMoser')}}
            </h3>
            <span>{{ $t('opDescriptionMoser') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="op" v-model="moser.openPit" value="sim" id="op-sim">
                <label for="op-sim" class="radio-label" id="op-moser-sim"></label>
                <span>{{ $t('sim') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="op" v-model="moser.openPit" value="nao" id="op-nao">
                <label for="op-nao" class="radio-label" id="op-moser-nao"></label>
                <span>{{ $t('nao') }}</span>
            </div>
        </div>
        <!-- PROFUNDIDADE -->
        <div class='container-inputs-acessos' id="depth">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('depthTituloMoser') }}
            </h3>
            <span>{{ $t('depthDescriptionMoser') }}</span>
            <select v-model="moser.depth" class="depth" id="depth-moser">
                <option value=""></option>
                <option value="menor">
                    {{ $t('depthMenorMoser') }}
                </option>
                <option value="entre">
                    {{ $t('depthEntreMoser') }}
                </option>
                <option value="maior">
                    {{ $t('depthMaiorMoser') }}
                </option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <div class='container-inputs-acessos' id="prod">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('prodTituloMoser') }}
            </h3>
            <span> {{ $t('prodDescriptionMoser') }}</span>
            <select v-model="moser.prod" class="prod" id="prod-moser">
                <option value=""></option>
                <option value="menor">
                    {{ $t('prodMenorMoser') }}
                </option>
                <option value="entre">
                    {{ $t('prodEntreMoser') }}
                </option>
                <option value="maior">
                    {{ $t('prodMaiorMoser') }}
                </option>
            </select>
        </div>
    </section>

</template>

<script>

import switchLanguage from "@/components/switchLanguage.vue"
import inputsMixin from "@/components/mixins/inputsMixin.vue"

export default {
    name: "vue-inputs-moser",
    components: {
        switchLanguage
    },
    mixins: [
        inputsMixin
    ],
    data() {
        return {
            moser: {
                logistica: "",
                rockMass: "",
                surfaceMaterial: "",
                openPit: "",
                prod: "",
                depth: "",
                resultado: ""
            }
        }
    },
    watch: {
        moser: {
            handler() {
                this.resultado = ""
                // Desabilita os inputs e altera a opacidade das divs
                this.disableObject(["rm", "sm", "op", "depth", "prod"])
                // Muda a cor de todos os elementos para o padrão definido
                this.setDefaultColor()
                // Oculta as todas as imagens não default
                this.defaultImages()
                // Chama a função com a lógica do fluxograma
                this.newValue()
                // Altera o valor de moser na store VueExe
                this.$store.dispatch("changeInputsAcessos", { metodo: "moser", value: this.moser })
            },
            deep: true // deep: true → O que estiver dentro da variável será observado
        }
    },
    mounted() {
        // Muda a cor de todos os elementos para o padrão definido
        this.setDefaultColor()
        // Desabilita todas as divs e inputs não-inicias
        this.disableObject(["rm", "sm", "op", "depth", "prod"])
    },
    methods: {

        newValue() {
            // LOGISTICA
            if (this.moser.logistica === "sim") {
                this.enableObjects("rm")
                this.setColorGreen(["logistica"])
            } else
                if (this.moser.logistica === "nao") {
                    this.resultado = "resultadoShaftMoser"
                    this.showImages(["shaft", "superficie"])
                    this.setColorRed()
                    this.setColorGreen(["logistica", "shaft"])
                }

            // ROCK MASS
            if (this.moser.logistica === "sim" && this.moser.rockMass === "menor") {
                this.enableObjects("sm")
                this.setColorGreen(["logistica", "rockMass"])
            } else
                if (this.moser.logistica === "sim" && this.moser.rockMass === "maior") {
                    this.resultado = "resultadoShaftMoser"
                    this.showImages(["shaft"])
                    this.setColorRed()
                    this.setColorGreen(["logistica", "rockMass", "shaft"])
                }

            // SURFACE MATERIAL
            if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "maior") {
                this.resultado = "resultadoShaftMoser"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "shaft"])
            } else
                if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor") {
                    this.enableObjects("op")
                    this.setColorGreen(["logistica", "rockMass", "surfaceMaterial"])
                }

            // ACESSO POR OPEN PIT
            if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && (this.moser.openPit === "sim" || this.moser.openPit === "nao")) {
                this.enableObjects("depth")
                this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit"])
            }

            if (this.moser.openPit === "sim") {
                this.showImages(["superficiePit"])
            }

            // PROFUNDIDADE OPEN PIT NÃO
            if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && this.moser.openPit === "nao" && (this.moser.depth === "entre" || this.moser.depth === "maior")) {
                this.resultado = "resultadoShaftMoser"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit", "depthCenter", "shaft"])
            } else
                if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && this.moser.openPit === "nao" && this.moser.depth === "menor") {
                    this.enableObjects("prod")
                    this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit", "depthCenter"])
                }

            // PROFUNDIDADE OPEN PIT SIM
            if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && this.moser.openPit === "sim" && this.moser.depth === "maior") {
                this.resultado = "resultadoShaftMoser"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit", "depthLeft", "shaft"])
            } else
                if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && this.moser.openPit === "sim" && (this.moser.depth === "menor" || this.moser.depth === "entre")) {
                    this.enableObjects("prod")
                    this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit", "depthLeft"])
                }

            // PRODUCTION OPEN PIT NÃO
            if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && this.moser.openPit === "nao" && this.moser.depth === "menor" && this.moser.prod === "menor") {
                this.resultado = "resultadoRampaMoser"
                this.showImages(["rampa", "truck"])
                this.setColorRed()
                this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit", "depthCenter", "prodCenter", "rampa"])
            } else
                if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && this.moser.openPit === "nao" && this.moser.depth === "menor" && (this.moser.prod === "entre" || this.moser.prod === "maior")) {
                    this.resultado = "resultadoShaftMoser"
                    this.showImages(["shaft"])
                    this.setColorRed()
                    this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit", "depthCenter", "prodCenter", "shaft"])
                }

            // PRODUCTION OPEN PIT SIM
            if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && this.moser.openPit === "sim" && (this.moser.depth === "menor" || this.moser.depth === "entre") && (this.moser.prod === "menor" || this.moser.prod === "entre")) {
                this.resultado = "resultadoRampaMoser"
                this.showImages(["rampaPit", "truck"])
                this.setColorRed()
                this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit", "depthLeft", "prodLeft", "rampa"])
            } else
                if (this.moser.logistica === "sim" && this.moser.rockMass === "menor" && this.moser.surfaceMaterial === "menor" && this.moser.openPit === "sim" && (this.moser.depth === "menor" || this.moser.depth === "entre") && this.moser.prod === "maior") {
                    this.resultado = "resultadoShaftMoser"
                    this.showImages(["shaft"])
                    this.setColorRed()
                    this.setColorGreen(["logistica", "rockMass", "surfaceMaterial", "openPit", "depthLeft", "prodLeft", "shaft"])
                }
        }
    }
}

</script>
