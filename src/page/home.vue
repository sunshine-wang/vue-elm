<template>
	<div class="wrapper">
		<header>
			<div>
				<i></i>
				<span>{{localAddress}}</span>
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
						<router-link to="/food">
							<div class="container">
								<img :src=foodentry.food alt="">
							</div>
							<span>美食</span>
						</router-link>
						<a href="">
							<div class="container">
								<img :src=foodentry.lunch alt="">
							</div>
							<span>晚餐</span>
						</a>
						<router-link to="market">
							<div class="container">
								<img :src=foodentry.market alt="">
							</div>
							<span>超市便利</span>
						</router-link>
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
		<shop-list></shop-list>
		<footer-bottom></footer-bottom>
		<!-- <footer class="footer">
			<ul>
				<li>
					<i>
						<svg viewBox="0 0 22 22" id="h5-component-indexRegular" width="100%" height="100%">
						    <path fill="#818181" fill-rule="nonzero" d="M7.924 6.273A5.597 5.597 0 0 0 5.48 9.828a5.596 5.596 0 0 0 .787 4.242 5.646 5.646 0 0 0 7.793 1.66 2.188 2.188 0 0 1 3.02.638l.43.663c.377.58.247 1.358-.3 1.798a10 10 0 0 1-.771.555 9.93 9.93 0 0 1-7.523 1.395 9.937 9.937 0 0 1-6.306-4.334C-.393 11.82.926 5.618 5.55 2.615a9.935 9.935 0 0 1 7.523-1.393 9.937 9.937 0 0 1 6.781 5.148c.318.64.12 1.396-.467 1.777l-8.54 5.546c-.632.41-1.478.23-1.89-.401l-.443-.684a2.182 2.182 0 0 1 .641-3.016l5.011-3.255a5.612 5.612 0 0 0-6.242-.064zm6.813 10.507c-3.184 2.062-7.453 1.152-9.519-2.03a6.846 6.846 0 0 1-.96-5.182 6.847 6.847 0 0 1 2.986-4.344 6.869 6.869 0 0 1 8.13.46.892.892 0 0 1-.098 1.422l-5.44 3.534a.932.932 0 0 0-.274 1.287l.444.684a.117.117 0 0 0 .16.034l8.54-5.547c.05-.032.067-.095.035-.16a8.687 8.687 0 0 0-5.928-4.494 8.685 8.685 0 0 0-6.583 1.22c-4.044 2.627-5.198 8.056-2.572 12.1a8.686 8.686 0 0 0 5.517 3.792 8.68 8.68 0 0 0 6.583-1.22c.231-.15.458-.314.672-.483.047-.038.057-.102.032-.142l-.43-.662a.938.938 0 0 0-1.295-.269zm5.88-5.517c.714 1.099.4 2.571-.697 3.284l-.851.553a1.362 1.362 0 0 1-1.882-.401l-1.103-1.7a1.362 1.362 0 0 1 .4-1.882l1.699-1.102a1.357 1.357 0 0 1 1.883.399l.552.85zm-1.6-.168a.107.107 0 0 0-.07-.048.107.107 0 0 0-.083.016l-1.699 1.102a.112.112 0 0 0-.032.154l1.102 1.698c.021.032.056.05.095.05a.108.108 0 0 0 .06-.016l.849-.552c.519-.337.667-1.035.33-1.555l-.551-.849z"></path>
						</svg>
					</i>
					<span>首页</span>
				</li>
				<li>
					<router-link to="/order">
						<i>
							<svg viewBox="0 0 22 22" id="h5-component-discoverRegular" width="100%" height="100%">
							    <path fill="#818181" fill-rule="nonzero" d="M16.62 2.727a.75.75 0 0 1-.844 1.24 8.455 8.455 0 0 0-4.095-1.44 8.5 8.5 0 0 0-9.153 7.792 8.499 8.499 0 0 0 7.79 9.153 8.5 8.5 0 0 0 9.154-7.791 8.46 8.46 0 0 0-1.435-5.449.75.75 0 1 1 1.24-.842 9.96 9.96 0 0 1 1.69 6.411c-.442 5.505-5.264 9.609-10.768 9.166-5.505-.442-9.61-5.263-9.166-10.768C1.475 4.694 6.296.59 11.8 1.033c1.75.14 3.398.727 4.819 1.694zM14.638 7c.244 0 .44.254.331.506l-1.9 4.39c-.11.255-.264.494-.471.702-.21.21-.454.367-.712.476l-4.38 1.895a.363.363 0 0 1-.476-.476l1.895-4.38c.11-.258.266-.5.477-.711.207-.208.447-.362.7-.471l4.391-1.9A.367.367 0 0 1 14.638 7zM12.45 9.55l-1.751.757a.737.737 0 0 0-.237.156.753.753 0 0 0-.156.236l-.758 1.752 1.742-.753a.766.766 0 0 0 .247-.161.733.733 0 0 0 .154-.234l.76-1.754z"></path>
							</svg>
						</i>
						<span>订单</span>
					</router-link>
				</li>
				<li>
					<i>
						<svg viewBox="0 0 22 22" id="h5-component-orderRegular" width="100%" height="100%">
						    <path fill="#818181" fill-rule="nonzero" d="M7.25 8a.75.75 0 0 1 0-1.5h7.5a.75.75 0 1 1 0 1.5h-7.5zm0 5.004a.75.75 0 1 1 0-1.5h4.498a.75.75 0 1 1 0 1.5H7.25zM3.5 3v16h9.75c2.9 0 5.25-2.35 5.25-5.25V5.748a.75.75 0 1 1 1.5 0v8.002a6.75 6.75 0 0 1-6.75 6.75H2.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5H3.5z"></path>
						</svg>
					</i>
					<span>发现</span>
				</li>
				<li>
					<i>
						<svg viewBox="0 0 22 22" id="h5-component-profileRegular" width="100%" height="100%">
						    <path fill="#818181" fill-rule="nonzero" d="M10.955 12H7.75a5.25 5.25 0 0 0-5.25 5.25v2.25h17v-2.25a5.244 5.244 0 0 0-2.626-4.548.75.75 0 0 1 .75-1.3l.183.11A6.745 6.745 0 0 1 21 17.25v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.75 6.75 0 0 1 6.436-6.743A4.984 4.984 0 0 1 6 7V6a5 5 0 0 1 10 0v1a5 5 0 0 1-5.045 5zM11 10.5A3.5 3.5 0 0 0 14.5 7V6a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 0 0 3.5 3.5z"></path>
						</svg>
					</i>
					<span>我的</span>
				</li>
			</ul>
		</footer> -->
	</div>
