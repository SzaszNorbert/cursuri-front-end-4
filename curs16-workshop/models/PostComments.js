function PostComm(){
	this.id=null;
	this.name="";
	this.email="";
	this.postId=null;
	this.body="";
}

//ez a comment resz
PostComm.prototype.fetchComment=function(id){
	var that=this;
	return $.ajax('https://jsonplaceholder.typicode.com/posts/' + id + '/comments',{
		method:'GET',
		success:function(data){
			that.id=data.id;
			that.name=data.name;
			that.body=data.body;
			that.email=data.email;
			that.postId=data.postId;
		},
		error:function(){
			alert('Something went wrong with post details!');
		}
	});
}