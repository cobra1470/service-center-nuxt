<template>
    <section class="container">
        <div>
            <logo />
            <h1 class="title">
            {{ title }} -- {{resData}}
            </h1>
            <h2 class="subtitle">
            My awe-inspiring Nuxt.js project
            </h2>
            <div class="links">
            <a
                href="https://nuxtjs.org/"
                target="_blank"
                class="button--green"
            >Documentation</a>
            <a
                href="https://github.com/nuxt/nuxt.js"
                target="_blank"
                class="button--grey"
            >GitHub</a>
            </div>

            <nuxt-link to="./about">about</nuxt-link>
        </div>
    </section>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import Logo from '~/components/Logo.vue'


    export default {
        components: {
            Logo
        },
        
        // async asyncData ({ $axios }) {
		// 	let { data } = await $axios.$POST({
		// 		api_name:"login",
		// 		params:{
		// 			sysCode:"eRecord",
		// 			loginName:"dzda01",
		// 			password:pwd,
		// 			client:"Web"
		// 		}
		// 	})
		// 	return { title: data }
		// },

        data() {
            return {
                title: "service-center-nuxt",
                resData:""
            }
        },

        computed: {
            ...mapState({
                user:state => state.login.user,
            })
        },

        mounted() {
            // this.getUserData();
        },

        methods: {
            ...mapActions({
                setUser: "login/setUser"
            }),

            getUserData(){
                let user = {
                    id:"001",
                    name: "Dylan"
                };
                this.$axios.$POST({
                    api_name:"queryCount",
                    params:{}
                }).then((res)=>{
                    console.log(res)
                    this.resData = res.data[0].distName
                    this.setUser(user)
                })
                .catch((error)=>{
                    console.log(error)
                })

            }
        },

       
    }
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
