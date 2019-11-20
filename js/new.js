
		var ctboxs=document.getElementById('ct1');
		var ctbox=ctboxs.getElementsByClassName('ctbox');
		var title=ctboxs.getElementsByClassName('tile');
		var contentwidth=470;
		var titlewidth=60;
		var n=0;
		for(var i=0;i<title.length;i++){
			title[i].index=i;
			title[i].onclick=function(){
				n=this.index;
				for(var i=0;i<ctbox.length;i++){
					if(i<=n){
						ctbox[i].style.top=i*titlewidth+'px';
					}else{
						ctbox[i].style.top=i*titlewidth+contentwidth+'px';
					}
				}
			}
		}