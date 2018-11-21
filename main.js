new Vue({
	el: '#main',
	data:{
		welcome: 'Hi There',
		heading: 'Vue Tutorials',
		inputData: 'Your text here',
		number:1
	},
	methods:{
		sample: function(){
			return "This is it"
		},
		inputText: function(event){
			this.inputData = event.target.value;
		},
		increase: function(){
			this.number = this.number + 1
		},
		decrease: function (){
			this.number = this.number - 1
		}
	}
	
});