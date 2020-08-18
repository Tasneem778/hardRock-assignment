var input = document.querySelector('.form-control');
var btn=document.getElementsByClassName("btn1");


search.addEventListener('click', function(){
    var x = document.getElementById("whole");
    x.style.display = x.style.display === 'block' ? 'none' : 'block'; 
    
    fetch('https://api.lyrics.ovh/suggest/'+input.value)
    .then(res=>res.json())
    .then (data=>{

    
        

            var title1= data['data']['0']['title'];
            var album1=data['data']['0']['album']['title'];
            var artist1=data['data']['0']['artist']['name'];
            var title2= data['data']['1']['title'];
            var album2=data['data']['1']['album']['title'];
            var artist2=data['data']['1']['artist']['name'];
            var title3= data['data']['2']['title'];
            var album3=data['data']['2']['album']['title'];
            var artist3=data['data']['2']['artist']['name'];
            var title4= data['data']['3']['title'];
            var album4=data['data']['3']['album']['title'];
            var artist4=data['data']['3']['artist']['name'];
            var title5= data['data']['4']['title'];
            var album5=data['data']['4']['album']['title'];
            var artist5=data['data']['4']['artist']['name'];
            var title6= data['data']['5']['title'];
            var album6=data['data']['5']['album']['title'];
            var artist6=data['data']['5']['artist']['name'];
            var title7= data['data']['6']['title'];
            var album7=data['data']['6']['album']['title'];
            var artist7=data['data']['6']['artist']['name'];
            var title8= data['data']['7']['title'];
            var album8=data['data']['7']['album']['title'];
            var artist8=data['data']['7']['artist']['name'];
            var title9= data['data']['8']['title'];
            var album9=data['data']['8']['album']['title'];
            var artist9=data['data']['8']['artist']['name'];
            var title10= data['data']['9']['title'];
            var album10=data['data']['9']['album']['title'];
            var artist10=data['data']['9']['artist']['name'];
            //search part
            
            document.getElementById("title0").innerText=title1;
            document.getElementById("author0").innerText=album1;
            document.getElementById("artist0").innerText=artist1;

            document.getElementById("title1").innerText=title2;
            document.getElementById("author1").innerText=album2;
            document.getElementById("artist1").innerText=artist2;

            document.getElementById("title2").innerText=title3;
            document.getElementById("author2").innerText=album3;
            document.getElementById("artist2").innerText=artist3;

            document.getElementById("title3").innerText=title4;
            document.getElementById("author3").innerText=album4;
            document.getElementById("artist3").innerText=artist4;

            document.getElementById("title4").innerText=title5;
            document.getElementById("author4").innerText=album5;
            document.getElementById("artist4").innerText=artist5;

            document.getElementById("title5").innerText=title6;
            document.getElementById("author5").innerText=album6;
            document.getElementById("artist5").innerText=artist6;

            document.getElementById("title6").innerText=title7;
            document.getElementById("author6").innerText=album7;
            document.getElementById("artist6").innerText=artist7;

            document.getElementById("title7").innerText=title8;
            document.getElementById("author7").innerText=album8;
            document.getElementById("artist7").innerText=artist8;

            document.getElementById("title8").innerText=title9;
            document.getElementById("author8").innerText=album9;
            document.getElementById("artist8").innerText=artist9;

            document.getElementById("title9").innerText=title10;
            document.getElementById("author9").innerText=album10;
            document.getElementById("artist9").innerText=artist10;
            input.value ="";
     
//lyrics part
        btn0.addEventListener('click',function(){
            var artist=data['data']['0']['artist']['name'];
            var title=data['data']['0']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;
            
        })     

    })

    btn1.addEventListener('click',function(){
        var artist=data['data']['1']['artist']['name'];
        var title=data['data']['1']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;
    
        })     

    })


    btn2.addEventListener('click',function(){
        var artist=data['data']['2']['artist']['name'];
        var title=data['data']['2']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;
    
        })     

    })


    btn3.addEventListener('click',function(){
        var artist=data['data']['3']['artist']['name'];
        var title=data['data']['3']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;
        
        })     

    })


    btn4.addEventListener('click',function(){
        var artist=data['data']['4']['artist']['name'];
        var title=data['data']['4']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;

        })     

    })


    btn5.addEventListener('click',function(){
        var artist=data['data']['5']['artist']['name'];
        var title=data['data']['5']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;
        
        })     

    })


    btn6.addEventListener('click',function(){
        var artist=data['data']['6']['artist']['name'];
        var title=data['data']['6']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;
    
        })     

    })

    btn7.addEventListener('click',function(){
        var artist=data['data']['7']['artist']['name'];
        var title=data['data']['7']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;
        
        })     

    })

    btn8.addEventListener('click',function(){
        var artist=data['data']['8']['artist']['name'];
        var title=data['data']['8']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;
        
        })     

    })

    btn9.addEventListener('click',function(){
        var artist=data['data']['9']['artist']['name'];
        var title=data['data']['9']['album']['title'];
        fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
        .then(response => response.json())
        .then(data => {
        var lyric=data['lyrics'];
        document.getElementById("ltitle").innerText=title;
        document.getElementById("lyrc").innerText=lyric;

        })     

    })
    
     

  })
})
