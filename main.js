$('#name').css({
    color:'red',
    height:'300px',
    backgroundColor:'#888'
});

$('#name').mouseover(function(){
    $(this).css('background-color','green')
})
.mouseout(function(){
    $(this).css('background-color','#888')
});

$('#disappear').click(function(){
    $('#name').animate({
        opacity:0,
        fontSize:'0px'
    },1500,'easeInOutElastic',
    function(){
        $('#name').animate({
            opacity:100,
            fontSize:'30px'
        },1500,'easeInOutElastic')
    });
});


// ------------이미지 슬라이더-----------------------------------
//preOrNext== 0: 이전
//preOrNext== 1: 다음
var flower_number = 1;
function flower_imgslider(preOrNext){ 
    if(preOrNext == 0) //이전버튼을 눌렀을때 
    {
        flower_number--;
        if(flower_number < 1)
        {
            flower_number = 4;
        }
    }
    else{ //다음버튼을 눌렀을때 
        flower_number++;
        if(flower_number > 4)
        {
            flower_number = 1;
        }
    }
    return flower_number;
}

$('#naxt_flower_imgslider_button').click(function(){
    $('#flower_imgslider').css("background-image","url(img/animation_flower"+ flower_imgslider(preOrNext = 1) + ".jpg)");
});
$('#previous_flower_imgslider_button').click(function(){
    $('#flower_imgslider').css("background-image","url(img/animation_flower"+ flower_imgslider(preOrNext = 0)  +".jpg)");
});

//------------//이미지 슬라이더----------------------------------