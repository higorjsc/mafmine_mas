import { createStore } from "vuex"

export default createStore({
    state: {
        application: "metodoAcesso",
        language: "pt", // Idioma padrão
        resultado: "", // resultado do fluxograma de escolha de acessos
        metodo: "", // Metodo/view atual
        popUp: null, // popUp aberto (null = nenhum)
        balao: "", // Variável de texto do balao help
        viewProgress: 1,
        tabViewAtual: null,
        inputsAcessos: {
            moser: {},
            cardozo: {},
            vergne: {}
        },
        tema: {},
        color: {},
        fontColor: {},
        ilustrations: {}
    },
    mutations: {
        setLanguage(state, data) {
            state.language = data
        },
        setColor(state, data) {
            state.color = data
        },
        setFontColor(state, data) {
            state.fontColor = data
        },
        setIlustrations(state, data) {
            state.ilustrations = data
        },
        setResultado(state, data) {
            state.resultado = data
        },
        setMetodo(state, data) {
            state.metodo = data
        },
        setBalao(state, data) {
            state.balao = data
        },
        setPopUp(state, data) {
            state.popUp = data
        },
        setInputsAcessos(state, { metodo, data }) {
            state.inputsAcessos[metodo] = data
        }
    },
    getters: {
        currentLanguage(state) {
            return state.language
        },
        currentInputsAcesso(state) {
            return state.inputsAcessos
        },
        currentColor(state) {
            return state.color
        },
        currentFontColor(state) {
            return state.fontColor
        },
        currentIlustrations(state) {
            return state.ilustrations
        },
        currentResultado(state) {
            return state.resultado
        },
        currentMetodo(state) {
            return state.metodo
        },
        currentBalao(state) {
            return state.balao
        },
        currentPopUp(state) {
            return state.popUp
        },
        currentApplication(state) {
            return state.application
        }
    },
    actions: {
        changeLanguage(context, data) {
            context.commit("setLanguage", data)
        },
        changeColor(context, data) {
            context.commit("setColor", data)
        },
        changeFontColor(context, data) {
            context.commit("setFontColor", data)
        },
        changeIlustrations(context, data) {
            context.commit("setIlustrations", data)
        },
        changeResultado(context, data) {
            context.commit("setResultado", data)
        },
        changeMetodo(context, data) {
            context.commit("setMetodo", data)
        },
        changeBalao(context, data) {
            context.commit("setBalao", data)
        },
        changePopUp(context, data) {
            context.commit("setPopUp", data)
        },
        changeViewProgress(context, data) {
            context.commit("setViewProgress", data)
        },
        changeTabViewAtual(context, data) {
            context.commit("setTabViewAtual", data)
        },
        changeInputsAcessos(context, { metodo, data }) {
            context.commit("setInputsAcessos", { metodo, data })
        }
    }
})