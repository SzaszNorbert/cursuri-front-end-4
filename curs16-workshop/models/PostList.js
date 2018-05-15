function PostList(){
	this.items=[];
}
//this is bound with postsListView.js
PostList.prototype.fetchData=function(){
	var that=this;
	return $.ajax('https://jsonplaceholder.typicode.com/posts',{
		method:'GET',
		success:function(postsData){
			//console.log("Post somtehing:",postsData);
			for(var i=0;i<postsData.length;i++)	{
				var postItem=postsData[i];
				var postModel=new Post();

				//set all the data that we received from server on post model
				postModel.id=postItem.id;
				postModel.title=postItem.title;
				postModel.body=postItem.body;
				postModel.userId=postItem.userId;

				//push the model in items array
				that.items.push(postModel);
			}
		},
		error:function(xhr){
			alert('Something went wrong when fetching posts',xhr);
		}
	});
}

/* order of interaction files:1.home.html 
2.postDetails.html
3.PostList.js
4.postsListView.js
5.Post.js
6.postDetailsView.js