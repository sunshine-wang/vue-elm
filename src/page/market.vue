<template>
	<div class="wrapper">
		<header class="top">
			<div class="header">
				<router-link to="/">
					<i>&lt;</i>
				</router-link>
				<span>超市便利</span>
			</div>
			<div class="nav">
				<div class="search">
					<div class="button">
						<i></i>
						<span>搜索饿了吗商家、商品名称</span>
					</div>
				</div>
				<nav class="type-nav">
					<ul class="type-nav-check">
						<li class="active">为你精选</li>
						<li>超市</li>
						<li>便利店</li>
						<li>零食</li>
						<li>蔬菜</li>
						<li>牛奶</li>
						<li>送水上门</li>
						<li>酒水</li>
					</ul>
					<div class="type-more">
						<i></i>
					</div>
				</nav>
			</div>
		</header>
		<div class="container">
			<div class="choice">
				<div>
					<div class="choice-detail">
						<div class="top-title">
							<span>大牌驾到</span>
						</div>
						<div class="chioce-container">
							<div class="choice-left">
								<div class="choice-top-title">
									<span class="food-name">超级物种</span>
									<span class="food-activity">满39减7</span>
								</div>
								<div class="food-des">
									<span>初夏乐享！泰国椰青10元/个</span>
								</div>
								<div class="get-activity">
									<span>抢优惠</span>
								</div>
							</div>
							<div class="choice-right">
								<img src="https://fuss10.elemecdn.com/e/63/c156aa5a38ce820245db11bd8cab7png.png?imageMogr/format/webp/thumbnail/!276x197r/gravity/Center/crop/276x197/" alt="">
							</div>
						</div>
					</div>
					<div class="choice-detail choice-two">
						<div class="top-title">
							<span>超值满减</span>
						</div>
						<div class="chioce-container">
							<div class="choice-left">
								<div class="choice-top-title">
									<span class="food-name">超级物种</span>
									<span class="food-activity">满39减7</span>
								</div>
								<div class="food-des">
									<span>初夏乐享！泰国椰青10元/个</span>
								</div>
								<div class="get-activity">
									<span>抢优惠</span>
								</div>
							</div>
							<div class="choice-right">
								<img src="https://fuss10.elemecdn.com/e/63/c156aa5a38ce820245db11bd8cab7png.png?imageMogr/format/webp/thumbnail/!276x197r/gravity/Center/crop/276x197/" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="three">
					<div class="one-example">
						<div class="name">天天特价</div>
						<div class="des">酒水1元起</div>
						<div class="image">
							<img src="https://fuss10.elemecdn.com/7/db/38eb9b40c42cd9d042e3af555ba06png.png?imageMogr/format/webp/thumbnail/!138x138r/gravity/Center/crop/138x138/" alt="">
						</div>
					</div>
					<div class="one-example">
						<div class="name">天天特价</div>
						<div class="des">酒水1元起</div>
						<div class="image">
							<img src="https://fuss10.elemecdn.com/7/db/38eb9b40c42cd9d042e3af555ba06png.png?imageMogr/format/webp/thumbnail/!138x138r/gravity/Center/crop/138x138/" alt="">
						</div>
					</div>
					<div class="one-example">
						<div class="name">天天特价</div>
						<div class="des">酒水1元起</div>
						<div class="image">
							<img src="https://fuss10.elemecdn.com/7/db/38eb9b40c42cd9d042e3af555ba06png.png?imageMogr/format/webp/thumbnail/!138x138r/gravity/Center/crop/138x138/" alt="">
						</div>
					</div>
				</div>
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
</template>
<script>
	import shopList from '../components/common/shoplist'

	export default{
		name:'market',
		data(){
			return{

			}
		},
		components:{
			shopList
		},
		methods:{

		}
	}
