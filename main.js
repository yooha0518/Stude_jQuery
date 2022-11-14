$('h1').css({
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

var flower_numbar = 1;
$('#naxt_flower_imgslider_button').click(function(){
    if(flower_numbar > 4)
    {
        flower_numbar = 1;
    }
    $('#flower_imgslider').css("background-image","url(img/animation_flower"+ flower_numbar +".jpg)");
    flower_numbar++;
});