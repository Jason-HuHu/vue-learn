Vue.component("hello",{
	template:'<p>{{name}} : Hello this is a component</p>',
	data:function () {
		return {
			name : "小胡哥哥",
			age : 23
		}
	}
});

new Vue({
	el:'#app'

});

