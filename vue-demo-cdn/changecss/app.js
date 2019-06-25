new Vue({
	el:'#app',
	data:{
		name:"小胡",
		job:"Java工程师",
		website:"http://www.baidu.com",

		changeColor:false,
		changeLength:false
	},
	//方法
	methods:{
		hello:function(){
			return 'Good Morning'
		},
	},
	//计算属性
	computed:{
		compClasses:function () {
			return {
				changeColor: this.changeColor,
				changeLength: this.changeLength
			}
		}
	}
});

