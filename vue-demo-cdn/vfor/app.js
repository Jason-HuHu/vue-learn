new Vue({
	el:'#app',
	data:{
		name:"小胡",
		job:"Java工程师",
		website:"http://www.baidu.com",

		characters:["A","B","C"],
		users:[
			{name:"A",age:20},
			{name:"B",age:21},
			{name:"C",age:22},
			{name:"D",age:23}
		]
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

