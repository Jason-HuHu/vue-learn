var one = new Vue({
	el:'#app-one',
	data:{
		title:"app-one",
		name:"小胡",
		job:"Java工程师",
		website:"http://www.baidu.com"
	},
	methods:{
		hello:function(){
			return 'Good Morning'
		}
	},
	computed:{
		greet:function () {
			return "Hello app one"
		}
	}

});

var two = new Vue({
	el:'#app-two',
	data:{
		title:"app-one",
		name:"小胡",
		job:"Java工程师",
		website:"http://www.baidu.com"
	},
	methods:{
		hello:function(){
			return 'Good Morning'
		},
		changeTitle:function () {
			return one.title= "App two change App one title"
		}
	},
	computed:{
		greet:function () {
			return "Hello app two"
		}
	}

});



