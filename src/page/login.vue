<template>
	<div class="wrapper">
		<div class="loginHeader">
			<div class="logo">
				<logo-img></logo-img>
			</div>
			<div class="label">
				<a class="active">短信登录</a>
				<a>密码登录</a>
			</div>
		</div>
		<form>
			<section>
				<input type="text" placeholder="手机号" v-model="phoneNum">
				<button class="btn" @click="getCode">获取验证码</button>
			</section>
			<section>
				<input type="text" placeholder="验证码">
				<div class="pass-type btn">
					<div class="pass-type-circle"></div>···
				</div>
			</section>
			<section class="tip-message">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="">用户服务协议</a></section>
			<button class="login-btn" @click="login">登录</button>
		</form>
		<div class="about-us">关于我们</div>
	</div>
</template>
<script>
	import logoImg from '../components/common/logoImage'
	export default{
		name:'login',
		data(){
			return{
				phoneNum:null
			}
		},
		components:{
			logoImg
		},
		methods:{
			getCode(){
				let sendData = {
					captcha_hash:"",
					captcha_value:"",
					mobile:this.phoneNum
				}
				let formData = new FormData();  
				formData.append("captcha_hash","");  
				formData.append("captcha_value","");  
				formData.append("mobile",this.phoneNum); 

				fetch('/restapi/eus/login/mobile_send_code',{
					method:'POST',
					body:formData
				}).then(function(response){
					response.json().then(function(data){
						console.log(data);
					})
				}).catch(function(err){
					console.log(err);
				})
			},
			login(){

			},
			getOrder(){
				let sendData = {
					limit:8,
					set:0
				}
				fetch('/restapi/bos/v2/users/40966202/orders',{
					method:'GET',
					body:sendData
				}).then(function(response){
					response.json().then(function(data){
						console.log(data);
					})
				})
				//https://h5.ele.me/restapi/bos/v2/users/40966202/orders?limit=8&offset=0
			}
		}
	}
</script>
<style lang="less" scoped>
	*{
		box-sizing:border-box;
	}
	.wrapper{
		padding-top:1.06667rem;
		width:8rem;
		margin:0 auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.logo{
		width:3.7333rem;
		height:1.49333rem;
		margin:0 auto;
	}
	.label{
		margin-top:1.06667rem;
		display: flex;
		justify-content: center;
		a{
			font-size: .37333rem;
		    padding-bottom: 4px;
		    cursor: pointer;
		    display: block;
		    width: 1.54666rem;
		    margin: 0 .53333rem;
		}
		.active{
			border-bottom: 2px solid #2395ff;
		}
	}
	section{
		margin-top:.426667rem;
		position: relative;
		input{
			width:100%;
			color: #333;
			font-size: .373333rem;
			height:1.17333rem;
			border:1px solid #ddd;
			padding-left:.266667rem;
			border-radius: 5;
		}
		button,.btn{
			position: absolute;
		    top: 50%;
		    right: .26667rem;
		    background: no-repeat;
		    border: 0;
		    color: #666;
		    font-size: .366667rem;
		    transform: translateY(-50%);
		}
		.pass-type{
			padding: 0 .16rem;
		    width: 1.066667rem;
		    height: .426667rem;
		    color: #999;
		    font-size: .32rem;
		    border: 1px solid #ddd;
		    border-radius: .213333rem;
		    display: flex;
		    justify-content:flex-end;
		    align-items: center;
		    .pass-type-circle{
		    	width: .426667rem;
		    	height: .426667rem;
		    	border-radius: 50%;
		    	border:1px solid #ddd;
		    }
		}
	}
	.tip-message{
		color:#999;
		font-size: .32rem;
		line-height: 1.83;
		a{
			color: #2395ff;
		}
	}
	.login-btn{
		margin-top: .8rem;
		height:1.066667rem;
		width: 100%;
		font-size: .426667rem;
		line-height: 2.625;
		color:#fff;
		background-color: #4cd96f;
		border:0;
		outline: none;
		border-radius: 5px;
	}
	.about-us{
		margin-top: .53333rem;
		color: #999;
		font-size: .32rem;
	}
</style>