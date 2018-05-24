<template>
	<section class="shoplist">
		<section class="shoplist-item" v-for="(shop,index) in shoplist" data-id="" @click="getShop(shop.restaurant.id)">
			<div class="shiplist-item-info">
				<div class="container-logo">
					<img :src=getUrl(shop.restaurant)>
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
					<div v-for="(activity,i) in shop.restaurant.activities" :class="{show_none: i > 1}" class="show_list">
						<i :class="'color_' + activity.icon_color" class="tip_color">{{activity.icon_name}}</i>
						<span>{{activity.description}}</span>
					</div>
				</div>
				<div class="activity-count" @click="showAllActivityList(index,$event)">
					<span>{{shop.restaurant.activities.length}}个活动</span>
					<i class="drop-down"></i>
				</div>
			</div>
		</section>
	</section>	
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'index',
		data (){
			return {
				latitude:this.$store.state.latitude ? this.$store.state.latitude:(localStorage.getItem('latitude')?localStorage.getItem('latitude'):null),
				longitude:this.$store.state.longitude ? this.$store.state.longitude:(localStorage.getItem('longitude')?localStorage.getItem('longitude'):null),
				shoplist:[],
				imgs:{
					userGit:'../static/images/newsUserGift.webp',
					limiteSale:'../static/images/limiteSale.webp',
					combo:'../static/images/combo.webp'
				},
				icons:[
					{
						stars:'../static/images/stars.svg'
					}
				],
				listStart:0,
				scrollBack : false
			}
		},
		mounted(){
			this.initData();
   			window.addEventListener('scroll', this.scrollLoad);
		},
		methods:{
			initData(){
				//this.getShopsList(this.$store.state.latitude,this.$store.state.longitude,this.listStart);
				this.getShopsList(this.latitude,this.longitude,this.listStart);
			},
			getShopsList:function(latitude,longitude,start,size){
				let that = this;
				fetch('/restapi/shopping/v3/restaurants?latitude='+ latitude +'&longitude='+ longitude +'&offset='+ start +'&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5',{
					method:'GET'
				})
				.then(function(response){
					response.json().then(function(data){
						console.log(data);
						that.shoplist = that.shoplist.concat(data.items);
						that.scrollBack = true;
					})
					.catch(function(error){
						console.log(error);
					})
				})
			},
			getShop(id){
				this.$store.commit('id',id);
				this.$router.push('/shop-detail/'+ id);
			},
			getUrl(item){
				let url = item.image_path;
				return 'https://fuss10.elemecdn.com/'+ url.slice(0,1)+'/'+url.slice(1,3)+'/'+url.slice(3)+'.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
			},
			hasClass(element,cname){
				return !!element.className.match(new RegExp( "(\\s|^)" + cname + "(\\s|$)"));
			},
			addClass(element,cname){
				element.className += ' '+ cname;
			},
			removeClass(element,cname){
				element.className = element.className.replace(new RegExp( "(\\s|^)" + cname + "(\\s|$)" ), " " );
			},
			showAllActivityList(index,event){
				event.stopPropagation();
				let list = document.querySelectorAll('.shoplist-item-activitywrap')[index].querySelectorAll('.show_list');
				let that = this;
				if(list.length <=2){
					return;
				}
				list.forEach(function(item,i){
					if(i > 1){
						if(that.hasClass(item,'show_none')){
							that.removeClass(item,'show_none');
							console.log(item.className);
						}else{
							that.addClass(item,'show_none');
						}
					}
				})
				
			},
			scrollLoad(){
				if(this.scrollBack){
					let scrollTop = document.documentElement.scrollTop;
					let clientHeight = document.documentElement.clientHeight;
					let totalHeight = document.body.clientHeight;
					if(scrollTop + clientHeight + 50 > totalHeight){
						this.listStart += 8;
						this.scrollBack = false;
						//this.getShopsList(this.$store.state.latitude,this.$store.state.longitude,this.listStart);
						this.getShopsList(this.latitude,this.longitude,this.listStart);
					}
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../../style/common';
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
    			overflow: hidden;
    			div{
				    display: flex;
				    align-items: center;
				    span{
				    	text-overflow: ellipsis;
				    	overflow:hidden;
				    	white-space: nowrap;
				    	display: inline-block;
    					flex: 1;
				    }
    			}
    			.show_none{
    				display:none;
    			}
    			.tip_color{
    				color:#fff;
    				display:inline-block;
    				width:.7466667rem;
    				height:.7466667rem;
    				border-radius: .04rem;
				    transform: scale(0.5);
				    font-size: .56rem;
				    font-style: normal;
				    display: flex;
				    flex: none;
				    justify-content: center;
    			}
			}
			.activity-count{
				text-align:right;
				height:100%;
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