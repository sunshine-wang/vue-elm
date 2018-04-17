<template>
	<div class="wrapper">
		<header>
			<div>
				<i></i>
				<span>西湖区</span>
				<i class="drop-down"></i>
			</div>
		</header>
		<div class="search-wrapper">
			<div class="button">
				<a href="">
					<i></i>
					<span>搜索饿了吗商家、商品名称</span>
				</a>
			</div>
		</div>
		<div class="mint-swipe toptoons">
			<div class="mint-swipe-items-wrap">
				<div class="mint-swipe-items">
					<section class="toptoon">
						<img :src = banner[0] alt="">
					</section>
				</div>
				<div class="mint-swipe-items">
					<section class="toptoon">
						<img :src = banner[1] alt="">
					</section>
				</div>
			</div>
			<div class="mint-swipe-indicators"></div>
		</div>
		<div class="mint-swipe foodentry">
			<div class="mint-swipe-items-wrap">
				<div class="mint-swipe-items">
					<section>
						<a href="">
							<div class="container">
								<img :src=foodentry.food alt="">
							</div>
							<span>美食</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.lunch alt="">
							</div>
							<span>晚餐</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.market alt="">
							</div>
							<span>超市便利</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.fruit alt="">
							</div>
							<span>水果</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.health alt="">
							</div>
							<span>健康</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.sale alt="">
							</div>
							<span>大牌5折</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.flower alt="">
							</div>
							<span>鮮花</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.spicyHotPot alt="">
							</div>
							<span>麻辣燙</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.otherLocation alt="">
							</div>
							<span>大方菜系</span>
						</a>
						<a href="">
							<div class="container">
								<img :src=foodentry.pizza alt="">
							</div>
							<span>披薩意麵</span>
						</a>
					</section>
				</div>
				<div class="mint-swipe-items">
				</div>
			</div>
			<div class="mint-swipe-indicators"></div>
		</div>
		<div>
			<section>
				<div>
					<img :src=imgs.userGit alt="">
				</div>
			</section>
			<section class="activity-lego">
				<div class="lego">
					<h3>限量抢购</h3>
					<div>超级美味</div>
					<div>
						<span>6986人</span>正在抢>
					</div>
					<img :src=imgs.limiteSale alt="">
				</div>
			</section>
		</div>
		<div class="shoplist-title">推荐商家</div>
		<section class="shoplist">
			<section class="shoplist-item">
				<div class="shiplist-item-info">
					<div class="container-logo">
						<img :src=list[0].url alt="">
					</div>
					<div class="container-main">
						<div class="index-line1">
							<h3>
								<i></i>
								<span>{{list[0].name}}</span>
							</h3>
							<p>票</p>
						</div>
						<div class="index-line2">
							<div>
								<img :src="icons[0].stars" alt="">
							</div>
							<span>4.7</span>
							<span>月售1016单</span>
						</div>
						<div class="index-line3">
							<div class="index-moneylimted">
								<span>0元起送</span>
								<span>配送费9元</span>
							</div>
							<div class="index-timed">
								<span class="index-distance">473m</span>
								<span>38分钟</span>
							</div>
						</div>
					</div>
				</div>
				<div class="shoplist-item-activitywrap">
					<div class="">
						<div>
							<i></i>
							<span>新用户下单立减17元</span>
						</div>
						<div>
							<i></i>
							<span>满35-12</span>
						</div>
					</div>
					<div>
						<span>5个活动</span>
						<i class="drop-down"></i>
					</div>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
	export default{
		name:'index',
		data (){
			return {
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
		}
	}
</script>

<style scoped lang="less">
	header{
		height:.92rem;
		padding:.266667rem .373333rem 0 .373333rem;
		font-size: 34px;
		text-align:left;
		background-image: -webkit-linear-gradient(left,#0af,#0085ff);
		background-image: linear-gradient(90deg,#0af,#0085ff);
		color: #fff;
	}
	.drop-down{
		width:0;
		height:0;
		border:5px solid transparent;
		border-top: 5px solid #fff;
		display:inline-block;
		vertical-align: middle;
	}
	.search-wrapper{
		background-image:linear-gradient(90deg,#0af,#0085ff);
		padding:.2rem .373333rem;
	}
	.button{
		height:.96rem;
		font-size:.28rem;
		text-align: center;
		line-height:1rem;
		background-color:#fff;
		
	}
	a{
		text-decoration:none;
		color:#999;
		font-size:28px;
	}
	
	.mint-swipe,.mint-swipe-items-wrap{
		position: relative;
		height:100%;
		overflow: hidden;
	}
	.mint-swipe-items{
		position: absolute;
		width:100%;
	}
	.mint-swipe-items img{
		width:100%;
	}
	.toptoons{
		height:28vw;
	}
	.foodentry{
		height:47.2vw;
		font-size: 0;
	}
	.foodentry a{
		display: inline-block;
		width:20%;
		padding-top:.29333rem;
		span{
				font-size: 24px;
				color:#666;
			}
		}
	.container{
		width:12vw;
		margin:0 auto;
	}
	.activity-lego{
		display: flex;
		padding:0 .26667rem;
		.lego{
			-webkit-flex:1;
			flex:1;
			background-color:#f9f9f9;
			padding:.32rem 0 0 .4rem;
			text-align:left;
			height:2.93333rem;
			box-sizing: border-box;
			position:relative;
			img{
				position:absolute;
				right:.37333rem;
				top:.24rem;
			}
		}
	}
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
	}
</style>