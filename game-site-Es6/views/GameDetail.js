window.onload=onLoaded();

function onLoaded(){
	
		const currentPostId=getUrlParameter('gameId');
		console.log(currentPostId);













		/*** It retrieves a query (URL) parameter value** 
		It expects you to send the parameter key(before '=')* **/
		function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		};
}