new Vue({
	el:'#app',
	data:{
		name:"小胡",
		job:"Java工程师",
		website:"http://www.baidu.com"
	},
	methods:{
		hello:function(){
			return 'Good Morning'
		}
	}
});

var app1 = new Vue({
	el:'#app1',
	data:{
		seen:true
	}
});

var app2 = new Vue({
  el: '#app2',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
});

var app3 = new Vue({
	el:'#app3',
	data:{
		message:"Hello Vue.js"
	},
	methods:{
		revertMessage:function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
});

var app4 = new Vue({
	el:'#app4',
	data:{
		message:"Hello Vue!"
	}
});

var app5 = new Vue({
	el:'#app5',
	data:{
		
	}
})


//所需要的数据对象
var data = {
	a:1
}

//Vue实例
var vm = new Vue({
	//选项
	data:data
})
