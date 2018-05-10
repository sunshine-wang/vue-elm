<template>
	<section class="shoplist">
		<section class="shoplist-item" v-for="shop in shoplist.items">
			<div class="shiplist-item-info">
				<div class="container-logo">
					<img :src=list[0].url alt="">
				</div>
				<div class="container-main">
					<div class="index-line1">
						<h3>
							<i></i>
							<span>{{shop.restaurant.name}}</span>
						</h3>
						<p>票</p>
					</div>
					<div class="index-line2">
						<div>
							<img :src="icons[0].stars" alt="">
						</div>
						<span>{{shop.restaurant.rating}}</span>
						<span>月售{{shop.restaurant.recent_order_num}}单</span>
					</div>
					<div class="index-line3">
						<div class="index-moneylimted">
							<span>{{shop.restaurant.float_minimum_order_amount}}元起送</span>
							<span>配送费{{shop.restaurant.float_delivery_fee}}元</span>
						</div>
						<div class="index-timed">
							<span class="index-distance">{{shop.restaurant.distance}}m</span>
							<span>{{shop.restaurant.order_lead_time}}分钟</span>
						</div>
					</div>
				</div>
			</div>
			<div class="shoplist-item-activitywrap">
				<div class="activitylist">
					<div v-for="activity in shop.restaurant.activities">
						<i :class="activity.icon_color">{{activity.icon_name}}</i>
						<span>{{activity.description}}</span>
					</div>
					<!-- <div>
						<i></i>
						<span>满35-12</span>
					</div> -->
				</div>
				<div class="activity-count">
					<span>{{shop.restaurant.activities.length}}个活动</span>
					<i class="drop-down"></i>
				</div>
			</div>
		</section>
	</section>	
</template>

<script>
	export default{
		name:'index',
		data (){
			return {
				shoplist:'',
				banner:['../static/images/banner1.webp','../static/images/banner2.webp'],
				foodentry:{
					food:'../static/images/food.webp',
					lunch:'../static/images/lunch.webp',
					market:'../static/images/market.webp',
					fruit:'../static/images/fruit.webp',
					health:'../static/images/health.webp',
					sale:'../static/images/sale.webp',
					flower:'../static/images/flower.webp',
					spicyHotPot:'../static/images/spicyHotPot.webp',
					otherLocation:'../static/images/otherLocation.webp',
					pizza:'../static/images/pizza.webp'
				},
				imgs:{
					userGit:'../static/images/newsUserGift.webp',
					limiteSale:'../static/images/limiteSale.webp',
					combo:'../static/images/combo.webp'
				},
				list:[
					{
						url:'../static/images/list/mdl.webp',
						isbroad:false,
						name:'宁波麦当劳鼓楼步行街餐厅',
						score:'4.6',
						saleNumber:'213',
						startMoney:20,
						carriage:4,
						journey:618,
						time:20,
						activityList:['新用户立减20元','本店新用户立减2元','下单返回5元代金券']
					}
				],
				icons:[
					{
						stars:'../static/images/stars.svg'
					}
				]
			}
		},
		mounted(){
			this.initData();
		},
		methods:{
			initData(){
				this.getShopsList(this.$store.state.latitude,this.$store.state.longitude)
			},
			getShopsList:function(latitude,longitude){
				let that = this;
				fetch('/restapi/shopping/v3/restaurants?latitude='+ latitude +'&longitude='+ longitude +'&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5',{
					method:'GET'
				})
				.then(function(response){
					response.json().then(function(data){
						console.log(data);
						that.shoplist = data;
					})
					.catch(function(error){
						console.log(error);
					})
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.shoplist-title{
		margin-top:.28rem;
		height:.96rem;
		font-size:30px;
		display:flex;
		justify-content: center;
		align-items:center;
		.mixin{
			content:'';
			display: block;
			width:.53333rem;
			background-color:#999;
			height:.0266667rem;
		}
		&:before{
			.mixin();
			margin-right:.346667rem;
		}
		&:after{
			.mixin();
			margin-left:.346667rem;
		}
	}
	.shoplist-item{
		padding:.4rem 0;
		.shiplist-item-info{
			display:flex;
			padding:0 .26667rem;
			.container-logo{
				width:1.73333rem;
				height:1.73333rem;
				img{
					width:100%;
					height:100%;
				}
			}
			.container-main{
				padding-left:.173333rem;
				flex-grow:1;
				.index-line1,.index-line2,.index-line3{
					display: flex;
				}	
				.index-line2 {
					img{
						width:112px;
					}
					span{
						padding-left:8px;
					}
				}
				.index-line3{
					.index-moneylimted span+span:before{
						content:'|';
						color:#ddd;
						margin:0 .08rem;
					}
					.index-timed{
						flex-grow:1;
						text-align:right;
						.index-distance:after{
							content:'|';
							color:#ddd;
							margin:0 .08rem;
						}
					}
				}
				h3,p{
					margin:0;
				}
				p{
					flex-grow:1;
					text-align:right;
				}
			}
		}
		.shoplist-item-activitywrap{
			display:flex;
			padding-left:2.17333rem;
			.activitylist{
				flex:1;
				text-align: left;
				padding-right:.26667rem;
				width:5.89rem;
			}
			.activity-count{
				text-align:right;
				.drop-down{
					width: 0;
				    height: 0;
				    border: 6px solid transparent;
				    border-top: 6px solid #000;
				    display: inline-block;
				    vertical-align: middle;
				}
			}
		}
	}
</style>