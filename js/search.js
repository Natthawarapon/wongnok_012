

$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                
              
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="jumbotron jumbotron-fluid">'+
                    '<div class="row" >' + 
                    '<div class="col-4">'+'<center>'+
                        '<div class="card" style="width: 18rem;">'+'<img src=' + data[i].photo +' class="thumbnail"/>' +'</div>'
                        +'</center>'+'</div>'+
                        '<div class="col-8 id="bg-card">'+
                            '<div class="card-body">' +'<p class="card-text">'+'<center id="ct">'+ data[i].name+'</center>'
                + '<center id="ct">'+data[i].rating+'</center>' +'<center><span class="rating-static rating-'+ data[i].rating*10+'"></span></center>' + '</p>'+
                '</div>' +'</div>'
                +'</div>'+
                '</a>';

							  $('#searchresult').append(row);	
			
              
            }
        });
    });    
});