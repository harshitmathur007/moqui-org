$(document).ready( function () {
    var contentArray=[];
    var index="";
    var clickedIndex="";
    var minimumLength=$('.read-more-less').attr('data-id');
    var initialContentLength=[];
    var initialContent=[];
    var readMore="....<span class='read-more'><span class='glyphicon glyphicon-plus-sign' style='margin-top: 12px;'></span>Read More</span>";
    var readLess="....<span class='read-less'><span class='glyphicon glyphicon-minus-sign'></span>Read Less</span>";
    $('.read-toggle').each(function(){
        index = $(this).attr('data-id');
        contentArray[index] = $(this).html();
        initialContentLength[index] = $(this).html().length;
        if(initialContentLength[index]>minimumLength) {
            initialContent[index]=$(this).html().substr(21,minimumLength);
        }else {
            initialContent[index]=$(this).html();
        }
        $(this).html(initialContent[index]+readMore);
        //console.log(initialContent[0]);


    });
    $(document).on('click','.read-more',function(){
        $(this).fadeOut(1000, function(){
            clickedIndex = $(this).parents('.read-toggle').attr('data-id');
            $(this).parents('.read-toggle').html(contentArray[clickedIndex]+readLess);
        });
    });
    $(document).on('click','.read-less',function(){
        $(this).fadeOut(1000, function(){
            clickedIndex = $(this).parents('.read-toggle').attr('data-id');
            $(this).parents('.read-toggle').html(initialContent[clickedIndex]+readMore);
        });
    });

});