</template>

<script>
import shopList from '../components/common/shoplist'
import footerBottom from '../components/footer/footer'

	export default{
		name:'index',
		data (){
			return {
				localAddress:'',
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
		components:{
			shopList,
			footerBottom
		},
		mounted:function(){
			if(navigator.geolocation){
				let that = this;
				let latitude = that.$store.state.latitude;
				let longitude = that.$store.state.longitude;
				navigator.geolocation.getCurrentPosition(function(position){
					console.log(position);
					that.getData(position.coords.latitude,position.coords.longitude);
				},function(error){
					console.log(error);
					if(latitude == ''){
						if(!localStorage.getItem('longitude')){
							that.$router.push('/set-address');
						}
						else{
							let latitude = localStorage.getItem('latitude');
							let longitude = localStorage.getItem('longitude');
							that.getData(latitude,longitude);
							that.getTypesList(latitude,latitude);
						}
						
					}
					else{
						that.getData(latitude,longitude);
						that.getTypesList(latitude,latitude);
					}
				})
			}
		},
		methods:{
			getData:function(latitude,longitude){
				let that = this;
				  fetch('/restapi/bgs/poi/reverse_geo_coding?latitude='+ latitude +'&longitude='+longitude,{
				  //fetch('/restapi/bgs/poi/reverse_geo_coding?latitude=30.312773&longitude=120.066788',{
				  	method: 'GET'
				  })
				  .then(function(response) {
				  	response.json().then(function(data){
				  		that.localAddress = data.name;
				  		console.log(that.localAddress);
				  	})
				  })
				  .catch(function(error){
				  	console.log(error);
				  });	
				},
			getTypesList:function(latitude,longitude){
				fetch('/restapi/shopping/v3/restaurants?latitude='+ latitude +'&longitude='+ longitude +'&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5',{
					method:'GET',
				})
				.then(function(response){
					response.json().then(function(data){
						console.log(data);
					})
				})
				.catch(function(error){
					console.log(error);
				})
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
		top: 0;
	    position: sticky;
	    z-index: 999;
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
	/* .footer{
		width:100%;
		height:1.21333rem;
		padding-top:.12rem;
		box-shadow: 0 4px 17px 1px #000;
		position: fixed;
		bottom:0;
		background-color: #fff;
		ul{
			display:flex;
			padding:0;
			margin:0;
			li{
				list-style: none;
				flex:1;
				display: flex;
			    flex-direction: column;
			    align-items: center;
				svg{
					width: 5.333333vw;
	    				height: 5.333333vw;
				}
			}
		}
		
	} */
</style>