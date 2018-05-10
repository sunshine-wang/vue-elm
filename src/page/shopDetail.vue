<template>
	<div class="wrapper">
		<header>
			<a href="">
				<use>
					<svg viewBox="0 0 20 32" id="arrow-left" width="100%" height="100%"><path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path></svg>
				</use>
			</a>
			<img src="https://fuss10.elemecdn.com/5/90/746c155e09978c377d09f7831ef96jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
		</header>
		<div class="shop-content">
			<div class="shop-name"></div>
			<div class="shop-info">
				<span>4.4</span>
				<span>月售571单</span>
				<span>蜂鸟专送</span>
				<span>约21分钟</span>
				<span>距离1.4km</span>
			</div>
			<div class="shop-des"></div>
			<div class="shop-activity">
				<div class="activity-list">
					<span>减</span>
					<span>满10减5</span>
				</div>
				<div class="activity-count">
					<span>5个活动</span>
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
					<li>[预]活动专区</li>
					<li>[售]鲜丰推荐</li>
					<li>单品果切</li>
					<li>双拼果切</li>
					<li>三拼果切</li>
				</ul>
				<div class="food-detailList">
					<span class="type-title">[预]活动专区</span>
					<ul>
						<li>
							<div>
								<img src="" alt="">
							</div>
							<div>
								<p class="food-name">现切西瓜</p>
								<div>
									<strong>2.44</strong>
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

			}
		},
		mounted(){

		},
		methods:{
			initShopDetail(){
				let that = this;
				fetch('restapi/shopping/restaurant/'+ that.$store.state.id +'?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude='+ latitude +'&longitude='+ longitude,{
					method:'GET'
				})
				.then(function(response){
					response.json().then(function(data){
						console.log('foodlist');
						console.log(data);
					})
				})
			},
			initFoodList(){

			}
		}
	}
</script>