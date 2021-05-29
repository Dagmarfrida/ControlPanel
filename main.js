

//Profile Drop Down menu
//Direction from https://www.youtube.com/watch?v=04u09KBBjfM&t=364s
function menuToggle(){
    const toggleMenu = document.querySelector('.menu__dropdown');
    toggleMenu.classList.toggle('active')
}

//Submenu on Sidebar visible with a click
//Direction from https://www.youtube.com/watch?v=O9l75KOB2pE
$('.btn--communities').click(function(){
    $('nav ul .show--communities').toggleClass("show1");
    $('nav ul .first').toggleClass("rotate"); 
});

$('.btn--design').click(function(){
    $('nav ul .show--design').toggleClass("show2");
    $('nav ul .second').toggleClass("rotate");
});
$('.btn--manage').click(function(){
    $('nav ul .show--manage').toggleClass("show3");
    $('nav ul .third').toggleClass("rotate");
});
$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});

 //HOUSING ASSOCIATION DROP DOWN

 $('.btn-ha--light1').click(function(){
    $('div .table__dropDown1').toggleClass("light1");
    $('.btn--lightMode1').toggleClass("rotate"); 
    
});
$('.btn-ha--dark1').click(function(){
    $('div .table__dropDown1').toggleClass("dark1");
    $('.btn--darkMode1').toggleClass("rotate"); 

});
$('.btn-ha--light2').click(function(){
    $('div .table__dropDown2').toggleClass("light2");
    $('.btn--lightMode2').toggleClass("rotate"); 
   
});
$('.btn-ha--dark2').click(function(){
    $('div .table__dropDown2').toggleClass("dark2");
    $('.btn--darkMode2').toggleClass("rotate"); 
    
});
$('.btn-ha--light3').click(function(){
    $('div .table__dropDown3').toggleClass("light3");
    $('.btn--lightMode3').toggleClass("rotate"); 
    
});
$('.btn-ha--dark3').click(function(){
    $('div .table__dropDown3').toggleClass("dark3");
    $('.btn--darkMode3').toggleClass("rotate"); 
   
});
$('.btn-ha--light4').click(function(){
    $('div .table__dropDown4').toggleClass("light4");
    $('.btn--lightMode4').toggleClass("rotate"); 
    
});
$('.btn-ha--dark4').click(function(){
    $('div .table__dropDown4').toggleClass("dark4");
    $('.btn--darkMode4').toggleClass("rotate"); 
   
});

//DORMITORY DROP DOWN
$('.btn-do--light5').click(function(){
    $('div .table__dropDown5').toggleClass("light5");
    $('.btn--lightMode5').toggleClass("rotate"); 
    
});
$('.btn-do--dark5').click(function(){
    $('div .table__dropDown5').toggleClass("dark5");
    $('.btn--darkMode5').toggleClass("rotate"); 
    
});
$('.btn-do--light6').click(function(){
    $('div .table__dropDown6').toggleClass("light6");
    $('.btn--lightMode6').toggleClass("rotate"); 
   
});
$('.btn-do--dark6').click(function(){
    $('div .table__dropDown6').toggleClass("dark6");
    $('.btn--darkMode6').toggleClass("rotate"); 
    
});
$('.btn-do--light7').click(function(){
    $('div .table__dropDown7').toggleClass("light7");
    $('.btn--lightMode7').toggleClass("rotate"); 
    
});
$('.btn-do--dark7').click(function(){
    $('div .table__dropDown7').toggleClass("dark7");
    $('.btn--darkMode7').toggleClass("rotate"); 
   
});


//Animation on login form
//Direction from https://www.youtube.com/watch?v=t-EMinSz_Tk
const loginInputs = document.querySelectorAll('.input__login');

function focusFunc(){
    let parent = this.parentNode.parentNode; 
    parent.classList.add('focus');
}
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    } 
}
loginInputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});


 