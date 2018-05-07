<template>
	<div class="wrapper">
		<header class="header-title">
		 	<i></i>
			<span>123</span>
		</header>
		<div class="container">
			<div class="search">
				<input type="text">
			</div>
			<div class="address">
				<div class="title">
					<span></span>
				</div>
				<div class="show-address">
					<span class="localaddress"></span>
					<div class="resetaddress">
						<i></i>
						<span></span>
					</div>
				</div>
				<div class="failed-address">
					<img src="" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	//import getData from '../services/getData.js'
	//console.log(getData);
	export default{
		name:'setAddress',
		data(){
			return {
				//addressData:getData.addressData()
			}
		}
	}
</script>
<style scoped lang="less">
	.header-title{
		background-image: linear-gradient(#0af,#0085ff);
		span{
			line-height: 1.17333rem;
			color:#fff;
			font-size:.48rem;
		}
	}
	.search{
		padding:.26667rem .4rem;
		input{
			padding:.24rem .48rem;
			line-height:.48rem;
			font-size:.346667rem;
		}
	}
	.address{
		.title{
			padding:4vw 0 1.866667vw 4vw;
			background-color:#eee;
			color: #666;
		}
	}
	.show-address{
		height:11.733333vw;
		color:#333;
		font-size: .4rem;
		disply:flex;
		.localaddress{
			flex:1;
			text-align: left;
		}
		.resetaddress{
			flex:1;
			text-align:right;
		}
	}


</style>