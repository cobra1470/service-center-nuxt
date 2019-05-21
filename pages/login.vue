<template>
    <div>
        <p>ablout</p>

        <nuxt-link to="./">home</nuxt-link>

         <el-button type="danger" plain>危险按钮</el-button>

         <span class="demonstration">大于 7 页时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
    </div>
</template>

<script>
	import md5 from "js-md5"
    export default {
		layout: "login",
        async asyncData ({ $axios }) {
			let pwdOld = "a123456true";
			md5(pwdOld)
			let hash = md5.create();
			hash.update(pwdOld);
			let pwd = hash.hex(pwdOld);
			let { data } = await $axios.$POST({
				api_name:"login",
				params:{
					sysCode:"eRecord",
					loginName:"dzda01",
					password:pwd,
					client:"Web"
				}
			})
			return { title: data }
		},
        mounted() {

        },
    }
</script>

<style lang="scss" scoped>

</style>