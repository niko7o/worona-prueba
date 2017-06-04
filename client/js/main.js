$(document).ready(function() {
	$("#all-posts").click(function(){	    
	    $.ajax({
	    	method: "GET",
	    	dataType: "json",
	    	contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	    	url: "https://demo.worona.org/wp-json/wp/v2/posts",
	    	beforeSend: function(){
	    		$('#preloader').show();
	    	},
	    	success: function(post){
	        	$('#preloader').hide();
	        	for(i=0; i<post.length; i++){
	        		console.log(post[i]);
	        		$('.posts').append("<h1>"+post[i].title.rendered+"</h1>");
	        		$('.posts').append("<p>"+post[i].content.rendered+"</p>");
	        		$('.posts').append("<h2>Author:"+post[i].author+"</h2>");
	        		$('.posts').append("<hr>");
	        	}
	    	}
	    });
	});

	$("#gadget-posts").click(function(){	    
	    $.ajax({
			method: "GET",
			url: "https://demo.worona.org/wp-json/wp/v2/posts",
			success: function(post){
		    	for(k=0; k<5; k++){
		    		//console.log(post[k].categories);
		    		if(post[k].categories["0"] == 7){
		    			$('.posts').append("<h1>"+post[k].title.rendered+"</h1>");
		        		$('.posts').append("<p>"+post[k].content.rendered+"</p>");
		        		$('.posts').append("<h2>Author:"+post[k].author+"</h2>");
		        		$('.posts').append("<hr>");
		    		}
	    		}
			}
		});
	});
});