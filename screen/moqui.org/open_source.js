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
        $(this).fadeOut(1, function(){
            clickedIndex = $(this).parents('.read-toggle').attr('data-id');
            $(this).parents('.read-toggle').html(contentArray[clickedIndex]+readLess);
        });
    });
    $(document).on('click','.read-less',function(){
        $(this).fadeOut(1, function(){
            clickedIndex = $(this).parents('.read-toggle').attr('data-id');
            $(this).parents('.read-toggle').html(initialContent[clickedIndex]+readMore);
        });
    });

    // For Carousel design JS 'Cost Effective'
    var contentArrayCostEffective=[];
    var indexCostEffective="";
    var clickedIndexCostEffective="";
    var minimumLengthCostEffective=$('.read-more-read-less-cost-effective').attr('data-id');
    var initialContentLengthCostEffective=[];
    var initialContentCostEffective=[];
    var readMoreCostEffective="..<div style='margin-top: 20px; text-align: center;'><button class='read-more-carousel'>Read More...</button></div>";
    var readLessCostEffective="<div style='margin-top: 15%;text-align: center;'><button class='read-less-carousel'>Read Less</button></div>";

    $('.click-cost-effective').each(function(){
        indexCostEffective = $(this).attr('data-id');
        contentArrayCostEffective[indexCostEffective] = $(this).html();
        initialContentLengthCostEffective[indexCostEffective] = $(this).html().length;
        if(initialContentLengthCostEffective[indexCostEffective]>minimumLengthCostEffective) {
            initialContentCostEffective[indexCostEffective]=$(this).html().substr(1,173,minimumLengthCostEffective);
        }else {
            initialContentCostEffective[indexCostEffective]=$(this).html();
        }
        $(this).html(initialContentCostEffective[indexCostEffective]+readMoreCostEffective);
    });
    $(document).on('click','.read-more-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexCostEffective = $(this).parents('.click-cost-effective').attr('data-id');
            $(this).parents('.click-cost-effective').html(contentArrayCostEffective[clickedIndexCostEffective]+readLessCostEffective);
        });
    });
    $(document).on('click','.read-less-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexCostEffective = $(this).parents('.click-cost-effective').attr('data-id');
            $(this).parents('.click-cost-effective').html(initialContentCostEffective[clickedIndexCostEffective]+readMoreCostEffective);
        });
    });

    // For Carousel design JS 'Advanced Tools'
    var contentArrayAdvancedTools = [];
    var indexAdvancedTools="";
    var clickedIndexAdvancedTools="";
    var minimumLengthAdvancedTools=$('.read-more-read-less-advanced-tools').attr('data-id');
    var initialContentLengthAdvancedTools=[];
    var initialContentAdvancedTools=[];
    var readMoreAdvancedTools="..<div style='margin-top: 20px; text-align: center;'><button class='read-more-carousel'>Read More...</button></div>";
    var readLessAdvancedTools="<div style='margin-top: 15%;text-align: center;'><button class='read-less-carousel'>Read Less</button></div>";

    $('.click-advanced-tools').each(function(){
        indexAdvancedTools = $(this).attr('data-id');
        contentArrayAdvancedTools[indexAdvancedTools] = $(this).html();
        initialContentLengthAdvancedTools[indexAdvancedTools] = $(this).html().length;
        if(initialContentLengthAdvancedTools[indexAdvancedTools]>minimumLengthAdvancedTools) {
            initialContentAdvancedTools[indexAdvancedTools]=$(this).html().substr(1,193,minimumLengthAdvancedTools);
        }else {
            initialContentAdvancedTools[indexAdvancedTools]=$(this).html();
        }
        $(this).html(initialContentAdvancedTools[indexAdvancedTools]+readMoreAdvancedTools);
    });
    $(document).on('click','.read-more-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexAdvancedTools = $(this).parents('.click-advanced-tools').attr('data-id');
            $(this).parents('.click-advanced-tools').html(contentArrayAdvancedTools[clickedIndexAdvancedTools]+readLessAdvancedTools);
        });
    });
    $(document).on('click','.read-less-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexAdvancedTools = $(this).parents('.click-advanced-tools').attr('data-id');
            $(this).parents('.click-advanced-tools').html(initialContentAdvancedTools[clickedIndexAdvancedTools]+readMoreAdvancedTools);
        });
    });

    // For Carousel design JS 'Applications'
    var contentArrayApplications=[];
    var indexApplications="";
    var clickedIndexApplications="";
    var minimumLengthApplications=$('.read-more-read-less-applications').attr('data-id');
    var initialContentLengthApplications=[];
    var initialContentApplications=[];
    var readMoreApplications="..<div style='margin-top: 20px; text-align: center;'><button class='read-more-carousel'>Read More...</button></div>";
    var readLessApplications="<div style='margin-top: 15%;text-align: center;'><button class='read-less-carousel'>Read Less</button></div>";

    $('.click-applications').each(function(){
        indexApplications = $(this).attr('data-id');
        contentArrayApplications[indexApplications] = $(this).html();
        initialContentLengthApplications[indexApplications] = $(this).html().length;
        if(initialContentLengthApplications[indexApplications]>minimumLengthApplications) {
            initialContentApplications[indexApplications]=$(this).html().substr(1,193,minimumLengthApplications);
        }else {
            initialContentApplications[indexApplications]=$(this).html();
        }
        $(this).html(initialContentApplications[indexApplications]+readMoreApplications);
    });
    $(document).on('click','.read-more-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexApplications = $(this).parents('.click-applications').attr('data-id');
            $(this).parents('.click-applications').html(contentArrayApplications[clickedIndexApplications]+readLessApplications);
        });
    });
    $(document).on('click','.read-less-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexApplications = $(this).parents('.click-applications').attr('data-id');
            $(this).parents('.click-applications').html(initialContentApplications[clickedIndexApplications]+readMoreApplications);
        });
    });

    // For Carousel design JS 'MultiInstance'
    var contentArrayMultiInstance=[];
    var indexMultiInstance="";
    var clickedIndexMultiInstance="";
    var minimumLengthMultiInstance=$('.read-more-read-less-multi-instance').attr('data-id');
    var initialContentLengthMultiInstance=[];
    var initialContentMultiInstance=[];
    var readMoreMultiInstance="..<div style='margin-top: 20px; text-align: center;'><button class='read-more-carousel'>Read More...</button></div>";
    var readLessMultiInstance="<div style='margin-top: 15%;text-align: center;'><button class='read-less-carousel'>Read Less</button></div>";

    $('.click-multi-instance').each(function(){
        indexMultiInstance = $(this).attr('data-id');
        contentArrayMultiInstance[indexMultiInstance] = $(this).html();
        initialContentLengthMultiInstance[indexMultiInstance] = $(this).html().length;
        if(initialContentLengthMultiInstance[indexMultiInstance]>minimumLengthMultiInstance) {
            initialContentMultiInstance[indexMultiInstance]=$(this).html().substr(1,193,minimumLengthMultiInstance);
        }else {
            initialContentMultiInstance[indexMultiInstance]=$(this).html();
        }
        $(this).html(initialContentMultiInstance[indexMultiInstance]+readMoreMultiInstance);
    });
    $(document).on('click','.read-more-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexMultiInstance = $(this).parents('.click-multi-instance').attr('data-id');
            $(this).parents('.click-multi-instance').html(contentArrayMultiInstance[clickedIndexMultiInstance]+readLessMultiInstance);
        });
    });
    $(document).on('click','.read-less-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexMultiInstance = $(this).parents('.click-multi-instance').attr('data-id');
            $(this).parents('.click-multi-instance').html(initialContentMultiInstance[clickedIndexMultiInstance]+readMoreMultiInstance);
        });
    });

    // For Carousel design JS 'CloudComputing'
    var contentArrayCloudComputing=[];
    var indexCloudComputing="";
    var clickedIndexCloudComputing="";
    var minimumLengthCloudComputing=$('.read-more-read-less-cloud-computing').attr('data-id');
    var initialContentLengthCloudComputing=[];
    var initialContentCloudComputing=[];
    var readMoreCloudComputing="..<div style='margin-top: 20px; text-align: center;'><button class='read-more-carousel'>Read More...</button></div>";
    var readLessCloudComputing="<div style='margin-top: 15%;text-align: center;'><button class='read-less-carousel'>Read Less</button></div>";

    $('.click-cloud-computing').each(function(){
        indexCloudComputing = $(this).attr('data-id');
        contentArrayCloudComputing[indexCloudComputing] = $(this).html();
        initialContentLengthCloudComputing[indexCloudComputing] = $(this).html().length;
        if(initialContentLengthCloudComputing[indexCloudComputing]>minimumLengthCloudComputing) {
            initialContentCloudComputing[indexCloudComputing]=$(this).html().substr(1,195,minimumLengthCloudComputing);
        }else {
            initialContentCloudComputing[indexCloudComputing]=$(this).html();
        }
        $(this).html(initialContentCloudComputing[indexCloudComputing]+readMoreCloudComputing);
    });
    $(document).on('click','.read-more-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexCloudComputing = $(this).parents('.click-cloud-computing').attr('data-id');
            $(this).parents('.click-cloud-computing').html(contentArrayCloudComputing[clickedIndexCloudComputing]+readLessCloudComputing);
        });
    });
    $(document).on('click','.read-less-carousel',function(){
        $(this).fadeOut(1, function(){
            clickedIndexCloudComputing = $(this).parents('.click-cloud-computing').attr('data-id');
            $(this).parents('.click-cloud-computing').html(initialContentCloudComputing[clickedIndexCloudComputing]+readMoreCloudComputing);
        });
    });

});
