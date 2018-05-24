<template>
	<div class="wrapper">
		<header class="top">
			<div class="header">
				<router-link to="/">
					<i>&lt;</i>
				</router-link>
				<span>美食</span>
			</div>
			<nav class="food-type">
				<ul class="food-type-check" @click="checkFoodType">
					<li class="active">全部</li>
					<li>简餐便当</li>
					<li>小吃炸串</li>
					<li>面食粥点</li>
					<li>地方菜系</li>
					<li>香锅冒菜</li>
					<li>汉堡披萨</li>
					<li>日韩料理</li>
					<li>轻食西餐</li>
				</ul>
				<div class="more-type">
					<i></i>
				</div>
			</nav>
		</header>
		<div class="content">
			<div class="recommend">
				<div class="recommend-header">
					<span class="recommend-title">品质套餐</span>
					<span class="recommend-more">更多 &gt;</span>
				</div>
				<div class="recommend-food">
					<ul>
						<li>
							<img src="https://fuss10.elemecdn.com/b/c5/a93ddf2a52b0d4f80029dcf3807bbjpeg.jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/" alt="">
							<div class="food-name">番茄烤肉拌饭+脆皮鸡+咸鸭蛋+热狗</div>
							<div class="food-well-count">21人好评</div>
							<div class="food-detail">
								<span class="food-price">¥35</span>
								<span class="food-activity">满26减16</span>
							</div>
						</li>
						<li>
							<img src="https://fuss10.elemecdn.com/b/c5/a93ddf2a52b0d4f80029dcf3807bbjpeg.jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/" alt="">
							<div class="food-name">炸鸡全家福+可乐</div>
							<div class="food-well-count">21人好评</div>
							<div class="food-detail">
								<span class="food-price">¥35</span>
								<span class="food-activity">满26减16</span>
							</div>
						</li>
						<li>
							<img src="https://fuss10.elemecdn.com/b/c5/a93ddf2a52b0d4f80029dcf3807bbjpeg.jpeg?imageMogr/format/webp/thumbnail/!220x220r/gravity/Center/crop/220x220/" alt="">
							<div class="food-name">炸鸡全家福+可乐</div>
							<div class="food-well-count">21人好评</div>
							<div class="food-detail">
								<span class="food-price">¥35</span>
								<span class="food-activity">满26减16</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="food">
				<nav class="for_recommend">
					<ul>
						<li>综合排序</li>
						<li>距离最近</li>
						<li>会员领红包</li>
						<li class="filter-nav-more">筛选</li>
					</ul>
				</nav>
				<shop-list></shop-list>
			</div>
		</div>
	</div>
</template>
<script>
	import shopList from '../components/common/shoplist'
	export default{
		name:'food',
		data(){
			return{

			}
		},
		components:{
			shopList,
		},
		methods:{
			checkFoodType(event){
				event.target;
			}
		}
	}
</script>
<style lang="less">
@import '../style/common';
	.top{
		position:sticky;
		top:0;
		z-index: 1;
	}
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
	.food-type{
		height:1.0666rem;
		background-image: linear-gradient(90deg,#0af,#0085ff);
    	display: flex;
		.food-type-check{
			padding:0 0 .11764rem .4rem;
			overflow-x: scroll;
		    white-space: nowrap;
		    flex: 1;
		    li{
			    margin-right: .7466667rem;
			    display: inline-block;
			    color:#fff;
			    font-size:.373333rem;
			    padding:.34666rem 0 .16rem 0;
			    line-height:1;
			    &:active{
		    		border-bottom:.053333rem solid #fff; //为啥这样不行呀
		    	}
		    }
		    .active{
		    	border-bottom:.053333rem solid #fff;
		    }
		}
		.more-type{
			flex:none;
			width:1.2rem;
		}
	}
	.content{
		.recommend{
			padding:.26667rem;
			.recommend-header{
				height:.506667rem;
				margin:.13333rem 0 .213333rem 0;
				.recommend-title{
					display:inline-block;
					float: left;
					font-size:.426667rem;
					font-weight:bold;
					line-height:1;
				}
				.recommend-more{
					display:inline-block;
					float: right;
					font-size:.32rem;
					color:#666;
					line-height:1;
				}
			}
			.recommend-food{
				ul{
					display: flex;
    				justify-content: space-between;
					li{
						width:2.9333333rem;
						text-align: left;
						.food-name{
							font-size: .373333rem;
						    margin-top: .133333rem;
						    text-overflow: ellipsis;
						    overflow: hidden;
						    white-space: nowrap;
						    font-weight: bold;
						}
						.food-well-count{
							margin-top:.08rem;
							opacity: .5;
						}
						.food-detail{
							margin-top:.1333333rem;
						}
						.food-price{
							font-weight: bold;
							font-size: .346667rem;
							color: #333;
						}
						.food-activity{
							color: #e8470b;
							border: 1px solid #e8470b;
							font-size:.29333rem;
							padding: .026667rem .053333rem;
							margin-left:.106667rem;
						}
					}
				}
			}
		}
		.for_recommend{
			height:1.06667rem;
			font-size: .32rem;
			position: sticky;
		    top: 2.2rem;
		    z-index: 1;
		    background: #fff;
			ul{
				display: flex;
    			width: 100%;
    			li{
					flex:1;
					font-size: .373333rem;
					line-height:2.85714;
					color:#666;
				}
				.filter-nav-more{
					width:2.133333rem;
					flex:none;
				}
			}
			
		}
	}
</style>