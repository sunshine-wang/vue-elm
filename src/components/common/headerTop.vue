<template>
	<div>
		<div class="header">
			<router-link to="/">
				<i>&lt;</i>
			</router-link>
			<span>{{fatherComponent}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:'headerTop',
		props:['fatherComponent']
	}
</script>
<style lang="less" scoped>
	.header{
		height:1.17333rem;
		background-image:linear-gradient(90deg,#0af,#0085ff);
		i{
			position: absolute;
		    left: .26667rem;
		    top: .26667rem;
		    font-style: normal;
		    color: #fff;
		    font-size: .4266667rem;
		}
		span{
			font-size: .48rem;
		    line-height: 2.44;
		    color: #fff;
		    font-weight: bold;
		}
	}
</style>