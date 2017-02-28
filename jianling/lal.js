var data = new Array(1,2,3,4,5,6)

function sort () {
	var i,j,tmp;
	for(j=0;j<data.length-1;j++) {
		for(i=0;i<data.length-j-1;i++){
			if(data[i]<data[i+1]){
				tmp = data[i+1];
				data[i+1] = data[i];
				data[i] = tmp;
			}
		}
	}

}

sort();

console.log(data);