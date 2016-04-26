//прозрачность блоков
$("#maininfo1").on('inview', function (event, isInView) {
    if (isInView) {
        $("#maininfo1").css({opacity:  "1"});
        }
   });

 $("#maininfo2").on('inview', function (event, isInView) {
    if (isInView) {
        $("#maininfo2").css({opacity:  "1"});
        }
   });

 $("#maininfo3").on('inview', function (event, isInView) {
    if (isInView) {
        $("#maininfo3").css({opacity:  "1"});
        }
   });

//затемнение первого блока
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top > 100) $('#wrapheadercon').addClass('shadow1');//200 - это значение высоты прокрутки страницы для добавления класс
else $('#wrapheadercon').removeClass('shadow1');
    if (top > 150) $('#wrapheadercon').addClass('shadow2'); //200 - это значение высоты прокрутки страницы для добавления класс
else $('#wrapheadercon').removeClass('shadow2');
    if (top > 200) $('#wrapheadercon').addClass('shadow3'); //200 - это значение высоты прокрутки страницы для добавления класс
else $('#wrapheadercon').removeClass('shadow3');
    if (top > 250) $('#wrapheadercon').addClass('shadow4'); //200 - это значение высоты прокрутки страницы для добавления класс
else $('#wrapheadercon').removeClass('shadow4');
    if (top > 300) $('#wrapheadercon').addClass('shadow5'); //200 - это значение высоты прокрутки страницы для добавления класс
else $('#wrapheadercon').removeClass('shadow5');
});

$(window).scroll(function() {
var top = $(document).scrollTop();
if (top > 100) $('#header').addClass('shadow1');//200 - это значение высоты прокрутки страницы для добавления класс
else $('#header').removeClass('shadow1');
    if (top > 150) $('#header').addClass('shadow2'); //200 - это значение высоты прокрутки страницы для добавления класс
else $('#header').removeClass('shadow2');
    if (top > 200) $('#header').addClass('shadow3'); //200 - это значение высоты прокрутки страницы для добавления класс
else $('#header').removeClass('shadow3');
    if (top > 250) $('#header').addClass('shadow4'); //200 - это значение высоты прокрутки страницы для добавления класс
else $('#header').removeClass('shadow4');
    if (top > 300) $('#header').addClass('shadow5'); //200 - это значение высоты прокрутки страницы для добавления класс
else $('#header').removeClass('shadow5');
});

//плавная прокрутка
$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

//плавная прокрутка и маркеры для меню
function marker(obj){
var id = obj.id;
id = id.substring(0, id.length - 1);
//Сохраняем значение атрибута href в переменной:
$('html, body').animate({scrollTop: $('#' + id).offset().top}, 800);
}

//переключение маркеров в зоне видимости блоков
$("#header").on('inview', function (event, isInView) {
    if (isInView) {
		//alert ('ghjk');
		}
   });

$("#office").on('inview', function (event, isInView) {
    if (isInView) {
        }
   });

$("#maininfo").on('inview', function (event, isInView) {
    if (isInView) {
        }
   });

$("#mobile").on('inview', function (event, isInView) {
    if (isInView) {
        }
   });

/**function setheight()
  { var theWindow = $(window).height(); 
   $('#header').height(theWindow);  
   //alert("monitorHeight: " + theWindow); 
     } $(window).load(function() { setheight(); 
								 }); 
   $(window).resize(function(){ setheight(); });**/
   

//высота первого блока подстраивается под окно браузера
/**function setHeiHeight() {
    $('#header').css({
        height: $(window).height() + 'px';
        alert(height);
    });
}
setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна
**/

/**function setheight(){
    var theWindow = $(window).height();
    $('#header').height(theWindow);
    //alert("monitorHeight: " + theWindow);
    }

    $(window).load(function() {
    setheight();
    });

    $(window).resize(function(){
    setheight();
    });**/