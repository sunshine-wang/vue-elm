<template>
	<div class="wrapper">
		<header class="shopdetail-header">
			<a href="">
				<use>
					<svg viewBox="0 0 20 32" id="arrow-left" width="100%" height="100%"><path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path></svg>
				</use>
			</a>
			<img src="https://fuss10.elemecdn.com/5/90/746c155e09978c377d09f7831ef96jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
		</header>
		<div class="shop-content">
			<div class="shop-name">{{shopDetail.name}}</div>
			<div class="shop-info">
				<span>{{shopDetail.rating}}</span>
				<span>月售{{shopDetail.recent_order_num}}单</span>
				<span>蜂鸟专送</span>
				<span>约{{shopDetail.order_lead_time}}分钟</span>
				<span>距离{{shopDetail.distance}}</span>
			</div>
			<div class="shop-des text-ellipsis">{{shopDetail.promotion_info}}</div>
			<div class="shop-activity">
				<div class="activity-list text-ellipsis" v-for="activity in shopDetail.activities">
					<span>{{activity.icon_name}}</span>
					<span>{{activity.tips}}</span>
				</div>
				<div class="activity-count">
					<span>个活动</span>
					<i></i>
				</div>
			</div>
		</div>
		<div class="shop-tab">
			<ul class="tab-header">
				<li>点餐</li>
				<li>评价</li>
				<li>商家</li>
			</ul>
			<div class="contianer-food">
				<ul class="food-typeList">
					<li v-for="(item,index) in foodDetail" @click="checkType(index)">{{item.name}}</li>
					<!-- <li>[售]鲜丰推荐</li>
					<li>单品果切</li>
					<li>双拼果切</li>
					<li>三拼果切</li> -->
				</ul>
				<div class="food-detailList">
					<p class="type-title">{{foodDetail[checkNum]?foodDetail[checkNum].name:''}}</p>
					 <ul v-for="food in foodDetail[checkNum].foods" v-if="foodDetail[checkNum].foods">
						<li>
							<div class="food-photo">
								<img src="https://fuss10.elemecdn.com/7/11/ddf589595964ef74b95e8af81104ajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt="">
							</div>
							<div class="food-info">
								<p class="food-name">{{food.specfoods[0].name}}</p>
								<div class="food-sell">
									<strong>{{food.specfoods[0].price}}</strong>
									<div class="food-add"></div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'shopDetail',
		data(){
			return{
				id:this.$store.state.id,
				latitude:this.$store.state.latitude,
				longitude:this.$store.state.longitude,
				shopDetail:'',
				foodDetail:'',
				checkNum:0
			}
		},
		mounted(){
			if(!this.id){
				this.id = location.href.split('/').reverse()[0];
			}
			this.initShopDetail(this.id,this.latitude,this.longitude);
			this.initFoodList();
		},
		methods:{
			initShopDetail(id,latitude,longitude){
				let that = this;
				fetch('restapi/shopping/restaurant/'+ id +'?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude='+ latitude +'&longitude='+ longitude,{
					method:'GET'
				})
				.then(function(response){
					response.json().then(function(data){
						console.log('foodlist');
						console.log(data);
						that.shopDetail = data;
					})
				})
				.catch(function(error){
					console.log(error);
				})
			},
			initFoodList(){
				let that = this;
				fetch('/restapi/shopping/v1/restaurants/'+ this.id +'/menu/categories',{
					method:'GET'
				})
				.then(function(response){
					response.json().then(function(data){
						that.foodDetail = data;
						console.log(that.foodDetail);
					})
				})
				.catch(function(error){
					console.log(error);
				})
			},
			checkType(index){
				this.checkNum = index;
			}
		}
	}
</script>
<style scoped lang="less">
	.text-ellipsis{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	ul{
		margin:0;
		padding:0;
		li{
			list-style:none;
		}
	}
	.shopdetail-header{
		height: 1.6rem;
		position: relative;
	    background: url("https://fuss10.elemecdn.com/5/90/746c155e09978c377d09f7831ef96jpeg.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/") no-repeat;
	    background-size: cover;
	    padding: .106667rem .266667rem;
		img{
			position: relative;
			top: .5rem;
			z-index:1;
		}
	}
	.shopdetail-header::after{
		content: '';
	    background-color: rgba(119, 103, 137, 0.43);
	    display: block;
	    position: absolute;
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
	}
	.shop-content{
		padding:.8rem .4rem 0 .4rem;
		.shop-name{
			font-size: .54rem;
			font-weight: bold;
			font-size:.546667rem;
		}
		.shop-info{
			font-size:.29333rem;
			padding-top:.17333rem;
			color:#333;
			span::after{
				content: " \B7 ";
				opacity: 0;
			}
		}
		.shop-des{
			padding:.22667rem 1.6933rem .26667rem;
		    color:#666;
		}
		.shop-activity{
			margin:0 .24rem;
			padding:.1333rem .21333rem;
			font-size:.293333rem;
			display:flex;
			color:#666;
			border:1ps sodli #eee;
			.activity-list{
				flex:1;
				text-align: left;
			}
			.activity-count{
				flex-shrink:0;
				width:1.626667rem;
				text-align:left;
			}
		}
	}
	.tab-header{
		display: flex;
		line-height:1.0666667rem;
		border-bottom:2px solid #eee;
		li{
			flex:1;
			color:#666;
		}
		li:active{
			color:#000;
			border:2px solid #2395ff;
		}
	}
	.contianer-food{
		display:flex;
		.food-typeList{
			display:flex;
			background-color:#f8f8f8;
			flex-direction:column;
			flex:none;
			li{
				border:1px solid #e8e8e8;
				padding:4.666667vw 2vw;
			}
		}
		.food-detailList{
			width:7.946667rem;
			text-align:left;
			.type-title{
				margin-left: .266667rem;
				padding:.2rem .8rem .2rem 0;
				color:#666;
				font-size:.32rem;
				font-weight: bold;
			}
			li{
				display:flex;
				padding: 2.666667vw 2.666667vw 2.666667vw 0;
				.food-photo{
					width:2.0266667rem;
					height:2.0266667rem;
					flex:none;
					margin-right:.2666667rem;
					img{
						width:100%;
					}
				}
				.food-name{
					margin:0;
					padding-right:.5333rem;
					height:1.5466rem;
					font-size:.4rem;
					font-weight:bold;
				}
				.food-sell{
					height:.6667rem;
					display:flex;
					strong::before{
						content:"\A5";
						font-size:.32rem;
					}
					strong{
						color:#f60;
						font-size: .426667rem;
						flex:1;
					}
					.food-add{
						width:.6rem;
						height:.6rem;
						color: #fff;
						background-color:#2395ff;
						font-size: .4rem;
						border-radius: 50%;
						flex:none;
					}
					.food-add::after{
						content:"+";
						width: .6rem;
					    height: .6rem;
					    display: block;
					    vertical-align: middle;
					    text-align: center;
					    font-size:.5333rem;
					}
				}

			}
		}
	}
	
</style>