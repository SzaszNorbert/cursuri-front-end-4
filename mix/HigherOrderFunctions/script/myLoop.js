function loop(num,test,upgrade,action){
	for(let i=0;i<num;i++){
		if(test){
			action(i);
			upgrade;
		}
	}
}

loop(3,n=>n>0,n=>n-1,console.log);