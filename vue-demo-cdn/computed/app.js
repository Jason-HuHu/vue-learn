new Vue({
	el:'#app',
	data:{
		name:"小胡",
		job:"Java工程师",
		website:"http://www.baidu.com",
		a:0,
		b:0,
		age:20
	},
	//方法
	methods:{
		hello:function(){
			return 'Good Morning'
		},

		// addToA:function () {
		// 	return this.a + this.age;
		// },
		//
		// addToB:function () {
		// 	return this.b + this.age;
		// }
	},
	//计算属性
	computed:{
		addToA:function () {
			console.log("Age + A");
			return this.a + this.age;
		},

		addToB:function () {
			console.log("Age + B");
			return this.b + this.age;
		}
	}
});

