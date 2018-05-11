<template>
	<div class="wrapper">
		<div class="index">
			<header class="header-title">
			 	<i></i>
				<span>选择收货地址</span>
			</header>
			<div class="container">
				<div class="search">
					<input type="text" placeholder="请输入地址" @keyup="showAddress()">
				</div>
				<section @click="getLocation">
					<div class="address-cell" v-for="item in addrestList" :data-latitude="item.latitude" :data-longitude="item.longitude">
						<p class="address-cell-name">
							<span>{{item.name}}</span>
						</p>
						<p class="address-cell-locate">{{item.address}}</p>
					</div>
					<!-- <div class="address-cell">
						<p class="address-cell-name">
							<span>西田城购物中心</span>
						</p>
						<p class="address-cell-locate">浙江省杭州市余杭区莫干山路1509号</p>
					</div> -->
				</section>
				<div class="address">
					<div class="title">
						<span>当前地址</span>
					</div>
					<div class="show-address">
						<span class="localaddress">定位失败</span>
						<div class="resetaddress">
							<i></i>
							<span>重新定位</span>
						</div>
					</div>
					<div class="failed-address">
						<img src="" alt="">
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'setAddress',
		data(){
			return {
				addrestList:''
			}
		},
		methods:{
			showAddress:function(){
				let that = this;
				fetch('restapi/bgs/poi/search_poi_nearby_alipay?keyword=西湖区&offset=0&limit=2&latitude=30.34119&longitude=120.095058',{
					method:'GET'
				}).then(function(response){
					response.json().then(function(data){
			            
			            that.addrestList = data;
			            console.log(that.addrestList);
			        });
				}).catch(function(err){
					console.log(err);
				});

			},
			getLocation:function(event){
				let that = this;
				console.log(event.target);
				let parentAddress = '';
				if(event.target.parentNode.nodeName.toLowerCase() == 'div'){
					parentAddress = event.target.parentNode;
				}
				else{
					parentAddress = event.target.parentNode.parentNode;
				}
				that.setLongitude(parentAddress);
			},
			setLongitude:function(target){
				let that = this;
				let data = target.dataset;
				console.log('1'+data.latitude);
				this.$store.commit('latitude',data.latitude);
				this.$store.commit('longitude',data.longitude);
				that.$router.push('/');
			}
		}
	}
</script>
<style scoped lang="less">
	html{
		font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
	}
	.index{
		height: 100%;
	    width: 100%;
	    position: fixed;
	    background: #f4f4f4;
	    overflow: auto;
	}
	.header-title{
		background-image: linear-gradient(90deg,#0af,#0085ff);
		position:sticky;
		top:0;
		span{
			line-height: 1.17333rem;
			color:#fff;
			font-size:.48rem;
		}
	}
	.container{
	background-color: #fff;
	}
	.search{
		padding:.26667rem .4rem;
		input{
			width:100%;
			box-sizing:border-box;
			padding:.24rem .48rem;
			line-height:.48rem;
			font-size:.346667rem;
			border-radius: 5px;
		    border: 1px solid #f2f2f2;
		    background: #f2f2f2;
		    color: #666;
		    outline:none;
		}
	}
	.address-cell{
		text-align:left;
		padding:.26667rem .4rem;
		font-size:.32rem;
		height:100%;
		.address-cell-name{
			font-size:.4rem;
			color:#333;
			margin:0;
			font-weight: bold;
		}
		.address-cell-locate{
			margin:0;
			margin-top:.053rem;
	
		}
	}
	.address{
		.title{
			padding:4vw 0 1.866667vw 4vw;
			background-color:#eee;
			color: #666;
			text-align:left;
			font-size: .346667rem;
    		line-height: .48rem;
		}
	}
	.show-address{
		line-height:1.1733333rem;
		color:#333;
		font-size: .4rem;
		display:flex;
		padding:0 .4533333rem 0 .4rem;
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