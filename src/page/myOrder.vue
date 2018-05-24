<template>
	<div class="wrapper">
		<header class="top">
			<header-top father-component="订单"></header-top>
		</header>
		<div class="container">
			<div class="notLogin">
				<img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="">
				<span >登陆后查看外卖订单</span>
				<router-link to="/login" class="login-btn">立即登录</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import headerTop from '../components/common/headerTop'

	export default{
		name:'order',
		data(){
			return{

			}
		},
		components:{
			headerTop
		},
		methods:{

		}
	}
</script>
<style lang="less" scoped>
	html{
		background-color: #f5f5f5;
	}
	.container{
		.notLogin{
			padding-top:2.666667rem;
			display: flex;
			align-items:center;
			justify-content:center;
			flex-direction: column;
			img{
				display: block;
				width:5.333333rem;
			}
			span{
				margin: 3.333333vw 0 2.666667vw;
			    color: #6a6a6a;
			    font-weight: 400;
			    font-size: .453333rem;
			}
			.login-btn{
				background-color:#56d176;
				color:#fff;
				padding: .266667rem;
				border-radius: .053333rem;
				font-size: .384rem;
				text-align: center;
				display:block;
				min-width: 3.2rem;
			    border: 0;
			    outline: 0;
			    text-decoration: none;
			}
		}
	}
</style>