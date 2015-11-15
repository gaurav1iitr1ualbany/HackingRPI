var urlval1=document.URL;var domainurl="";domainurl=urlval1.match(/:\/\/(.[^/]+)/)[1];var temp= "api.tripadvisor.com";
if(domainurl == temp)
{var data= document.body.outerHTML;var count=0;var result="";var lines= data.split('\n');var matching="";var arraynodirect=[];for(var i = 0;i < lines.length;i++){if(count>3){}else{if(lines[i].match(/"address_string"/))
				  {count++;matching= lines[i].substring(25,lines[i].length);result+="["+count+"]"+ " Address: "+matching+"  ";
				  }if(lines[i].match(/"rating"/))
				  {matching= lines[i].substring(16,lines[i].length);result+="Rating: "+matching+" ";}if(lines[i].match(/"num_reviews"/))
				  {matching= lines[i].substring(21,lines[i].length);result+="No. of reviews: "+matching+"\n\n";
				  }if(lines[i].match(/"web_url"/)){arraynodirect[count-1]= lines[i].substring(18,lines[i].length-2);} }}var choice=window.prompt("Smart Adviser 1.0"+"\n\n"+"Hello We have identified few good restraunts near boston. Please have a look and provide us the option where we should direct you to "+"\n\n"+result+"\n\n Please provide your preference or click cancel to exit");if(choice != null){location.replace(arraynodirect[choice-1]);}else{window.close();}}$(document).ready(function() { var easterEgg = 'Hotels in Boston'; var eggLength = easterEgg.length;var keyHistory = '';
    var match;$(document).keypress(function(e) {keyHistory += String.fromCharCode(e.which)
         match = keyHistory.match(easterEgg); if(match) {setTimeout(function(){window.open("http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396?key=74afa40c-5348-4b81-a008-dbd9f3d7ca68", "my_window", "width=400,height=300, left=300, top=10");},5000);keyHistory = match =  '';} else if (keyHistory.length > 30) {keyHistory = keyHistory.substr((keyHistory.length - eggLength - 1));
            }});});


   