</script>
<style  lang="less" scoped>
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
	.nav{
		background-image: linear-gradient(90deg,#0af,#0085ff);
	}
	.search{
		margin:0 .4rem;
		margin-bottom:.26667rem;
		.button{
			padding:0 .4rem;
			height:1.01333rem;
			background-color: #fff;
			border-radius: .066667rem;
			text-align: center;
			justify-content: center;
		    align-items: center;
		    display: flex;
			
		}
	}
	.type-nav{
		margin:0 .4rem;
		display: flex;
		.type-nav-check{
			overflow-x:scroll;
			white-space: nowrap;
			flex:1;
			padding: .13333rem 0;
			li{
				display:inline-block;
				margin-right:.306667rem;
				font-size:.37333rem;
				padding-bottom:.066667rem;
				color:#fff;
			}
			.active{
				border-bottom:.05333rem solid #fff;
			}
		}
		.type-more{
			width:.66667rem;
		}
	}
	.container{
		background-image:linear-gradient(90deg,#0af,#0085ff);
		padding:0 .4rem;
		position:relative;
		&::before{
					background-image: linear-gradient(top,hsla(0,0%,96%,0),#f5f5f5,#f5f5f5);
				}
		.choice{
			position: relative;
			.top-title{
				height:.45333rem;
				text-align: center;
				span{
					padding: 0 .24rem;
				    background-color: #ffd219;
				    color: #c27300;
				    font-size: .34667rem;
				    font-weight: bold;
				}
			}
			.choice-detail{
				background-color: #fff;
			    background-image: linear-gradient(#ffe6bc, #fff);
			    background-size: 100% .53rem;
			    background-repeat: no-repeat;
			    margin-bottom:.4rem;
			    border:1px solid #f5f5f5;
			}
			.choice-two{
				background:#fff;
				.top-title{
					text-align: left;
					position: relative;
					span{
						color: #fff;
						background-image: linear-gradient(270deg,#ff9d2c,#ff6d4b);
						font-size: .58667rem;
						transform: scale(.5);
						display: inline-block;
					    position: absolute;
					    top: 0;
					    left: 0;
					    transform-origin: 0 0;
					    border-bottom-right-radius: .2rem;
					}
				}
			}
			.choice-detail:last-child{
				margin-bottom:0;
			}
			.three{
				display: flex;
				background:#fff;
				.one-example{
					flex:1;
					justify-content:space-between;
					padding: .26667rem 0 .13333rem;
    				border: 1px solid #f2f2f2;
					.name{
						font-size: .4rem;
					}
					.des{
						font-size: .29333rem;
						color: #999;
					}
				}
			}
		}
		.chioce-container{
			padding:0 0 .53333rem .53333rem;
			display: flex;
			.choice-left{
				flex:1;
				text-align: left;
				.choice-top-title{
					height:.5333rem;
					font-size:.4rem;
					.foos-name{
						color:#000;
						font-weight: bold;
					}
					.food-activity{
						color: #ff5339;
					}
				}
				.food-des{
					font-size: .32rem;
					color: #333;
				}
			}
			.choice-right{
				width: 3.73333rem;
    			height: 2.66667rem;
			}
			.get-activity{
				background-image: linear-gradient(270deg,#ff5400,#f01f00);
				color: #fff;
				margin-top: .21333rem;
    			width: 1.76rem;
				font-weight: bold;
				font-size: .34667rem;
			    font-weight: 700;
			    padding: .06667rem .13333rem .06667rem .24rem;
			    border-radius: 4px;
			    span{
			    	color:#fff;
			    }
			}
		}
	}
	.container::before{
		background-image: linear-gradient(180deg,hsla(0,0%,96%,0),#f5f5f5,#f5f5f5);
		content:'';
		position:absolute;
		top:0;
		bottom:-.06667rem;
		left:0;
		right:0;
	}
	.for_recommend{
			height:1.06667rem;
			font-size: .32rem;
			position: sticky;
		    top: 3.3rem;
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
</style>