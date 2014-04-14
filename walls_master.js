// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-backgrounds

$(document).ready(function(){

var $displayCartSummary = $('#display_cart_summary'),
	$wallsDisplayCartSummary = $('#walls_display_cart_summary'),
	numberOfItemsInCart = parseInt($displayCartSummary.text().split(' ')[0], 10);

if (numberOfItemsInCart > 0) {
	$wallsDisplayCartSummary.text(numberOfItemsInCart);
}

// ------------------------------------------------------------------------- start document ready function
  
//if( (prodNum() == 30428)   ){
// ---------------------------------------------- if DEVEL

;(function($) {
	 	
  $.fn.extend({
	  
	  SlideshowFlashySlow: {	
		  playShowFlashySlow: function(){
		
		
		var mySpeed = 500;
			var _show = $.fn.SlideshowFlashySlow;
			
			for(i=0; i < _show.numPics; i++){
			
			
				if($(_show.pictures[i]).hasClass('curPic'))
				{
					_show.currentPic = _show.pictures[i];
					if((i+1) == _show.numPics){
						_show.nextPic = _show.pictures[0];
					}
					else{
						_show.nextPic = _show.pictures[i+1];
					}
				}
			
			
			
			}		
		
			$(_show.currentPic).removeClass('curPic');
			$(_show.nextPic).addClass('curPic');
			
			//$(_show.nextPic).fadeIn(500, function(){
				//$(_show.currentPic).hide();
			//});	
		  
		  
		  $(_show.currentPic).fadeOut(mySpeed, function(){
			
				$(_show.currentPic).removeAttr("id");
				$(_show.nextPic).fadeIn(mySpeed);
				//$('#processing').remove();

			});	
		  
		  
		  
		  },		  
		  
		  init: function(pictures){
				var _show = $.fn.SlideshowFlashySlow;
				_show.pictures = pictures;
				_show.numPics = pictures.length;
					
		  }
	  }  
  
  });
	
	
})(jQuery);


//$("#quotes-2014-wrapper").show();

var arr = [];
var len = 12;
for (var i = 0; i < len; i++) {
    val = (i+1);
	if(val < 10){val = ("0"+val)};
	var obj = "<img src='/v/vspfiles/assets/images/Quotes/Quote_" + val + ".png'>";
    arr.push(obj);
}

shuffleArray(arr);

s = "";
var len = arr.length;
for (var i = 0; i < len; i++) {
s += arr[i];
}

$("#quotes-2014-bar").html(s);
$("#quotes-2014-bar").find( "img" ).first().attr({
  class: "curPic",
  id: "curDisp"
});


if(1==0){
	
//++++++++++++++++++++++++++++++++++++
$("#quotes-2014-bar").find( "img" ).first().attr('class','currentPic');

var buttons = $('#animation #animation-sub #slideshow-wrapper #slideshow #btns_wrap #btns a');
var pictures = $('#animation #animation-sub #slideshow-wrapper #slideshow img'); 
$.fn.Slideshow.init(buttons, pictures);
$.fn.Slideshow.intervalID = setInterval($.fn.Slideshow.playShow, 3000);
$('#btns_wrap').remove();

//++++++++++++++++++++++++++++++++++++
}else{

//++++++++++++++++++++++++++++++++++++


	var pictures = $('#quotes-2014-bar img'); 
		$.fn.SlideshowFlashySlow.init(pictures);
		$.fn.SlideshowFlashySlow.intervalID = setInterval($.fn.SlideshowFlashySlow.playShowFlashySlow, 4000);
//$.fn.SlideshowSmooth.init(pictures);
	//	$.fn.SlideshowSmooth.intervalID = setInterval($.fn.SlideshowSmooth.playShowSmooth, 4000);


//++++++++++++++++++++++++++++++++++++

}






// ---------------------------------------------- end if DEVEL  
//}
  
  
  
  
  
  
  
  
  
var bgCatNum = catNumBG();

var bgExtensions = ['jpg', 'png', 'gif'];
jQuery.each(bgExtensions, function() {
// start loop thru extensions
bgExtension = this;
bgFilename = bgCatNum + '.' + bgExtension;        
var flag = false;

jQuery.ajax({
    url:'http://www.walls360.com/v/vspfiles/assets/images/Backgrounds/' + bgFilename,
    type:'HEAD',
	async: false,
    success: function(){flag = true;}
});

//alert(bgFilename + ' - ' + flag);

if(flag){
$('body #page_wrapper').css('background-image','url(/v/vspfiles/assets/images/Backgrounds/' + bgFilename + ')');
return false;	
}

// end loop thru extensions
});


// -------------- start SPECIAL CASES

if(    isCatGlobal(2351) || catNumBreadcrumb()==2351 ||  isCatGlobal(2358) || catNumBreadcrumb()==2358    ){
// MOH
$('body #page_wrapper').css({'background-repeat':'no-repeat', 'background-color':'#000000'});
//
}

// -------------- end SPECIAL CASES

// ------------------------------------------------------------------------- end document ready function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-category


$(document).ready(function(){
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| start document ready function
if(thisPageIsCat()){
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' start category page modifications


// -------------------------------------------------------- start BREADCRUMBS
$("#content_area b").first().attr('id','catBreadcrumbs');
$("#catBreadcrumbs a").first().text('Walls 360');



if(   
								isCatGlobal(1820) 
								
								|| isCatGlobal(1849) 
								
								|| isCatGlobal(1976) 
								
								|| isCatGlobal(2277) 
								
								|| isCatGlobal(2276) 
								
								|| isCatGlobal(3792) 
								
								|| isCatGlobal(2283) 
								
								|| isCatGlobal(2327) 
								
								|| isCatGlobal(31643)




								|| isCatGlobal(1821) // Product Info
								|| isCatGlobal(2272) //  Founding Team
								|| isCatGlobal(2273) //  BOA
								|| isCatGlobal(2294) //  Mission
								|| isCatGlobal(1818) //  Press
								|| isCatGlobal(1825) //  Super Deals
								|| isCatGlobal(1819) //  Current Jobs
								|| isCatGlobal(1820) //  Catalog
								|| isCatGlobal(1822) //  Installation
                                || isCatGlobal(3796) //  Doodle Jump
								|| isCatGlobal(2347) //  EA
								|| isCatGlobal(28710) //  Derek Art
								|| isCatGlobal(1831) //  Star Trek
								|| isCatGlobal(2334) //  Topps
								|| isCatGlobal(2948) //  Mars Attacks
								|| isCatGlobal(2334) //  Vintage Sports
								|| isCatGlobal(31648) //  American Greetings
								|| isCatGlobal(31649) //  Care Bears
								|| isCatGlobal(31650) //  Strawberry Shortcake
								|| isCatGlobal(2359) //  Moshi
								|| isCatGlobal(2352) //  Penguin
								|| isCatGlobal(2146) //  Paddington Bear
								|| isCatGlobal(15527) //  Eric Carle
								
								






){
// kill breadcrumbs from top level categories
$("#content_area b").remove();


//$("#catBreadcrumbs").remove();
//$("#catBreadcrumbs").fadeOut( "slow");
//
}

// -------------------------------------------------------- end BREADCRUMBS


if(   $('.colors_backgroundneutral').length ){
// -------------------------------------------------------- start move list-style subcats below target or header

if(           ($('#walls-header').length)     ){
$("#content_area b").first().closest('table').attr('id', 'catBreadcrumbsTable');
$('#catBreadcrumbsTable').after($("#walls-header"));
}

if(           ($('#walls-target').length)     ){
$("#content_area b").first().closest('table').attr('id', 'catBreadcrumbsTable');
$('#catBreadcrumbsTable').after($("#walls-target"));
}

$(".colors_backgroundneutral").first().attr('id', 'walls-subcats-list');
$("#walls-subcats-list .colors_backgroundlight").first().remove();
 
// -------------------------------------------------------- end move list-style subcats below target or header
}




// graphic subcats and walls-target animation
$('#content_area a.smalltext').first().closest('table').attr('id', 'walls-sub-cat-table');


//if(       ($('#MainForm #jmenuhide').length)  &&  (  ($('#walls-header').length)  ||   ($('#walls-target').length)    )     ){
if(   ($('#walls-header').length) || ($('#walls-target').length) || ( $('.colors_backgroundneutral').length)          ){
// if walls-target or header - move that above crumbs and selector
		  $("#catBreadcrumbs").attr('id','catBreadcrumbs-v3');
		  
		  if($('#MainForm #jmenuhide').length){
		  //
		  $('#MainForm #jmenuhide').first().closest('table').attr('id', 'walls-cat-selector-table');
		  $('#MainForm').prepend('<div id="walls-cat-crumb-selector-wrapper"></div>');
		  $('#walls-cat-crumb-selector-wrapper').html($('#catBreadcrumbs-v3'));
		  $('#walls-cat-crumb-selector-wrapper').append($('#walls-cat-selector-table'));
		  $('#walls-cat-crumb-selector-wrapper').append('<br class="clear">');
		  $('#walls-cat-selector-table td').last().removeAttr('width');
		  $('#walls-cat-selector-table').removeAttr('width');
		  //
		  }
		  else{
		  if($('#walls-sub-cat-table').length){
		  //
		  $('#walls-target').after('<div id="walls-cat-crumb-selector-wrapper"></div>');
		  $('#walls-cat-crumb-selector-wrapper').html($('#catBreadcrumbs-v3'));
		  $('#walls-cat-crumb-selector-wrapper').append('<br class="clear">');
		  //$('#walls-cat-selector-table td').last().removeAttr('width');
		  //$('#walls-cat-selector-table').removeAttr('width');
		  //
		  }}
		  
		  $("#catBreadcrumbs-v3 a").first().text('Walls 360');
		  
		  
		  
		  
// end if walls-target or header - move that above crumbs and selector
}




if(    (parseInt(queryString('Cat')))  ||   (parseInt(queryString('cat')))     ||  (  isCatSeoNum()  )          ){
// ------------------------------------------------- start modify category page display selector
$('.sortby_select').attr('id', 'SortBy-Disable');
$('.sortby_select').remove();

var sortVal;

if(  !parseInt(queryString('sort'))  ){sortVal=5;}else{sortVal = parseInt(queryString('sort'));}

if(sortVal==1){sortSelected1='selected';}else{sortSelected1='';}
if(sortVal==2){sortSelected2='selected';}else{sortSelected2='';}
if(sortVal==3){sortSelected3='selected';}else{sortSelected3='';}
if(sortVal==4){sortSelected4='selected';}else{sortSelected4='';}
if(sortVal==5){sortSelected5='selected';}else{sortSelected5='';}
if(sortVal==6){sortSelected6='selected';}else{sortSelected6='';}
if(sortVal==7){sortSelected7='selected';}else{sortSelected7='';}
if(sortVal==8){sortSelected8='selected';}else{sortSelected8='';}
if(sortVal==9){sortSelected9='selected';}else{sortSelected9='';}
if(sortVal==10){sortSelected10='selected';}else{sortSelected10='';}
if(sortVal==11){sortSelected11='selected';}else{sortSelected11='';}
if(sortVal==12){sortSelected12='selected';}else{sortSelected12='';}
if(sortVal==13){sortSelected13='selected';}else{sortSelected13='';}

$('#jmenuhide').append('<select class="sortby_select" id="SortBy" onchange="if (this.value != \'\') {Add_Search_Param(\'sort\', this.value);} Refine();"><option value="1" '+sortSelected1+'><span class="PageText_L522n">Price: Low to High</span></option><option value="2" '+sortSelected2+'><span class="PageText_L523n">Price: High to Low</span></option><option value="5" '+sortSelected5+'><span class="PageText_L524n">Most Popular</span></option><option value="7"  '+sortSelected7+'><span class="PageText_L420n">Title</span></option><option value="3"  '+sortSelected3+'><span class="PageText_L505n">Newest</span></option><option value="4"  '+sortSelected4+'><span class="PageText_L525n">Oldest</span></option></select>');
// ------------------------------------------------- end modify category page display selector
}


if(        isCatGlobal(1833)     ){
// ----------------------------------------- start remove nav controls
$('#jmenuhide').remove();

$('img').each(function(index) {
// start loop
if(      $(this).attr("src")=='/v/vspfiles/templates/walls360/images/buttons/btn_go_gray.gif'         ){
$(this).remove();
return false;
}
// end loop
});

$('.results_per_page_select').remove();
$('.PageText_L244n').remove();

// ----------------------------------------- end remove nav controls
}





// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' end category page modifications
}
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| end document ready function
});


$(window).load(function(){
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| start window load function

if(isCatGlobal(2316) || isCatGlobal(1825) || isCatGlobal(1820)){
// ----------------------------------------------------------------------- START SocNet buttons on Catalog, DealOfDay and LastMinute pages
var strSocNet_URL = document.URL;
var strSocNet_PageTitle = "Walls 360 Super Deals! " + $.trim($('#walls_v3_option').text());
var strSocNet = '';

//google
strSocNet = strSocNet + '<a class="addthis_button_google_plusone" g:plusone:count="false" g:plusone:size="medium" id="socNet_google"></a>';
strSocNet = strSocNet + '<script type="text/javascript">var addthis_config = {data_track_clickback: true;};</script>';
strSocNet = strSocNet + '<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js?pub=csc309%40gmail%2Ecom"></script>';

//twitter
strSocNet = strSocNet + '<a href="https://twitter.com/share" class="twitter-share-button" data-text="'+strSocNet_PageTitle+'" data-via="walls360" data-url="'+strSocNet_URL+'" data-lang="en" data-count="none" data-size="medium" id="socNet_twitter"></a>';
// already coded on walls_animations
//strSocNet = strSocNet + '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);';
//strSocNet = strSocNet + 'js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</ script>';

//facebook
//strSocNet = strSocNet + '<div  style="margin:0 1px 0 1px !Important;" id="socNet_facebook"><fb:like send="true" href="https://my.volusion.com/FBService.aspx?mode=og&amp;url=aHR0cDovL3d3dy53YWxsczM2MC5jb20vZGVhbG9mdGhlZGF5LmFzcD9kZWFsPTM50" layout="button_count"></fb:like></div>';
//strSocNet = strSocNet + '<fb:like send="true" href="https://my.volusion.com/FBService.aspx?mode=og&amp;url=aHR0cDovL3d3dy53YWxsczM2MC5jb20vZGVhbG9mdGhlZGF5LmFzcD9kZWFsPTQx0" layout="button_count"></fb:like>';



//pinterest
//pinInterestButton2 = "<div id='pinterest-insert'></div>";
//strSocNet = strSocNet + pinInterestButton2; 


if(PageName()=='dealoftheday.asp' ){

//$('.deal-social').html(strSocNet);
//$('.deal-social').css({'display': 'block', 'margin-left': '10px !Important'});

}





if(isCatGlobal(1825) || isCatGlobal(1820)){
//if(1==0){
// start if SuoerDeals page OR full catalog page
		  
		  
		  //$('#dod_div').each(function(index) {
		  vHeight = 0;
$('.deal').each(function(index) {
// --------------------------------------------------------------------------------------------------------------------------------- start loop

									if(1==0){
										// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ OLD
									vTop = parseInt(vHeight + 215);
									
									var newSocNetButtons = '<div id="divSocNetButtons" style="left:365px !Important;top:'+vTop+'px !Important;" class="socNet'+index+'">'+strSocNet+'</div>';
									
									$(this).after(newSocNetButtons);
									
		//							if($(this ).find('.deal-image img').first().length){
									//
									var strSocNet_Image = $(this ).find('.deal-image img').first().attr('src');
									
									if(strSocNet_Image.substring(0,3)=="/v/"){
									strSocNet_Image = "http://www.walls360.com" + strSocNet_Image;
									}
									
									strSocNet_Desc = $.trim("Walls 360 Super Deal! " + $.trim($(this ).find('.deal-product-name a span').text()));
									
									//addPinterestButton(strSocNet_URL, strSocNet_Image, strSocNet_PageTitle);
									
									pinJs = '//assets.pinterest.com/js/pinit.js';
									//url = escape(url);
									url = encodeURIComponent(strSocNet_URL);
									media = encodeURIComponent(strSocNet_Image);
									description = encodeURIComponent(strSocNet_Desc);
									href = 'http://pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + description;
									html = '<a href="' + href + '" class="pin-it-button" count-layout="none"><img border="0" src="http://assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>';
									$(".socNet"+index+" #pinterest-insert").html(html);
									
									
									
									
									
									
									
									// addPinterestButton func lives in walls_functions
			//						}
									
									vHeight = parseInt(vHeight + $(this).outerHeight());
									//return false;
									
									}else{
										// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ NEW
									
									// remove default buttons
									
														$(this ).find('.deal-social #btn_vsharethis').remove( );
													
									// add social buttons
									
																		$(this ).find('.deal-social').prepend( strSocNet );
																		// add wrapper for pinterest button
																		$(this ).find('.deal-social').prepend( "<div id='pinterest-insert'></div>" );
																		
																		// get values for pinterest button
																		var strSocNet_Image = $(this ).find('.deal-image img').first().attr('src');
																		if(strSocNet_Image.substring(0,3)=="/v/"){
																		strSocNet_Image = "http://www.walls360.com" + strSocNet_Image;
																		}
																		strSocNet_Desc = $.trim("Walls 360 Super Deal! " + $.trim($(this ).find('.deal-product-name a span').text()));
																		
																		pinJs = '//assets.pinterest.com/js/pinit.js';
																		url = encodeURIComponent(strSocNet_URL);
																		media = encodeURIComponent(strSocNet_Image);
																		description = encodeURIComponent(strSocNet_Desc);
																		href = 'http://pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + description;
																		html = '<a href="' + href + '" class="pin-it-button" count-layout="none"><img border="0" src="http://assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>';
																		
																		// populate wrapper
																		$(this ).find('.deal-social #pinterest-insert').html(html);
																		
	
	
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ end if
									
									}
									

// --------------------------------------------------------------------------------------------------------------------------------- end loop
});
		  

//add pinterest js
js = document.createElement('script');
js.src = pinJs;
js.type = 'text/javascript';
document.body.appendChild(js);

		  
		  		  
// end if SuoerDeals page OR full catalog page
}


if(isCatGlobal(2316)){
// if is LastMinute page
		$('#last-minute').css('position','relative');
		var thisStyle = "position:absolute;bottom:20px;left:17px;width:auto !Important;margin:0px  !Important;padding:0px  !Important;float:none;clear:none;";
		var newSocNetButtons = '<div style="'+thisStyle+'">'+strSocNet+'</div>';
		$('#last-minute').append(newSocNetButtons);
// end if
}

// ----------------------------------------------------------------------- END new SocNet buttons on DealOfDay and LastMinute pages
}

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| end window load function
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-product


$(document).ready(function(){
// ------------------------------------------------------------------------- start document ready function
if(thisPageIsProd()){
// ---------------------------------------------------------------------------- start if this page is product


// --------------------------- related products section

$('.v65-product-related-header-cell .colors_backgroundlight').first().attr('style','background-color:#ffffff !important;');


$('.v65-product-related-header-cell td.colors_backgroundlight font.colors_productname b').first().attr('style','color: #666;font-size: 20px;font-weight: normal !important;text-transform:none !important;display: block;margin: -10px 0 10px 0;');


$('.v65-product-related-header-cell .v65-productDisplay-row .v65-productDisplay-cell a  img').each(function() {
//
$tempSRC = $(this).attr('src').replace('-0.jpg','-1.jpg');

$(this).attr('src', $tempSRC);

if( $(this).width() >=  $(this).height() )
{$(this).attr('style','width:200px;');}
else
{$(this).attr('style','height:200px;');}

//
});


// --------------------------- breadcrumb home text display

$('.vCSS_breadcrumb_td b a').first().text('Walls 360');


if( (prodNum() == 30215)  ){
// ..........................................................................................................................start exception 
$('.vCSS_breadcrumb_td').attr('style','font-size: 18px !Important;padding: 0 0 0 12px !Important;');
// ..........................................................................................................................end exception
}


// --------------------------- set IDs on important sections - design/format price box

$("input:radio").last().parent().attr("id","walls-options-container");

$('.product_code').closest('i').attr('id','walls-product_code_wrapper');

$('td.vCSS_breadcrumb_td font.productnamecolorLARGE').attr('id','walls-prod-name-big');

$('.colors_pricebox').first().before('<div id="walls-prod-name-big-wrapper"></div>');
$('#walls-prod-name-big-wrapper').html($('#walls-prod-name-big'));

// start v3
$('.colors_pricebox td').removeAttr('background');
//$('.colors_pricebox td img').remove();


$('.v65-productdetail-cartqty').closest('table').attr('id','walls-prod-quan-addCart-table');
$('#walls-prod-quan-addCart-table').removeAttr('cellpadding');
$('.v65-productdetail-cartqty').closest('td').attr('id','walls-prod-quan-addCart-table-td-left');
$('.vCSS_input_addtocart').closest('td').attr('id','walls-prod-quan-addCart-table-td-right');



var countOptionSubHead = parseInt($("#options_table  font.colors_productname i b").length);


switch(countOptionSubHead)
{
case 1:

$('#options_table  font.colors_productname i b').first().text('Choose Your Size:');

  break;

case 2:

$('#options_table  font.colors_productname i b').first().text('Choose Your Color:');
$('#options_table  font.colors_productname i b:eq(1)').first().text('Choose Your Size:');
$('#options_table select').first().attr('style','display:block !important;margin:-20px 0 0 0  !Important;');
$( "font:contains('Click to view another')").remove(); 
  
  break;
default:
}

$('img.vCSS_img_line_group_features').closest('table').remove();

$('#options_table tr  td a img').css('margin-left','-15px');


// --------------------------- do not display nophoto.gif

if($('img[src="/v/vspfiles/templates/walls360/images/nophoto.gif"]').length)
{
	$('img[src="/v/vspfiles/templates/walls360/images/nophoto.gif"]').closest('a').remove();
}


// --------------------------- start social buttons NEW

var tweetPageTitle = $('title').html(); 
var tweetURL = 'http://walls360.com/product-p/'+prodNum()+'.htm';
var tweetProductImage = 'http://www.walls360.com/v/vspfiles/photos/'+prodNum()+'-2T.jpg';

$('.addthis_button_email').remove();

$('#v65-share-buttons-cell').removeAttr('align');
$('#v65-share-buttons-container').removeAttr('style');



// google + 1
var googlePlusOneButton = '<a class="addthis_button_google_plusone" g:plusone:count="false" g:plusone:size="medium" ></a>';

// twitter
str= '<a href="https://twitter.com/share" class="twitter-share-button" data-text="" data-via="walls360" data-url="'+tweetURL+'" data-counturl="" data-lang="en" data-count="none" data-size="medium">Tweet</a>';
str=str+'<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
var newTweetButton = '<div  style="margin-left:5px !Important;">'+str+'</div>';

// facebook
var newFacebookButton =  '<div class="fb-like" data-send="true" data-width="90" data-layout="button_count" data-show-faces="false" style="margin-left:4px !Important;"></div>';

// pininterest
var pinInterestButton =  '<a href="http://pinterest.com/pin/create/button/?url='+tweetURL+'&media='+tweetProductImage+'&description='+tweetPageTitle+'" class="pin-it-button" count-layout="horizontal"></a>';
pinInterestButton =  pinInterestButton + '<script type="text/javascript" src="http://assets.pinterest.com/js/pinit.js"></script>';
var divPinInterestButton = '<div  style="margin-left:5px !Important;">'+pinInterestButton+'</div>';

var newButtonContent = googlePlusOneButton + newTweetButton + newFacebookButton + divPinInterestButton;

$('#v65-share-buttons-container').html(newButtonContent);
// --------------------------- end social buttons NEW



//$('#options_table tr  td a img').css('margin-left','-15px'); // moved up-page!


// ----------------------------------------- start v3 right column

var myWidth = 402;
var myWidthR = $('.colors_pricebox tbody').first().outerWidth();
var myMarginR = 10;
var myMarginR = (myWidthR - myWidth);

var myCatalog = $('.vCSS_breadcrumb_td a').last().html();
var myCatalogLink = $('.vCSS_breadcrumb_td a').last().attr('href');
//var myProduct = $('td.vCSS_breadcrumb_td font.productnamecolorLARGE').last().html();
var myProduct = $('#walls-prod-name-big').text();



var myProductLink = window.location.pathname; 


var prodInfoColumn = "<div id='prod-info-wrapper' style='width:"+myWidth+"px !important;margin:0 "+ myMarginR +"px 0 0px !important;' class='"+myWidthR+"'>";


if( (prodNum() == 31068)  ){
// ..........................................................................................................................start exception STARTUP PRODUCTS
if (todayDate < expireDate("3/1/2014") ) {
// start if expireDate
prodInfoColumn = prodInfoColumn + "<div style='clear:both;margin:15px auto 0 auto;border:4px solid red;height:70px;width:100%;text-align:center !important;padding:18px 0 0 0;font-size:18px;color: rgb(142, 149, 150) !important;'>Receive an additional 20% OFF automatically<br>with the purchase of two or more packages!</div>";


prodInfoColumn = prodInfoColumn + "<h4 style='margin: 15px 0px 10px 5px !important;'>Ordering Instructions</h4><h5 style='color:red;font-weight:bold !Important;'>Walls360 Startup Specials: Through February 28, 2014</h5>";
label = 'Details';
info = 'No Setup Fees! Design Consultation + Digital Proofs Included! After placing your order, you will receive an email directing you where to upload an AI or EPS file of your graphics. You will be contacted within 24 hours by a member of the Walls360 Creative Services Team, who will work with you to optimize your designs for the medium. Same day rush is sometimes available, for an additional fee. Please contact us via <a href="/Custom"  id="greyLinkRight" style="float:none !important;display:inline !important;">Walls360.com/Custom</a> if you need a rush order, or have any additional questions!';
style = "text-align:justify !Important;";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row' class='halfPad'><div class='label'>" + label + "</div><div class='info' style='" + style + "'>" + info + "</div><br><!-- end prod-info-row --></div>";
// end if expireDate    
};

//$("options_table b").first().html("Select Your Custom Package(s):");
$('#options_table  font.colors_productname i b').first().text('Select Your Custom Package(s):');


// ..........................................................................................................................end exception STARTUP PRODUCTS
}


prodInfoColumn = prodInfoColumn + "<h4>Additional Information</h4><h5 style='color:red;font-weight:bold !Important;'>Premium, Re-Positionable Wall Graphics from WALLS 360</h5>";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row'><div class='label'>Catalog</div><div class='info'><a href='"+myCatalogLink+"' id='greyLink'>"+myCatalog + "</a></div><br><!-- end prod-info-row --></div>";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row'><div class='label'>Product</div><div class='info'><a href='"+myProductLink+"' id='greyLink'>"+myProduct + "</a></div><br><!-- end prod-info-row --></div>";


label = 'Materials';
info = 'Printed on-demand at high-resolution with UltraChrome GS digital inks (CMYK +4) on a premium, self-adhesive fabric material that can be removed + re-used hundreds of times without damaging surfaces. Truly re-positionable premium wall graphics.';
style = "text-align:justify !Important;";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row' class='halfPad'><div class='label'>" + label + "</div><div class='info' style='" + style + "'>" + info + "</div><br><!-- end prod-info-row --></div>";

label = 'Quality';
info = 'Walls 360 uses the highest quality inks + re-positionable substrates available today at our on-demand wall graphics factory in Las Vegas. Decidedly superior in quality to wall decals + vinyl wall stickers. Highest quality wall graphics available worldwide.';
style = "text-align:justify !Important;";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row' class='halfPad'><div class='label'>" + label + "</div><div class='info' style='" + style + "'>" + info + "</div><br><!-- end prod-info-row --></div>";

label = 'Environment';
info = '100% on-demand production: No excess inventory or over-production. Recycling throughout production cycle. Non-toxic, environmentally safe, and biodegradable. Lead, nickel, and phthalate free. CPSIA certified. Eco-superior wall graphics.';
style = "text-align:justify !Important;";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row' class='halfPad'><div class='label'>" + label + "</div><div class='info' style='" + style + "'>" + info + "</div><br><!-- end prod-info-row --></div>";

label = 'Origin';
info = 'MADE IN USA: Las Vegas, Nevada';
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row' class='halfPad'><div class='label'>" + label + "</div><div class='info'>" + info + "</div><br><!-- end prod-info-row --></div>";


label = 'Installation';
//info = "Peel and Stick. Remove and Re-Use.<br><a href='/Installation' id='greyLinkRight'>Installation Instructions</a>";
info = "Peel and Stick. Remove and Re-Use.";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row' class='halfPad'><div class='label'>" + label + "</div><div class='info'>" + info + "</div><br><!-- end prod-info-row --></div>";


label = "<img src='/v/vspfiles/assets/images/logos/WallsLogo-Grey-95.png'>";
info = "<a href='/Product' id='greyLinkRight'>Full Product Information</a>";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row' class='halfPad'><div class='label'>" + label + "</div><div class='info'>" + info + "</div><br><!-- end prod-info-row --></div>";
prodInfoColumn = prodInfoColumn + "<h4>Shipping Information</h4><h5 style='color:red;z-index:1 !important;font-weight:bold !Important;'>Created On-Demand + Shipped Globally Within 48 Hours</h5>";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row'><div class='label'>Estimated Arrival</div><div class='info'>3 - 7 Business Days (United States)<br>5 - 20 Business Days (International)</div><br><!-- end prod-info-row --></div>";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row'><div class='label'>Return Policy</div><div class='info'>We will exchange undamaged items.</div><br><!-- end prod-info-row --></div>";
prodInfoColumn = prodInfoColumn + "<div id='prod-info-row'><div class='label'>Availability</div><div class='info'>This product ships WORLDWIDE.</div><br><!-- end prod-info-row --></div>";

prodInfoColumn = prodInfoColumn + "<!-- end prod-info-wrapper --></div>";

//var prodInfoColumn = myWidth;

$('.colors_pricebox').last().after(prodInfoColumn);

// end v3 right column 

$('.colors_descriptionbox').parent().attr('id','prodDescTD');

$('#prodDescTD').children().each(function () {
  if($(this).attr('id')=='v65-product-related'){
// do nothing
	}else{$(this).remove();}
});

var myCatalogBox = "<link href='/v/vspfiles/templates/walls360/css/catalog-v3-deal-of-the-day.css?v=1348830257' rel='stylesheet' type='text/css' /><div id='superdeals-v3-box' style='width: 1000px !Important;max-width: 1000px !important;margin: 15px auto !important;'><div>What can WALLS 360 create for YOUR empty walls?</div><a href='/Catalog'></a></div>";

$('#v65-product-related').before(myCatalogBox);
	
$('#content_area div table').last().remove();

$('#walls-legal-lines').attr('style','margin:0px 0px 15px 0px !Important;');
// ----------------------------------------- end v3 right column

// ...................................................... start topstrip slide down OLD
//right: 0 !important;
//top: 0 !important;
	
topstrip_social = "";
topstrip_social += "<div id='walls-footer-social' style='width: auto !important;margin: -8px 0 0 0 !important;float:left !important;'>"; 	
topstrip_social += "<a id='facebook' href='http://www.facebook.com/Walls360' target='_blank' alt='Facebook' title='Facebook'></a>";
topstrip_social += "<a id='twitter' href='http://twitter.com/#!/walls360' target='_new' alt='Twitter' title='Twitter'></a>";
topstrip_social += "<a id='instagram' href='http://www.instagram.com/Walls360' target='_blank' alt='Instagram' title='Instagram'></a>";
topstrip_social += "<div class='clear'></div>";
topstrip_social += '</div>';
topstrip_social += "<div class='clear'></div>";

topstrip_right = "<div style='float:left;margin:0 5px 0 0;'>1-888-244-9969</div> " + topstrip_social;	
	
topstrip = "<div id='topstrip-wrapper'><div id='topstrip-container'><div id='topstrip-left'><span id='topstrip-blue'>FREE PRIORITY SHIPPING</span> ON ALL USA ORDERS OVER $75.OO</div><div id='topstrip-right'>" + topstrip_right + "</div></div></div>";


//$('#header_wrap').before(topstrip);
//$('#topstrip-wrapper').slideDown('slow', function() {
    // Animation complete.
 // });	
// ...................................................... end topstrip slide down OLD	
	
// -------------------------------------------------------------------------------- end if product page
}
// ------------------------------------------------------------------------- end document ready function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-wallViz

function drawWallViz(wOP){
// start func drawWallViz

// end func drawWalViz	
}




$(document).ready(function(){
// ------------------------------------------------------------------------- start document ready function
if(thisPageIsProd()){
// ---------------------------------------------------------------------------- start if this page is product

	
	
if(        


isCatNumBreadCrumb(1976)

|| isCatNumBreadCrumb(2341)   

|| isCatNumBreadCrumb(31625)

|| isCatNumBreadCrumb(31642)

|| isCatNumBreadCrumb(1849)   

|| isCatNumBreadCrumb(2160)  

|| isCatNumBreadCrumb(2150) 

|| isCatNumBreadCrumb(15527)  

|| isCatNumBreadCrumb(3796) 

|| isCatNumBreadCrumb(15546)

|| isCatNumBreadCrumb(21271) 

||  isCatNumBreadCrumb(19057)

|| isCatNumBreadCrumb(31587)

|| isCatNumBreadCrumb(2313)

|| isCatNumBreadCrumb(2291)

|| isCatNumBreadCrumb(31618) 

|| isCatNumBreadCrumb(28709) 

|| isCatNumBreadCrumb(31626) 

|| isCatNumBreadCrumb(31625) 


|| isCatNumBreadCrumb(35552) 

|| isCatNumBreadCrumb(31645)


|| isCatNumBreadCrumb(31653)


|| isCatNumBreadCrumb(31598)



// basketball exceptions

|| isProdGlobal(30554)  || isProdGlobal(30553)  || isProdGlobal(30552) || isProdGlobal(30551)

//

 || isProdGlobal(30921) 
 
  || isProdGlobal(30943)  


  ){opViz = 1;}else{opViz = 0;}
  

// ---------------------------------------------------- start setup up radio button arrays

// ------ make array of option values
var arrRadio = new Array();
var theTextOnly = "";
if ( $('#walls-options-container s')[0] ) {
// remove strike thru tag

	  (function($) {
	      $.strRemove = function(theTarget, theString) {
	          return $("<div/>").append(
	              $(theTarget, theString).remove().end()
	          ).html();
	      };
	  })(jQuery);
	  
	  var theString = "<p>"+$("#walls-options-container").html()+"</p>";
	  theTextOnly = $.strRemove("s", theString);
	  theTextOnly = theTextOnly.replace(/(<.*?>)/ig,"");
	arrRadio=theTextOnly.split(".00");

}
else
{

arrRadio=$("#walls-options-container").text().split(".00");

}


// ------ check a radio button

// get count of radio buttons
var count_radio_buttons = parseInt($("#walls-options-container input:radio").length);
// make radio buttons variable element
var radio_buttons = $("#walls-options-container input:radio");
// check radio button
if(count_radio_buttons>1){
//
		  // set default index
		  i=0;
		  //if(isProdGlobal(30921)){
		  //if DEVEL TESTING RECORD	
		  for (var c=2; c<=count_radio_buttons; c++) {
		  //start loop
		  //iCHECK = (count_radio_buttons-c);
		  opVal = parseInt($.trim(arrRadio[(count_radio_buttons-c)]).slice(0, $.trim(arrRadio[(count_radio_buttons-c)]).indexOf(" ")));
		  if(isNaN(opVal)){
		  // keep looping
		  }else{
		  // check the radio button
			//		$("#walls-options-container input:radio:eq("+(count_radio_buttons-2)+")").attr('checked', true);
					
					
					
					
					// start SELECT OPTION ON LOAD exceptions
	
	switch(prodNum())
{
case 31133:
case 31067:
case 31041:
			$("#walls-options-container input:radio:eq("+ 3 +")").attr('checked', true);
break;

case 30946:
			$("#walls-options-container input:radio:eq("+ 2 +")").attr('checked', true);
break;

default:
			$("#walls-options-container input:radio:eq("+(count_radio_buttons-c)+")").attr('checked', true);
break;
}

					// end SELECT OPTION ON LOAD exceptions

					
					
					
					
					
					// get index of currently checked - this is not a 0 based index i.e. fifth button = 5 !! DISCREPANCY WITH INDEX SET IN check first BELOW !! 
					i = $(radio_buttons.filter(':checked')).parent().children("input:radio").index(radio_buttons.filter(':checked'));
					break;
					//$("#options_table").after('<div>'+ opVal +' : ' + i  + '</div>')
		  
		  }
		  //end loop
		  }
		  //end if DEVEL TESTING RECORD	
		  //}

		  
		  if(i==0){
		  // nothing was checked in loop so check first radio button
		  $("#walls-options-container input:radio:first").attr('checked', true);
		  //
		  }



}
else
{
// check first
$("#walls-options-container input:radio:first").attr('checked', true);
i=0; 	
}

// ---------------------------------------------------- end setup up radio button arrays












// .......................................................................................................... start on load

if(opViz == 1){  
// .............................................................................................................. start Visualizer 


// hide alt images
if($('#altviews').length>0){$('#altviews').hide();}


// lightswitch
$(['/v/vspfiles/assets/images/Products/LightSwitchV2.jpg']).preload();
// white chair
$(['/v/vspfiles/assets/images/Products/exampleApplication_FG-v2.png']).preload();
$(['/v/vspfiles/assets/images/Products/exampleApplication_BG-v2.png']).preload();
// red chair
$(['/v/vspfiles/assets/images/Products/exampleApplication_FG-v3.png']).preload();
$(['/v/vspfiles/assets/images/Products/exampleApplication_BG-v3.png']).preload();

var w=0;
var exampleApplication = "";

//--

wOP = parseInt($.trim(arrRadio[i]).slice(0, $.trim(arrRadio[i]).indexOf(" ")));

// start WIDTH exceptions
if(prodNum()==30944){
	wOP = parseInt(wOP * 3.7);
	
	}
if(prodNum()==31134){
	wOP = parseInt(wOP * 3);
}
// end WIDTH exceptions

if(isNaN(wOP)){opFormat=0;}else{opFormat=1;}

if(opFormat==1){
//................... if opFormat
if($('#alternate_product_photo_3').length>0){
// get transparent image if available
srcVizImage = $('#alternate_product_photo_3').attr('src');
srcVizImage = srcVizImage.replace(/-3S.gif/g, '-3T.gif');
idImage = '#alternate_product_photo_3';
}
else
{
// else use standard image
srcVizImage = $('#product_photo').attr('src');
idImage = '#product_photo';
}

///////
var screenImage = $(idImage);
// Create new offscreen image to test
var theImage = new Image();
theImage.src = screenImage.attr("src");
// Get accurate measurements from that.
var imageWidth = theImage.width;
var imageHeight = theImage.height;
// get ratio and orientation
if(  imageWidth > imageHeight ){
exImgRatio =    parseFloat(    imageWidth / imageHeight    )   ;
exImgOrientation = "Horizontal";
}else{
exImgRatio =   parseFloat(   imageHeight / imageWidth     )    ;
exImgOrientation = "Vertical";
}
///////

if(exImgOrientation=="Horizontal" && exImgRatio<=3){
lightswitchThreshold = 36;
}else{lightswitchThreshold = 24;}
if(exImgOrientation=="Vertical" && exImgRatio<=3){
lightswitchThreshold = 12;
}else{lightswitchThreshold = 24;}

// start LIGHTSWITCH exceptions
if(prodNum()==19359){lightswitchThreshold=6;}
if(isCatNumBreadCrumb(19057) && exImgOrientation=="Vertical"){lightswitchThreshold=17;}
if(prodNum()==30630){
	lightswitchThreshold = 11;
	}
// end LIGHTSWITCH exceptions

if(wOP <= lightswitchThreshold){
exAppBGClass='exAppBG-2';
exAppFGClass='exAppFG-2';
w = (wOP * 13);
}
if( (wOP > lightswitchThreshold) && (wOP<= 60) ){
exAppBGClass='exAppBG-1';
exAppFGClass='exAppFG-1';
w = ((wOP * 10) / 2);
}
if( wOP > 60){
exAppBGClass='exAppBG-3';
exAppFGClass='exAppFG-3';
w = ((wOP * 10) / 2);
}

strWidth = w+"px";

if(exImgOrientation=="Vertical" || wOP > 60){
idVizImage = "exampleApplication-image-vertical";
}
else{
idVizImage = "exampleApplication-image-horizontal";
}

exampleApplication += "<div id='exampleApplication' class='"+exAppBGClass+"'><div id='exampleApplication-FG' class='"+exAppFGClass+"'></div>";
exampleApplication += "<img src='"+ srcVizImage  +"' id='"+ idVizImage  +"'>";
exampleApplication += "</div>";

$("#v65-share-buttons-cell").closest("table").after(exampleApplication);
$("#exampleApplication img").css("display","block");
$("#exampleApplication img").css("width",strWidth);

//................... end if opFormat 
}
// end opViz
}



// start set price
thisPrice = $.trim(arrRadio[i]).slice($.trim(arrRadio[i]).lastIndexOf("$")) +".00";
startPrice = $.trim(arrRadio[0]).slice($.trim(arrRadio[0]).lastIndexOf("$")) +".00";
if(i==0){
altStr = "<div id='walls-starting-at-wrapper'>Starting At: "+startPrice+" </div><b><font class='pricecolor colors_productprice'>"+ startPrice +" </font></b>";
}else{
altStr = "<div id='walls-starting-at-wrapper'>Starting At: "+startPrice+" </div><b><font class='pricecolor colors_productprice'>"+ thisPrice +" </font></b>";
}
$('table.colors_pricebox font.colors_productprice').closest("td").html(altStr);
// end set price


// .......................................................................................................... end on load










$("#walls-options-container").delegate('input[type="radio"]', 'click', function () {
// .......................................................................................................... start radio click
i = $(this).parent().children("input:radio").index(this);


if(opViz == 1){  
// --------------------------------------------- start if opViz
wOP = parseInt($.trim(arrRadio[i]).slice(0, $.trim(arrRadio[i]).indexOf(" ")));

// start WIDTH exceptions
if(prodNum()==30944){
	wOP = parseInt(wOP * 3.7);
}
if(prodNum()==31134){
	wOP = parseInt(wOP * 3);
}
// end WIDTH exceptions

if(isNaN(wOP)){opFormat=0;}else{opFormat=1;}





if( isProdGlobal(30554)  || isProdGlobal(30553)  || isProdGlobal(30552) || isProdGlobal(30551)  || isProdGlobal(30921) 


 || isProdGlobal(31067) 

){
// ..........................................................................................................................start SETS EXCEPTIONS	
if(opFormat==0){

if( isProdGlobal(30921) ){
// if THANKSGUVING
switch(i+1)
{
case 6:

exAppBGClass="exAppBG-2";
$('#exampleApplication').attr('class',exAppBGClass);
$('#exampleApplication-FG').attr('class',"");
//strWidth = "500px";
//$("#exampleApplication img").css("width",strWidth);
nuSRC = $('#alternate_product_photo_4').attr("src");
nuSRC = nuSRC.replace("S.jpg",".jpg");
$("#exampleApplication img").attr("src",nuSRC);
	$("#exampleApplication img").attr("id","exampleApplication-image-horizontal");
	$("#exampleApplication img").attr("style","display:block;width:500px;margin: 0px auto 0 auto !important;");
	
		
break;
case 7:


exAppBGClass="exAppBG-2";
$('#exampleApplication').attr('class',exAppBGClass);
$('#exampleApplication-FG').attr('class',"");
//strWidth = "500px";
//$("#exampleApplication img").css("width",strWidth);
nuSRC = $('#alternate_product_photo_5').attr("src");
nuSRC = nuSRC.replace("S.jpg",".jpg");
$("#exampleApplication img").attr("src",nuSRC);

$("#exampleApplication img").attr("id","exampleApplication-image-horizontal");
		
$("#exampleApplication img").attr("style","display:block;width:500px;margin: 0px auto 0 auto !important;");
	

break;
default:
//
  break;
}
// end if THANKSGUVING
}



if( isProdGlobal(30554)  || isProdGlobal(30553)  || isProdGlobal(30552) || isProdGlobal(30551)  ){
// if BASKETBALL
switch(i+1)
{
case 7:

exAppBGClass="exAppBG-2";
$('#exampleApplication').attr('class',exAppBGClass);
$('#exampleApplication-FG').attr('class',"");
//strWidth = "500px";
//$("#exampleApplication img").css("width",strWidth);
nuSRC = $('#alternate_product_photo_4').attr("src");
nuSRC = nuSRC.replace("S.jpg",".jpg");
$("#exampleApplication img").attr("src",nuSRC);
	$("#exampleApplication img").attr("id","exampleApplication-image-horizontal");
	$("#exampleApplication img").attr("style","display:block;width:500px;margin: 0px auto 0 auto !important;");
	
		
break;
case 8:


exAppBGClass="exAppBG-2";
$('#exampleApplication').attr('class',exAppBGClass);
$('#exampleApplication-FG').attr('class',"");
//strWidth = "500px";
//$("#exampleApplication img").css("width",strWidth);
nuSRC = $('#alternate_product_photo_5').attr("src");
nuSRC = nuSRC.replace("S.jpg",".jpg");
$("#exampleApplication img").attr("src",nuSRC);

$("#exampleApplication img").attr("id","exampleApplication-image-horizontal");
		
$("#exampleApplication img").attr("style","display:block;width:500px;margin: 0px auto 0 auto !important;");
	

break;
default:
//
  break;
}
// end if BASKETBALL
}
				  




	
	
// end if opFormat == 0
}
else
{
// start else if opFormat == 1
										if($('#alternate_product_photo_3').length>0){
										// get transparent image if available
										srcVizImage = $('#alternate_product_photo_3').attr('src');
										srcVizImage = srcVizImage.replace(/-3S.gif/g, '-3T.gif');
										}
										else
										{
										// else use standard image
										srcVizImage = $('#product_photo').attr('src');
										}
											$("#exampleApplication img").attr("src",srcVizImage);
										//$("#exampleApplication img").attr("id","exampleApplication-image-horizontal");
										$("#exampleApplication img").attr("style","");
										$("#exampleApplication img").css("display","block");
										$("#exampleApplication img").css("width",strWidth);
										
										exImgWidth = $("#exampleApplication img").width();
										exImgHeight = $("#exampleApplication img").height();
										if((exImgHeight > exImgWidth) && (exImgHeight>200)){
										$("#exampleApplication img").attr("id","exampleApplication-image-vertical");
										}
										else{
												
												$("#exampleApplication img").attr("id","exampleApplication-image-horizontal");
												
												if( wOP >= 60){
												$("#exampleApplication img").attr("id","exampleApplication-image-vertical");
												}
										
										}
// end else if opFormat == 1
}
// .......................................................................................................................... end SETS EXCEPTIONS	
}


if(opFormat==1){
// start if opFormat=1
if(exImgOrientation=="Horizontal" && exImgRatio<=3){
lightswitchThreshold = 36;
}else{lightswitchThreshold = 24}

if(exImgOrientation=="Vertical" && exImgRatio<=3){
lightswitchThreshold = 12;
}else{lightswitchThreshold = 24}

// start LIGHTSWITCH exceptions
if(prodNum()==19359){lightswitchThreshold=6;}
if(isCatNumBreadCrumb(19057) && exImgOrientation=="Vertical"){lightswitchThreshold=17;}
if(prodNum()==30630){
	lightswitchThreshold = 11;
	}
// end LIGHTSWITCH exceptions

if(wOP <= lightswitchThreshold){
// lightswitch	
exAppBGClass='exAppBG-2';
exAppFGClass='exAppFG-2';
w = (wOP * 13);
}
if( (wOP > lightswitchThreshold) && (wOP<= 60) ){
// white chair
exAppBGClass='exAppBG-1';
exAppFGClass='exAppFG-1';
w = ((wOP * 10) / 2);
}
if( wOP > 60){
// red chair
exAppBGClass='exAppBG-3';
exAppFGClass='exAppFG-3';
w = ((wOP * 10) / 2);
}


$('#exampleApplication').attr('class',exAppBGClass);
$('#exampleApplication-FG').attr('class',exAppFGClass);

strWidth = w+"px";
$("#exampleApplication img").css("width",strWidth);

// start adjust for vertical
exImgWidth = $("#exampleApplication img").width();
exImgHeight = $("#exampleApplication img").height();
if((exImgHeight > exImgWidth) && (exImgHeight>200)){
$("#exampleApplication img").attr("id","exampleApplication-image-vertical");
}
else{
		
		$("#exampleApplication img").attr("id","exampleApplication-image-horizontal");
		
		if( wOP >= 60){
		$("#exampleApplication img").attr("id","exampleApplication-image-vertical");
		}

}
// end adjust for vertical

// end if opFormat=1
}
// --------------------------------------------- end if opViz
}
	

if($('#altviews a').length<2){$('#altviews a').hide();}

// start set price
thisPrice = $.trim(arrRadio[i]).slice($.trim(arrRadio[i]).lastIndexOf("$")) +".00";
startPrice = $.trim(arrRadio[0]).slice($.trim(arrRadio[0]).lastIndexOf("$")) +".00";
if(i==0){
altStr = "<div id='walls-starting-at-wrapper'>Starting At: "+startPrice+" </div><b><font class='pricecolor colors_productprice'>"+startPrice+" </font></b>";
}else{
altStr = "<div id='walls-starting-at-wrapper'>Starting At: "+startPrice+" </div><b><font class='pricecolor colors_productprice'>"+thisPrice+" </font></b>";
}
$('table.colors_pricebox font.colors_productprice').closest("td").html(altStr);
// end set price

// .......................................................................................................... end radio click
});


	
	
// -------------------------------------------------------------------------------- end if product page
}
// ------------------------------------------------------------------------- end document ready function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-animations


$(document).ready(function(){
// ------------------------------------------------------------------------- start document ready function
 
$('#cat_dod #dod_div .deal-main-heading').html("Deal of the Day");


 if(       (!isCatGlobal(1820))   &&  (!thisPageIsProd())        ){  
  //
if ( $('#walls-description-box-wrapper')[0] ) {

var descBoxContent = "<a id='walls-description-box-catalog' href='/Catalog'></a><p id='first'>WALLS 360 wall graphics are printed on-demand at high-resolution with premium 8-color UltraChrome&trade; GS digital inks, for stunning color gamut and accuracy.</p><p>WALLS 360 wall graphics are created using a premium re-positionable fabric material that will stick to almost any surface - from walls and windows to ceilings and around corners.</p><p>WALLS 360 wall graphics are self-adhesive, easy to install, and can be removed and re-hung hundreds of times without losing adhesion, leaving a mark, or damaging surfaces.</p><p>WALLS 360 wall graphics are precision contour-cut from a single piece of premium re-positionable fabric paper, for truly seam-less installation.</p><p id='last'>WALLS 360 wall graphics are created in the United States, and shipped globally from our (new!) state-of-the-art on-demand wall graphics production facility in Las Vegas, Nevada.</p>";
//$('#walls-description-box-wrapper').html(descBoxContent);
$('#ProductDetail_ProductDetails_div').html($('#walls-description-box-wrapper').html(descBoxContent));
	
}
//
 }


// category selector vertical align
$('#MainForm table tr td table tr td').each(function(index) {
// start loop

$(this).attr('valign','top');
//alert($(this).attr('valign'));
return false;
// end loop
});



if(isCatGlobal(2316)){

// ---- start CATEGORY page description box headers

//1
$('#walls-description-category-page-version-header-1').bind({
  click: function() {

$(this).attr('class','cat-box-header on');
$('#walls-description-category-page-version-div-1').css('display','block');

$('#walls-description-category-page-version-header-2').attr('class','cat-box-header off');
$('#walls-description-category-page-version-div-2').css('display','none');
 
 }
});

//2
$('#walls-description-category-page-version-header-2').bind({
  click: function() {

$(this).attr('class','cat-box-header on');
$('#walls-description-category-page-version-div-2').css('display','block');

$('#walls-description-category-page-version-header-1').attr('class','cat-box-header off');
$('#walls-description-category-page-version-div-1').css('display','none');
 
 }
});

// ---- end CATEGORY page description box headers
}





if(isCatGlobal(1820) && thisBrowser == 'Safari'){ 
$('#cat_dod').css('margin-left','-8px !Important');
}

if ( $('#catalog-box')[0] ) {
	// start NEW CATALOG BOX

	  $('#catalog-box').css({'background-position': '0px 0px'});
	  var catBoxLayers = "<a id='catBox-1' href='/Catalog'></a><a id='catBox-2' href='/Product'></a><a id='catBox-3' href='/Custom'></a>";
	  $('#catalog-box').html(catBoxLayers);
	  
	  
	  $('#catBox-1')
	   .mouseover(function() {
		 //$('#catalog-box').css('backgroundPosition', '0px -299px');
		 $('#catalog-box').css('backgroundPosition', offSet1);
	   
	   })
	   .mouseout(function() {
		 $('#catalog-box').css('backgroundPosition', '0px 0px');
	   })
	  
	  $('#catBox-2')
	   .mouseover(function() {
	  //   $('#catalog-box').css('backgroundPosition', '0px -597px');
		 $('#catalog-box').css('backgroundPosition', offSet2);
	   })
	   .mouseout(function() {
		 $('#catalog-box').css('backgroundPosition', '0px 0px');
	   })
	  
	  
	  $('#catBox-3')
	   .mouseover(function() {
	  //     $('#catalog-box').css('backgroundPosition', '0px -895px');
		 $('#catalog-box').css('backgroundPosition', offSet3);
	   })
	   .mouseout(function() {
		 $('#catalog-box').css('backgroundPosition', '0px 0px');
	   })

// end NEW CATALOG BOX
}



$('#walls360-link-wrapper').css('backgroundPosition', '0px 0px');

$('#walls360-home')
.mouseover(function() {
 $('#walls360-link-wrapper').css('backgroundPosition', '0px -70px');
})
.mouseout(function() {
 $('#walls360-link-wrapper').css('backgroundPosition', '0px 0px');
})

$('#walls360-full')
.mouseover(function() {
 $('#walls360-link-wrapper').css('backgroundPosition', '0px -138px');
})
.mouseout(function() {
 $('#walls360-link-wrapper').css('backgroundPosition', '0px 0px');
})

$('#walls360-product')
.mouseover(function() {
 $('#walls360-link-wrapper').css('backgroundPosition', '0px -206px');
})
.mouseout(function() {
 $('#walls360-link-wrapper').css('backgroundPosition', '0px 0px');
})

$('#walls360-custom')
.mouseover(function() {
 $('#walls360-link-wrapper').css('backgroundPosition', '0px -274px');
})
.mouseout(function() {
 $('#walls360-link-wrapper').css('backgroundPosition', '0px 0px');
})



//Kids
var kidsCrumbsList = ".vCSS_breadcrumb_td b a,.vCSS_breadcrumb_td a,#catBreadcrumbs a,#catBreadcrumbs-v3 a";
var arrKids = kidsCrumbsList.split(',');
for(var i = 0; i<arrKids.length; i++){
strFIndReplace(arrKids[i],'Kids','Kids Wall Graphics');
}

// ------------------------------------------------------------------------- end document ready function
});





$(window).load(function(){
// ------------------------------------------------------------------------- start window load function
$.getScript('http://platform.twitter.com/widgets.js');
// ------------------------------------------------------------------------- end window load function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-extra


$(document).ready(function(){
// ------------------------------------------------------------------------- start document ready function
 
if(    thisIsTheSearchResultsPage()   )
{
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' start SearchResults.asp
$('#content_area b').first().attr({
  id: 'catBreadcrumbs',
  class: 'left'
});


$('#MainForm table').first().attr({
  id: 'searchResultsSelectWrapper'
});

$('#MainForm #jmenuhide').first().attr({
  id: 'jmenuhide-SearchResults'
});

$('#MainForm input[type="image"]').first().attr({
  id: 'searchbutton-SearchResults'
});

var nuOptions = '<option value="1">Price: Low to High</option><option value="2">Price: High to Low</option><option value="5">Most Popular</option><option value="7">Title</option><option value="3">Newest</option><option value="4">Oldest</option>';
$('#MainForm #SortBy').html(nuOptions);

if(valQueryString("sort")){
//	

$("#SortBy > option").each(function() {
    //alert(this.text + ' ' + this.value);

if(this.value==valQueryString("sort")){
	
	$('#SortBy').val(this.value);return false;
	}

});


	//
	}

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' end SearchResults.asp
}


if(PageName()=='affiliate_signup.asp' ){
	// if is affiliate page
$('input[name="TaxID"]').attr('size','50');
$('input[name="TaxID"]').attr('maxlength','150');
// end if
}


// ------------------------------------------------------------------------- end document ready function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-legal-lines



$(document).ready(function(){
// ---------------------------------------------------------------------------------- start document ready function

if(    
isCatNumBreadCrumb(31598) 
){
// 
var legalLine = "&copy; "+returnYear()+" UNLV Libraries Special Collections. All rights reserved.";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//
}





if(    

 isCatNumBreadCrumb(31653) 

){
// 


var legalLine = "THE ELEMENTS OF GEOMETRY Re-Positionable Wall Graphics by Euclid of Alexandria<br>Curated from <i>Byrne's Euclid</i> by Jonathon Keats";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//
}

	



if(    

 isCatNumBreadCrumb(19057) 

){
// 
var legalLine = "&trade; &amp; &copy; "+returnYear()+" Big Idea Entertainment";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//
}




if(    


isCatGlobal(2150) || isCatNumBreadCrumb(2150) ||  
isCatGlobal(15527) || isCatNumBreadCrumb(15527) 



){
// 
var legalLine = "&trade; &amp; &copy; "+returnYear()+" ERIC CARLE LLC.<br><i style='color:red !Important;'>Currently shipping to North American customers only.</i>";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//
}




if(
isCatGlobal(2334) || isCatNumBreadCrumb(2334) ||  
isCatGlobal(2948) || isCatNumBreadCrumb(2948) || 
isCatGlobal(2325) || isCatNumBreadCrumb(2325) || 
isCatGlobal(2335) || isCatNumBreadCrumb(2335) || 
isCatGlobal(2332) || isCatNumBreadCrumb(2332) || 

isCatGlobal(2947) || isCatNumBreadCrumb(2947) || 
isCatGlobal(2333) || isCatNumBreadCrumb(2333) || 


isCatGlobal(2327) || isCatNumBreadCrumb(2327) 




 
    ){

// start topps
var legalLine = "&copy; "+returnYear()+" The Topps Company, Inc. All Rights Reserved.";

$('#walls-legal-lines').html(legalLine);
$('select.results_per_page_select').hide();	




// end topps
}








 
if(
isCatGlobal(14001) || isCatNumBreadCrumb(14001)  
    ){

// start jetpack
var legalLine = "&copy; "+returnYear()+" Halfbrick Studios Pty. Ltd. All Rights Reserved.";


$('#walls-legal-lines').html(legalLine);
//$('.pages_available_text').parents().eq(3).remove();  // "Great-grandfather".
//$('#walls-legal-lines').attr('style','margin:-38px 0 0 0 !Important;text-align:center !important;');
$('select.results_per_page_select').hide();	





// end jetpack
}



if(
isCatGlobal(3797) || isCatNumBreadCrumb(3797)  
    ){

// start hubble
var legalLine = "ESA/Hubble<br>Learn More: <a href='http://www.SpaceTelescope.org' target='_blank'>SpaceTelescope.org</a> + <a href='http://www.HubbleSite.org' target='_blank'>HubbleSite.org</a>";


$('#walls-legal-lines').html(legalLine);
//$('.pages_available_text').parents().eq(3).remove();  // "Great-grandfather".
//$('#walls-legal-lines').attr('style','margin:-38px 0 0 0 !Important;text-align:center !important;');
$('select.results_per_page_select').hide();	
//$('#MainForm').attr('style','margin:-40px 0 0 0 !Important;');





// end hubble
}












if(
isCatGlobal(13996) || isCatNumBreadCrumb(13996)  
    ){
		

// start fruit ninja
var legalLine = "Fruit Ninja &trade; and all related titles, logos and characters are trademarks of Halfbrick Studios Pty. Ltd.<br>&copy; "+returnYear()+" Halfbrick Studios Pty. Ltd. All Rights Reserved";


$('#walls-legal-lines').html(legalLine);
//$('.pages_available_text').parents().eq(3).remove();  // "Great-grandfather".
//$('#walls-legal-lines').attr('style','margin:-38px 0 0 0 !Important;');
$('select.results_per_page_select').hide();	
//$('#MainForm').attr('style','margin:-40px 0 0 0 !Important;');




// end fruit ninja
}











if(
isCatGlobal(3796) || isCatNumBreadCrumb(3796) || 
isCatGlobal(3799) || isCatNumBreadCrumb(3799) || 
isCatGlobal(3803) || isCatNumBreadCrumb(3803) ||  
isCatGlobal(3800) || isCatNumBreadCrumb(3800) ||  
isCatGlobal(3801) || isCatNumBreadCrumb(3801) || 
isCatGlobal(3804) || isCatNumBreadCrumb(3804) || 
isCatGlobal(3805) || isCatNumBreadCrumb(3805) ||  
isCatGlobal(3802) || isCatNumBreadCrumb(3802) ||  
isCatGlobal(3806) || isCatNumBreadCrumb(3806)    ){

// start doodle jump
var legalLine = "&copy; "+returnYear()+" Lima Sky LLC. The character Doodle&reg; and Doodle Jump&reg; are registered trademarks of Lima Sky LLC and used under license. All Rights Reserved.";


$('#walls-legal-lines').html(legalLine);


	

// end doodle jump
}


if(
isCatGlobal(31645) || isCatNumBreadCrumb(31645)  
){
// Rubik
var legalLine = "&copy; 1974 Rubik's &reg; Used under licence Rubiks Brand Ltd. All rights reserved. www.rubiks.com";



$('#walls-legal-lines').html(legalLine);




// Rubik
}








if(
isCatGlobal(13997) || isCatNumBreadCrumb(13997) || 
isCatGlobal(2359) || isCatNumBreadCrumb(2359) || 
isCatGlobal(2360) || isCatNumBreadCrumb(2360) ||  
isCatGlobal(2361) || isCatNumBreadCrumb(2361) ||  
isCatGlobal(2362) || isCatNumBreadCrumb(2362) || 
isCatGlobal(2363) || isCatNumBreadCrumb(2363)  
){
// 
var legalLine = "&copy; Mind Candy Ltd. Moshi Monsters is a trademark of Mind Candy Ltd. All rights reserved.";

$('#walls-legal-lines').html(legalLine);




//
}




///////////////////////////////////////////////////////

if(    isCatGlobal(2352)    ){
// 
var legalLine = "&copy; "+returnYear()+" Penguin Group (USA) Inc. All rights reserved.";

$('#walls-legal-lines').html(legalLine);
//
}


if(    isCatGlobal(2319)    ){
// 
var legalLine = "Art/Illustrations &copy; "+returnYear()+" Anna Dewdney.<br>&trade;"+returnYear()+" Penguin Group (USA) Inc. Llama Llama book series published by Penguin Group (USA) Inc.";

$('#walls-legal-lines').html(legalLine);
//
}


 
 
if(    isCatGlobal(2318)    ){
// 
var legalLine = "Art/Illustrations &copy; "+returnYear()+" David Soman.<br>&trade;"+returnYear()+" Penguin Group (USA) Inc. Ladybug Girl book series published by Penguin Group (USA) Inc.";

$('#walls-legal-lines').html(legalLine);
//
}

 
 



if(    isCatGlobal(2320)    ){
// 
var legalLine = "Art/Illustrations &copy; "+returnYear()+" Judy Schachner.<br>&trade;"+returnYear()+" Penguin Group (USA) Inc. Skippyjon Jones book series published by Penguin Group (USA) Inc.";

$('#walls-legal-lines').html(legalLine);
//
}








if(    isCatGlobal(2317)    ){
// 
var legalLine = "CORDUROY &trade; &amp; &copy; "+returnYear()+" Penguin Group (USA) Inc. All rights reserved. Used with permission.<br>CORDUROY & CO. &trade; &amp; &copy; "+returnYear()+" Penguin Group (USA) Inc. All rights reserved. Used with permission.";

$('#walls-legal-lines').html(legalLine);
//
}


////////////////////////////////////////////////////

if(    isCatGlobal(2313) ||  isCatGlobal(2355)  ){
// 
var legalLine = "&copy; "+returnYear()+" Electronic Arts Inc. Plants vs. Zombies and PopCap are trademarks of Electronic Arts Inc.";
////$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//alert($('#walls-legal-lines').html());

//
}








if(    isCatGlobal(2202)  ||  isCatGlobal(2203)  ||  isCatGlobal(2204)  || isCatGlobal(2146)  ){
//
var legalLine = "Paddington Bear&trade; &copy; Paddington and Company Ltd "+returnYear()+"<br>Paddington Bear&trade;, Paddington&trade; and PB&trade; are trademarks of Paddington and Company Ltd<br>Licensed by Copyrights Group www.paddingtonbear.com";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//
}




if(    isCatGlobal(15538)    ){
// 
var legalLine = "&copy; "+returnYear()+" Milton Glaser, Inc.  All Rights Reserved.";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//alert($('#walls-legal-lines').html());

//
}


if(    isCatGlobal(2145)    ){
// 
var legalLine = "SPOT&trade; &copy; Eric Hill/Salspot Limited "+returnYear()+" Licensed by Salspot Ltd. www.funwithspot.com";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//alert($('#walls-legal-lines').html());

//
}


if(    isCatGlobal(2149)    ){
// 
var legalLine = "Copyright &copy; "+returnYear()+" Silver Lining Productions Limited (a Chorion company). All rights reserved. OLIVIA&trade; and &copy; "+returnYear()+" Ian Falconer. All rights reserved.";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//
}




if(    isCatGlobal(2147)    ){
// 
var legalLine = "NODDY&reg; TOYLAND&reg; NODDY IN TOYLAND&trade; copyright &copy; "+returnYear()+" Chorion Rights Limited. All rights reserved.";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//
}


if(    isCatGlobal(2289)    ){
// 
var legalLine = "&copy; "+returnYear()+" PaddleDuck Pty Ltd. All Rights Reserved.  PaddleDuck is a trademark of PaddleDuck Pty Ltd.";
$('#walls-legal-lines').html(legalLine);
//
}



if(    


isCatGlobal(21270) || isCatNumBreadCrumb(21270) 


){
// 
var legalLine = "&trade; &amp; &copy; "+returnYear()+" The Jim Henson Company.  JIM HENSON mark & logo, FRAGGLE ROCK mark & logo, characters and elements are trademarks of The Jim Henson Company.  All Rights Reserved.</i>";
//$('#walls-legal-lines').css('margin-top','-32px !Important');
$('#walls-legal-lines').html(legalLine);
//
}



if(    isCatGlobal(19057)    ){
// 
var legalLine = "&copy; "+returnYear()+" TM & © Big Idea Entertainment ";
$('#walls-legal-lines').html(legalLine);
//
}



if(    isCatGlobal(1831) 

|| isCatGlobal(1832) 

||  isCatNumBreadCrumb(1832)  

|| isCatGlobal(1844) 

||  isCatNumBreadCrumb(1844)  

|| isCatGlobal(1845)  

||  isCatNumBreadCrumb(1845)    




|| isCatGlobal(3791)  

||  isCatNumBreadCrumb(3791)    

|| isCatGlobal(3788)  

||  isCatNumBreadCrumb(3788)    


){
// 
var legalLine = "&trade; &amp; &copy; "+returnYear()+" CBS Studios Inc. All Rights Reserved. STAR TREK and related marks are trademarks of CBS Studios Inc.";
$('#walls-legal-lines').html(legalLine);

//
}






if(thisPageIsProd()){
$('#wlp').remove();
 // kill OLD default legal line
	//var legalLine = $('#wlp').html();
//legalLine = legalLine.replace(/%%year%%/g, returnYear());
//$('#ProductDetail_ProductDetails_div2').after("<div class='wlp'>"+ legalLine +"</div>");
//$('#footer_wrap').css('marginTop','-6px !Important');
}

//var existsLegalLines = $('#walls-legal-lines').html.length;
//if(   (thisPageIsCat())  &&  (existsLegalLines>0)        ){
//$('#ads').before('<style>#ads{margin: 0px auto 0px auto !Important;}</style>');
//}


// ---------------------------------------------------------------------------------- end document ready function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-buttons

jQuery.preloadImages = function() {   
     for(var i = 0; i<arguments.length; i++)   
    {
          jQuery("<img>").attr("src", arguments[i]);   
    } 
// end func
}


function buttonRoll(buttonName, buttonSelector, optionalID){
//
if(optionalID){$(buttonSelector).attr('id', optionalID);buttonSelector='#'+optionalID;}
//preLoad('/v/vspfiles/templates/walls360/images/buttons/'+buttonName+'-over.gif');
$.preloadImages("image.gif"); 
$(buttonSelector).hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/'+buttonName+'-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/'+buttonName+'.gif');
  }
);

	
// end func
}


$(window).load(function(){
//$(document).ready(function(){
// ---------------------------------------------------------------------------------- start document ready function


if(isCatGlobal(1823)){
// if Custom

//alert('Custom Wall Graphics!');
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/submit-over.gif'); 
$('input[name="submit"]').hover(
  function () {
    $(this).attr('style', 'background:url(/v/vspfiles/templates/walls360/images/buttons/submit-over.gif) no-repeat !Important;width: 164px !important;height: 44px !Important;cursor: pointer !important;display:block;');
   }, 
  function () {
  $(this).attr('style', 'background:url(/v/vspfiles/templates/walls360/images/buttons/submit.gif) no-repeat !Important;width: 164px !important;height: 44px !Important;cursor: pointer !important;display:block;');
  }
);
// end if
}





if(isCatGlobal(2338)){
// if appSumo





      //alert('AppSumo!');
$.preloadImages('/v/vspfiles/assets/images/buttons/btn_sendit.png'); 
//$('#file_upload_iframe').contents().find('#send-button a img').attr('src','/v/vspfiles/assets/images/buttons/btn_sendit.png');

//alert($('#file_upload_iframe').contents().find('#send-button a img').attr('src'));



// end if
}








// get ship options button
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/shipupdate.gif'); 
$('.v65-cart-getshippingoptionsbutton').hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/shipupdate.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/shipupdate.gif');
  }
);


// remove from cart button
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_cart_remove-over.gif'); 
$('.v65-cart-item-remove-image').hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_cart_remove-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_cart_remove.gif');
  }
);


// login and checkout button
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_checkout_login-over.gif'); 
$('.btn_checkout_login').hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_checkout_login-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_checkout_login.gif');
  }
);





// guest checkout button
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_checkout_guest-over.gif'); 
$('.btn_checkout_guest').hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_checkout_guest-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_checkout_guest.gif');
  }
);

// update price button
$('input[src="v/vspfiles/templates/walls360/images/buttons/btn_recalculate.gif"]').attr('class','walls-update-total-button');
$('.walls-update-total-button').css({'position':'relative','top':'7px'});
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_recalculate-over.gif'); 
$('.walls-update-total-button').hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_recalculate-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_recalculate.gif');
  }
);



// apply button
$('#v65-cart-coupon-entry-details-button').css({'position':'relative','top':'7px'});
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_apply-over.gif'); 
$('#v65-cart-coupon-entry-details-button').hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_apply-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_apply.gif');
  }
);


// apply button - one page checkout
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_apply-over.gif'); 
$('input[name="btnApply"]').hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_apply-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_apply.gif');
  }
);






// continue shopping button
$('img[src$="/v/vspfiles/templates/walls360/images/buttons/btn_continueshopping.gif"]').attr('id', 'walls-continue-shopping-button');
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_continueshopping-over.gif'); 
$('#walls-continue-shopping-button').hover(
  function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_continueshopping-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_continueshopping.gif');
  }
);






// go button
$("img[src$='/v/vspfiles/templates/walls360/images/buttons/btn_go_gray.gif']").attr('id', 'walls-go-button');
$('#walls-go-button').hover(
  function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_go_gray-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_go_gray.gif');
  }
);


// next page button
$('.next_page_img').hover(
  function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_nextpage-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_nextpage.gif');
  }
);


// previous page button
$('.previous_page_img').hover(
  function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_prevpage-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_prevpage.gif');
  }
);



// submit button

$('input[name="submit"]').hover(
  function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/submit-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/submit.gif');
  }
);






$('input[value="Submit Registration"]').css({
	 'width': '117px',
  'height': '38px',
  'margin': '0',
  'padding': '0',
  'border': '0',
  'background': 'transparent url(/v/vspfiles/templates/walls360/images/buttons/submit.gif) no-repeat center top',
  'text-indent': '-1000em',
  'cursor': 'pointer',
  'cursor': 'hand'
});
$('input[value="Submit Registration"]').hover(
  function () {
    $(this).css({'background': 'transparent url(/v/vspfiles/templates/walls360/images/buttons/submit-over.gif) no-repeat center top'});
   }, 
  function () {
  $(this).css({'background': 'transparent url(/v/vspfiles/templates/walls360/images/buttons/submit.gif) no-repeat center top'});
  }
);

//////

//include on category page





///
// <input type="button" name="btncalc_shipping" value="Show me Shipping Choices" style="font-size:10px;" onclick="RecalcShipping();">
$('#CalcShippingDiv').html('<img src="/v/vspfiles/assets/images/buttons/btn_calc_shipping.gif" name="btncalc_shipping" alt="Show me Shipping Choices" onclick="RecalcShipping();" style="cursor:pointer;">');
$.preloadImages('/v/vspfiles/assets/images/buttons/btn_calc_shipping-over.gif'); 
$('#CalcShippingDiv').removeAttr('align');
$('#CalcShippingDiv').css({
  'background': '',
  'position': 'relative',
  'margin': '0',
  'padding': '0',
  'text-align': 'left'
});

$('#CalcShippingDiv img').css({
  'width': '199px',
  'height': '28px',
  'margin': '0',
  'padding': '0',
  'border': '0',
  'cursor': 'pointer',
  'cursor': 'hand'
});

$('#CalcShippingDiv img').hover(
  function () {
    $(this).attr('src', '/v/vspfiles/assets/images/buttons/btn_calc_shipping-over.gif');
    //$(this).attr('src', '/v/vspfiles/assets/images/buttons/btn_calc_shipping.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/assets/images/buttons/btn_calc_shipping.gif');
  }
);





// update price button
$('input[name="btnupdateprice"]').hover(
  function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_updateprice-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_updateprice.gif');
  }
);

// add to cart button
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_addtocart-over.gif'); 
//$('input[name="btnaddtocart"]').hover(
//$('input[src="/v/vspfiles/templates/walls360/images/buttons/btn_addtocart.gif"]').hover(

// Product Page
$('.vCSS_input_addtocart').hover(
function () {
	$(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_addtocart-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_addtocart.gif');
  }
);


// Catalog v3 Deal of Day
if(isCatGlobal(1820)){
$('.deal-buy-now a').hover(

  function () {
    $(this).css({'background': 'url(/v/vspfiles/templates/walls360/images/buttons/btn_addtocart-over.gif) top left no-repeat !important;'});
   }, 
  function () {
  $(this).css({'background': 'url(/v/vspfiles/templates/walls360/images/buttons/btn_addtocart.gif) top left no-repeat !important;'});
  }

);
}


// add to cart small button
$("img[src$='/v/vspfiles/templates/walls360/images/buttons/btn_addtocart_small.gif']").attr('id', 'add-to-cart-small-button');
$('#add-to-cart-small-button').hover(
  function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_addtocart_small-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_addtocart_small.gif');
  }
);




// add to wishlist button
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_addtowishlist-over.gif'); 
//$('input[name="btnaddtowishlist"]').hover(
$('#v65-product-wishlist-button').hover(
function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_addtowishlist-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_addtowishlist.gif');
  }
);


// view larger photo button

$('.vCSS_img_larger_photo').hover(
  function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_largerphoto-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_largerphoto.gif');
  }
);




// place order button
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_1pagec_placeorder-over.gif'); 
$('#btnSubmitOrder').hover(
function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_1pagec_placeorder-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_1pagec_placeorder.gif');
  }
);




$('input[value="Login"]').css({
	 'width': '74px',
  'height': '28px',
  'margin': '0',
  'padding': '0',
  'border': '0',
  'background': 'transparent url(/v/vspfiles/templates/walls360/images/buttons/btn_login.gif) no-repeat center top',
  'text-indent': '-1000em',
  'cursor': 'pointer',
  'cursor': 'hand'
});
$('input[value="Login"]').hover(
  function () {
    $(this).css({'background': 'transparent url(/v/vspfiles/templates/walls360/images/buttons/btn_login-over.gif) no-repeat center top'});
   }, 
  function () {
  $(this).css({'background': 'transparent url(/v/vspfiles/templates/walls360/images/buttons/btn_login.gif) no-repeat center top'});
  }
);



if(PageName()=='login.asp' ){
//

$('img[src$="v/vspfiles/templates/walls360/images/headings/heading_login.gif"]').remove();

// login.asp - login button
var loginButton = 'input[name="imageField2"]';
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_login-over.gif'); 
//$('input[src="/v/vspfiles/templates/walls360/images/buttons/btn_login.gif"]').parent().attr('align','left');
//$('input[src="/v/vspfiles/templates/walls360/images/buttons/btn_login.gif"]').css({'margin-left': '125px !Important', 'padding-left': '0px !Important', 'float':'left', 'clear':'both'});
//$('input[src="/v/vspfiles/templates/walls360/images/buttons/btn_login.gif"]').hover(

$(loginButton).parent().attr('align','left');
$(loginButton).before("<div style='float:left;width:127px;height:20px;'></div>");
$(loginButton).css({'display': 'block', 'float':'left', 'clear':'right'});
$(loginButton).hover(
function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_login-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_login.gif');
  }
);

// login.asp - continue button
$.preloadImages('/v/vspfiles/templates/walls360/images/buttons/btn_Continue-over.gif'); 
$('img[src="v/vspfiles/templates/walls360/images/buttons/btn_Continue.gif"]').hover(
function () {
    $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_Continue-over.gif');
   }, 
  function () {
  $(this).attr('src', '/v/vspfiles/templates/walls360/images/buttons/btn_Continue.gif');
  }
);


$('#ads').css('margin-top','-15px !Important');


// end if
}






// ---------------------------------------------------------------------------------- end document ready function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-inputs

//$(window).load(function(){
$(document).ready(function(){
// ---------------------------------------------------------------------------------- start document ready function

if(PageName()=='login.asp' ){
//
$('input[name="password"]').css('width','175px !Important');
$('input[name="email"]').css('width','175px !Important');
//
}



// ---------------------------------------------------------------------------------- end document ready function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-subcats



$(window).ready(function(){
// ------------------------------------------------------------------------- start window ready function
var $subCatLinks = $('#content_area a.smalltext');
// ------------------------------------------------



if( 

       isCatGlobal(2277)  ||  isCatGlobal(2283) ||   isCatGlobal(3792) ||  isCatGlobal(1849) || isCatGlobal(31628) || isCatGlobal(1976) || isCatGlobal(1820) || isCatGlobal(1981)  || isCatGlobal(1977)  || isCatGlobal(1979) 
	     || isCatGlobal(1978)
		 
		   || isCatGlobal(2208) 

		   || isCatGlobal(2152) 
		   || isCatGlobal(2210) 
		   || isCatGlobal(2154) 
		   || isCatGlobal(2155) 
		   || isCatGlobal(2214) 
		 
		  
		   


){
// ----------------------------------------- start GENERIC 

$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
$(this).find('img:first-child').removeAttr("style");
// end hover-out
}
// ----------------- end zWrapper hover
)

// ----------------------------------------- end GENERIC 
}


if(        isCatGlobal(31650)     ){
// ----------------------------------------- start strawberry shortcake
//2x
$('#walls-sub-cat-table').attr("style","margin: 5px 0 10px 10px !important;");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)

// ----------------------------------------- end strawberry shortcake
}





if(        isCatGlobal(31649)     ){
// ----------------------------------------- start care bears
//3x
$('#walls-sub-cat-table').attr("style","margin: 5px 0 10px 135px !important;");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)

// ----------------------------------------- end care bears
}












if(        isCatGlobal(31648)     ){
// ----------------------------------------- start american greetings
//4x
$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)

// ----------------------------------------- end american greetings
}










if(        isCatGlobal(1850)     ){
// ----------------------------------------- start 1850
//4x
$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)

// ----------------------------------------- end 1850
}


























if(        isCatGlobal(13998)   ||  isCatGlobal(2276) || isCatGlobal(28710)  || isCatGlobal(2948) || isCatGlobal(31598)          ){
// ----------------------------------------- start NEW 
//4x
$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
	    case 2160:
		$subCatTitle = 'Bernard of Hollywood';
		break;
		
		
		case 31593:
		$subCatTitle = 'Cocktails, Cats, n&#39; Houch Hounds';
		break;
		
		case 31594:
		$subCatTitle = 'Hip Chicks, Hillbillies, n&#39; Hepcats';
		break;
		
		case 31595:
		$subCatTitle = 'Jazzbos n&#39; Daddy-Os';
		break;
		
		case 31596:
		$subCatTitle = 'Odds n&#39; Endsville';
		break;
		
        case 31597:
		$subCatTitle = 'Rum Slingers n&#39; Tiki Freaks';
		break;
		
		
	
	    default:
		//$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)





// ----------------------------------------- end NEW 
}





if(      1==0    ){

//if(        isCatGlobal(3792)     ){
// ----------------------------------------- start POP CULTURE

$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
	    	case 2160:
		$subCatTitle = 'Bernard of Hollywood';
		break;
		
	
	    default:
		//$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)





// ----------------------------------------- end POP CULTURE
}































if(        isCatGlobal(31618)     ){
// ----------------------------------------- start New PVZ

$('#walls-sub-cat-table').attr("style","margin: 5px 0 10px 135px !important;");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
		case 31615:
		$subCatTitle = 'Plants vs. Zombies';
		break;
		
		case 31614:
		$subCatTitle = 'Plants vs. Zombies 2';
		break;
		
		case 31616:
		$subCatTitle = 'Garden Warfare';
		break;
		
	    default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)





// ----------------------------------------- end New PVZ
}




if(        isCatGlobal(2327)     ){
// ----------------------------------------- start Topps Sports

$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
		case 2328:
		$subCatTitle = 'Topps Baseball';
		break;
		
		case 2329:
		$subCatTitle = 'Topps Basketball';
		break;
		
		case 2330:
		$subCatTitle = 'Topps Football';
		break;
		
		case 2331:
		$subCatTitle = 'Topps Hockey';
		break;
		
	    default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 10px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)






// ----------------------------------------- end Topps Sports
}


if(        isCatGlobal(3796)     ){
// ----------------------------------------- start Doodle

$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
		case 3799:
		$subCatTitle = 'Doodle Jump Special Editions';
		break;
		
		case 3803:
		$subCatTitle = 'Doodle Jump Classic';
		break;
		
		
		case 3800:
		$subCatTitle = 'Doodle Jump In Space';
		break;
		
		
		case 3801:
		$subCatTitle = 'The Life Aquatic with Doodle Jump';
		break;
		
		case 3804:
		$subCatTitle = 'Doodle Jump In The Wild';
		break;
		
		case 3805:
		$subCatTitle = 'Ninja Doodle Jump';
		break;
		
		case 3802:
		$subCatTitle = 'Doodle Jump Holidays';
		break;
		
		case 3806:
		$subCatTitle = 'Doodle Jump Minis';
		break;
		
		default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 10px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)














// ----------------------------------------- end Doodle
}





















if(        isCatGlobal(1831)     ){
// ----------------------------------------- start StarTrek


$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
	    case 3791:
		$subCatTitle = 'Star Trek Quogs';
		break;
		
		case 3788:
		$subCatTitle = 'Ships of the Line';
		break;
		
	    case 3793:
		$subCatTitle = 'Star Trek Galaxy Pop';
		break;
		
		case 3794:
		$subCatTitle = 'Haynes Manuals';
		break;
		
		
		case 3786:
		$subCatTitle = 'Star Trek Badges';
		break;
		
		
		case 3787:
		$subCatTitle = 'Star Trek XI Wall Murals';
		break;
		
		case 1832:
		$subCatTitle = 'Characters + Ships';
		break;
		
		case 1844:
		$subCatTitle = 'Movie Posters';
		break;
		
		case 1845:
		$subCatTitle = 'Star Trek Wall Graphics';
		break;
		
		default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 10px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)





























// ----------------------------------------- end StarTrek
}


















if(        isCatGlobal(2359)     ){
// ----------------------------------------- start Moshi



$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
		case 2360:
		$subCatTitle = 'Monsters';
		break;
		
		case 2361:
		$subCatTitle = 'Moshlings';
		break;
		
		case 2363:
		$subCatTitle = 'Special Editions';
		break;
		
		case 2362:
		$subCatTitle = 'Wall Murals';
		break;
		
		case 13997:
		$subCatTitle = 'Moshi Halloween';
		break;
		
		default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 10px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)
























// ----------------------------------------- end Moshi
}

















if(        isCatGlobal(2146)     ){
// ----------------------------------------- start Pad Bear
$('#walls-sub-cat-table').attr("style","margin: 5px 0 10px 135px !important;");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
		case 2202:
		$subCatTitle = 'Paddington Bear&trade;';
		break;
		
		case 2203:
		$subCatTitle = 'Paddington Bear&trade; FilmFair';
		break;
		
		case 2204:
		$subCatTitle = 'Cool Britannia Collection';
		break;
		
		
		
	    default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)



//var $x = $('a[href="http://www.walls360.com/paddington-bear-wall-graphics-s/2202.htm"]');
//$x.append("<div id='subCat-Extra'>Paddington Bear&trade;</div>");

//var $x = $('a[href="http://www.walls360.com/paddington-bear-film-fair-wall-graphics-s/2203.htm"]');
//$x.append("<div id='subCat-Extra'>Paddington Bear&trade; FilmFair</div>");

//var $x = $('a[href="http://www.walls360.com/paddington-bear-cool-britannia-wall-graphics-s/2204.htm"]');
//$x.append("<div id='subCat-Extra'>Cool Britannia Collection</div>");

// ----------------------------------------- end Pad Bear
}


if(        isCatGlobal(2334)     ){
// ----------------------------------------- start Topps

$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
		case 2948:
		$subCatTitle = 'Mars Attacks';
		break;
		
		case 2325:
		$subCatTitle = 'Wacky Packages';
		break;
		
		case 2335:
		$subCatTitle = 'Garbage Pail Kids';
		break;
		
		case 2332:
		$subCatTitle = 'Bazooka Joe';
		break;
		
		case 2327:
		$subCatTitle = 'Vintage Sports';
		break;
		
	    default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 12px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)


// ----------------------------------------- end Topps
}



















if(       1==0     ){
//if(        isCatGlobal(2283)     ){
// ----------------------------------------- start kids OLD

$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);
								  

								  // start exceptions
								  switch($subCatTitle)
								  {
								  case "Veggietales":
								  $subCatTitle = "VeggieTales";
								  break;
								  
								  default:
								  break;
								  }
								  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});


// start extras

ins = '<a href="http://www.walls360.com/category-s/2332.htm" title="" class="smalltext colors_text"><img src="/v/vspfiles/photos/categories/2332-T.jpg" border="0"><div id="subCat-2013">Bazooka Joe</div></a>';
//$('#walls-sub-cat-table td:eq(-1)').attr('align','center');
//$('#walls-sub-cat-table td:eq(-1)').html(ins);

$('#walls-sub-cat-table td').eq(-1).attr('align','center');
$('#walls-sub-cat-table td').eq(-1).html(ins);


// end extras

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");

$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)

// ----------------------------------------- end kids OLD
}

if(        1==0     ){
//if(        isCatGlobal(2277)     ){
// ----------------------------------------- start video game OLD

$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");

$($subCatLinks).each(function(index) {
// start loop    
					var url = $(this).attr('href');
					
					$subCatTitle = subCatSEO(url);
					$subCatTitle = $.trim($subCatTitle);

					if($subCatTitle){
					$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
					}
// end loop
});






ins = '<a href="http://www.walls360.com/pvz" title="plants vs. zombies wall graphics" class="smalltext colors_text" id="LuckyAnchor_93729636_48"><img src="/v/vspfiles/photos/categories/31618-T.jpg" border="0"><div id="subCat-2013">Plants vs. Zombies</div></a>';
$('#walls-sub-cat-table td:eq(12)').attr('align','center');
$('#walls-sub-cat-table td:eq(12)').html(ins);

ins = '<a href="http://www.walls360.com/moshi-monsters-wall-graphics-s/2359.htm" title="moshi monsters wall graphics" class="smalltext colors_text" id="LuckyAnchor_93733742_41"><img src="/v/vspfiles/photos/categories/2359-T.jpg" border="0"><div id="subCat-2013">Moshi Monsters</div></a>';
$('#walls-sub-cat-table td:eq(14)').attr('align','center');
$('#walls-sub-cat-table td:eq(14)').html(ins);






ins = '<tr><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/mass-effect-3-video-game-wall-graphics-s/2291.htm" title="mass-effect-3-video-game wall graphics" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2291-T.jpg" border="0"><div id="subCat-2013">Mass Effect 3</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/battlefield-3-wall-graphics-s/2285.htm" title="battlefield 3 wall graphics" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2285-T.jpg" border="0"><div id="subCat-2013">Battlefield 3</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/battlefield-4-wall-graphics-s/31587.htm" title="battlefield 4 wall graphics" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/31587-T.jpg" border="0"><div id="subCat-2013">Battlefield 4</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Mirrors-Edge-wall-graphics-s/2342.htm" title="Mirrors Edge wall graphics" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2342-T.jpg" border="0"><div id="subCat-2013">Mirror&#39;s Edge</div></a></td></tr><tr><td name="end" colspan="3" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="5" height="5"></td></tr><tr><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Dragon-Age-s/2339.htm" title="Dragon Age" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2339-T.jpg" border="0"><div id="subCat-2013">Dragon Age</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Dead-Space-wall-graphics-s/2345.htm" title="Dead Space wall graphics" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2345-T.jpg" border="0"><div id="subCat-2013">Dead Space</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Medal-of-Honor-s/2358.htm" title="Medal of Honor" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2358-T.jpg" border="0"><div id="subCat-2013">Medal of Honor</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Warfighter-video-game-wall-graphics-s/2351.htm" title="Warfighter video game wall graphics" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2351-T.jpg" border="0"><div id="subCat-2013">Warfighter</div></a></td></tr><tr><td name="end" colspan="3" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="5" height="5"></td></tr><tr><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Command-and-Conquer-s/2344.htm" title="Command and Conquer" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2344-T.jpg" border="0"><div id="subCat-2013">Command &amp; Conquer</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Alice-s/2341.htm" title="Alice" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2341-T.jpg" border="0"><div id="subCat-2013">Alice: Madness Returns</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Dantes-Inferno-s/2340.htm" title="Dantes Inferno" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/2340-T.jpg" border="0"><div id="subCat-2013">Dante&#39;s Inferno</div></a></td><td rowspan="1" style="margin: 0 !important;padding: 0 !important;"><img src="/v/vspfiles/templates/walls360/images/clear1x1.gif" width="20" height="20"></td><td colspan="1" align="center" style="margin: 0 !important;padding: 0 !important;"><a href="http://www.walls360.com/Army-of-two-video-game-wall-graphics-s/3798.htm" title="Army of two video game wall graphics" id="subCat-2013-Link"><img src="/v/vspfiles/photos/categories/3798-T.jpg" border="0"><div id="subCat-2013">Army of Two</div></a></td></tr>';


$('#walls-sub-cat-table td:eq(14)').closest( 'tr' ).after(ins);






$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");

$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)

//$('#walls-sub-cat-table').attr("style","margin: 10px auto 0 35px !important;");
//$('#walls-sub-cat-table a.smalltext').attr("style","margin: 0 47px 0 0 !important;");
//$('#catBreadcrumbs-v3').attr("style","font-size: 20px !Important;");
//$('#walls-legal-lines').attr("style","margin: 0px 0px 15px 0px !Important;");

// ----------------------------------------- end video game OLD
}




























if(       1==0    ){

//if(        isCatGlobal(2347)     ){
// ----------------------------------------- start EA OLD

$($subCatLinks).each(function(index) {
// start loop    
					var url = $(this).attr('href');
					
					$subCatTitle = subCatSEO(url);
						s = $.trim($subCatTitle);

switch(s)
{
case "Dantes Inferno":
$subCatTitle = "Dante's Inferno";
break;

case "Mirrors Edge":
$subCatTitle = "Mirror's Edge";
break;

case "Command and Conquer":
$subCatTitle = "Command &amp; Conquer";
break;

case "Plants Vs Zombies":
$subCatTitle = "Plants vs. Zombies";
break;

default:
break;
}


//if(Left($subCatTitle,6)=="Plants"){$subCatTitle = "Plants vs. Zombies";}
//if(Left($subCatTitle,7)=="Mirrors"){$subCatTitle = "Mirror's Edge";}


				if($subCatTitle){
					$(this).append("<div id='subCat-Extra'>"+$subCatTitle+"</div>");
					}
// end loop
});


$('#walls-sub-cat-table').attr("style","margin: 10px auto 0 60px !important;");
$('#walls-sub-cat-table a.smalltext').attr("style","margin: 0 47px 0 0 !important;");
//$('#catBreadcrumbs-v3').attr("style","font-size: 20px !Important;");
//$('#walls-legal-lines').attr("style","margin: 0px 0px 15px 0px !Important;");



// ----------------------------------------- end EA OLD
}

if(        isCatGlobal(2347)     ){
// ----------------------------------------- start EA

$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);
								  

								  // start exceptions
								  switch($subCatTitle)
								  {
case "Alice":
$subCatTitle = "Alice: Madness Returns";
break;

case "Dantes Inferno":
$subCatTitle = "Dante's Inferno";
break;

case "Mirrors Edge":
$subCatTitle = "Mirror's Edge";
break;

case "Command and Conquer":
$subCatTitle = "Command &amp; Conquer";
break;

case "Plants Vs Zombies":
$subCatTitle = "Plants vs. Zombies";
break;

default:
break;
								  }
								  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");

$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)

// ----------------------------------------- end EA
}















if(        isCatGlobal(15527)     ){
// ----------------------------------------- start ERIC CARLE NEW



$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
	
	
		case 15528:
$subCatTitle = 'The Very Hungry Caterpillar';
break;


case 15532:
$subCatTitle = 'ABC Alphabet';
break;


case 19058:
$subCatTitle = '123 Numbers';
break;

//case 15540:
//$subCatTitle = '123 Numbers';
//break;

case 15530:
$subCatTitle = 'Holiday Collection';
break;


case 15531:
$subCatTitle = 'Wall Dots ';
break;


case 15545:
$subCatTitle = 'Wall Stars';
break;


case 15539:
$subCatTitle = 'Flowers';
break;


case 15529:
$subCatTitle = 'Fun Wall Graphics';
break;


case 15541:
$subCatTitle = 'Brown Bear &amp; Friends';
break;


case 15542:
$subCatTitle = 'Bugs &amp; Insects';
break;


case 15543:
$subCatTitle = 'The Sea';
break;


case 15544:
$subCatTitle = 'The Sky';
break;


		
		default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 10px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)


// ----------------------------------------- end ERIC CARLE NEW
}






















if(     1==0    ){
//if(        isCatGlobal(15527)     ){
// ----------------------------------------- start eric carle OLD


$($subCatLinks).each(function(index) {
// start loop    

var url = $(this).attr('href');

switch(catNumFromHREF(url))
{
	
	
	
	
	
		case 15528:
$subCatTitle = 'The Very Hungry Caterpillar';
break;


case 15532:
$subCatTitle = 'ABC Alphabet';
break;


case 19058:
$subCatTitle = '123 Numbers';
break;

//case 15540:
//$subCatTitle = '123 Numbers';
//break;


case 15530:
$subCatTitle = 'Holiday Collection';
break;


case 15531:
$subCatTitle = 'Wall Dots ';
break;


case 15545:
$subCatTitle = 'Wall Stars';
break;


case 15539:
$subCatTitle = 'Flowers';
break;


case 15529:
$subCatTitle = 'Fun Wall Graphics';
break;


case 15541:
$subCatTitle = 'Brown Bear &amp; Friends';
break;


case 15542:
$subCatTitle = 'Bugs &amp; Insects';
break;


case 15543:
$subCatTitle = 'The Sea';
break;


case 15544:
$subCatTitle = 'The Sky';
break;


	
		default:
		$subCatTitle = '';
		break;
}

if($subCatTitle){
$(this).append("<div id='subCat-Extra'>"+$subCatTitle+"</div>");
}

// end loop
});



$('#walls-sub-cat-table a.smalltext').attr("style","margin: 0 47px 0 0 !important;");
$('#catBreadcrumbs-v3').attr("style","font-size: 20px !Important;");
$('#walls-legal-lines').attr("style","margin: 0px 0px 15px 0px !Important;");

//alert($('#catBreadcrumbs-v3 a:nth-child(3)').text());


// ----------------------------------------- end eric carle OLD
}



















































if(        isCatGlobal(3795)     ){
// ----------------------------------------- start EDU


$($subCatLinks).each(function(index) {
// start loop    

var url = $(this).attr('href');

switch(catNumFromHREF(url))
{
		case 15537:
		$subCatTitle = 'Alphabet Sets';
		break;
		
		case 15536:
		$subCatTitle = 'Maps';
		break;
		
		case 15535:
		$subCatTitle = 'Number Sets';
		break;
		
		case 15533:
		$subCatTitle = 'Periodic Tables';
		break;
		
		case 15534:
		$subCatTitle = 'Wall Tangrams';
		break;
		
		default:
		$subCatTitle = '';
		break;
}

if($subCatTitle){
$(this).append("<div id='subCat-Extra'>"+$subCatTitle+"</div>");
}

// end loop
});



$('#walls-sub-cat-table').attr("style","margin: 10px auto 0px 30px !important;");




// ----------------------------------------- end EDU
}
























































if(      1==0     ){

//if(        isCatGlobal(2948)     ){
// ----------------------------------------- start Mars Attacks

$($subCatLinks).each(function(index) {
// start loop    

var url = $(this).attr('href');

switch(catNumFromHREF(url))
{
		case 2947:
		$subCatTitle = 'New Comic Book Covers';
		break;
		
		case 2333:
		$subCatTitle = 'Original Trading Cards';
		break;
		
	
		
		default:
		$subCatTitle = '';
		break;
}

if($subCatTitle){
$(this).append("<div id='subCat-Extra'>"+$subCatTitle+"</div>");
}

// end loop
});





// ----------------------------------------- end Mars Attacks
}




if(        isCatGlobal(2352)     ){
// ----------------------------------------- start PENGUIN NEW

$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");


//$('#walls-sub-cat-table').attr("style","margin:0 0 10px 10px !important");
//$('#walls-sub-cat-table td').attr("style","margin: 0 !important;padding: 0 !important;");
//$('#walls-sub-cat-table td a').attr("style","margin:0 0 10px 10px !important");

$($subCatLinks).each(function(index) {
// start loop    
var url = $(this).attr('href');

$subCatTitle = subCatSEO(url);
$subCatTitle = $.trim($subCatTitle);

								  // start exceptions
	switch(catNumFromHREF(url))
{
	
case 2367:
$subCatTitle = 'Ladybug Girl';
break;

case 2369:
$subCatTitle = 'Llama Llama'; 
break;

case 2370:
$subCatTitle = 'Skippyjon Jones'; 
break;

case 2371:
$subCatTitle = 'Corduroy';
break;

//case 2354:
//$subCatTitle = 'Corduroy & Co';
//break;

case 2372:
$subCatTitle = 'Spot';
break;
		
		default:
		$subCatTitle = '';
		break;
}
							  //  end exceptions


if($subCatTitle){
$(this).append("<div id='subCat-2013'>"+$subCatTitle+"</div>");
}
// end loop
});

$('#walls-sub-cat-table a.smalltext').attr("id","subCat-2013-Link");
$('a#subCat-2013-Link').removeAttr("class");
$('a#subCat-2013-Link').attr("style","margin: 0 10px 15px 0 !important;");


$("a#subCat-2013-Link").hover(
// ----------------- start zWrapper hover
function() {
// start hover-in
//$(this).attr("style","outline:1px solid #AFAFB0;");
$(this).find('img:first-child').attr("style","outline:1px solid #AFAFB0;");
// end hover-in
}
, 
function() {
// start hover-out
//$(this).removeAttr("style");
$(this).find('img:first-child').removeAttr("style");
//$(this).find('#subCat-2013:first-child').attr("style","text-decoration:none;");
// end hover-out
}
// ----------------- end zWrapper hover
)


// ----------------------------------------- end PENGUIN NEW
}




//if(        isCatGlobal(2352)     ){
if(       1==0    ){

// ----------------------------------------- start Yiying Penguin OLD

subCatLink = 'http://www.walls360.com/category-s/2318.htm';
subCatTitle = 'Ladybug Girl';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/category-s/2319.htm';
subCatTitle = 'Llama Llama'; 
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/category-s/2320.htm';
subCatTitle = 'Skippyjon Jones'; 
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/category-s/2317.htm';
subCatTitle = 'Corduroy';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/category-s/2354.htm';
subCatTitle = 'Corduroy & Co';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/spot-wall-graphics-wall-graphics-s/2145.htm';
subCatTitle = 'Spot';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

// ----------------------------------------- end Yiying OLD
}














if(        isCatGlobal(1828)     ){
// ----------------------------------------- start Yiying


subCatLink = 'http://www.walls360.com/category-s/2343.htm';
subCatTitle = 'Watercolor Collection';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/yiying-long-stem-rose-wall-graphics-s/1830.htm';
subCatTitle = 'Wall Flowers';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/yiying-wall-tangrams-wall-graphics-s/1833.htm';
subCatTitle = 'Wall Tangrams';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/yiying-bright-ideas-wall-graphics-s/1834.htm';
subCatTitle = 'Bright Ideas';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");

subCatLink = 'http://www.walls360.com/the-wall-status-collection-wall-graphics-s/2181.htm';
subCatTitle = 'Wall Status Collection';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");


subCatLink = 'http://www.walls360.com/yiying-animals-wall-graphics-s/2357.htm';
subCatTitle = 'Yiying Animals';
var $x = $('a[href="'+subCatLink+'"]');
$x.append("<div id='subCat-Extra'>"+subCatTitle+"</div>");


// ----------------------------------------- end Yiying
}

























if(        isCatGlobal(31615)     ){
// ----------------------------------------- start New PVZ

//$('.v65-productPhoto a').attr('style', 'display:block !important;margin-bottom: 7px !important;padding-bottom: 7px !important;border-bottom:1px #eeeeee solid;');

// ----------------------------------------- end New PVZ
}



// ------------------------------------------------------------------------- end window ready function
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-coupon


function scrollCoupon(idClass){
// start func	
$(document).scroll(function() {
// start document scroll func
var top = $(document).scrollTop();

if (top > 200){
//
		  $( idClass ).slideDown( "slow", function() {
		  //
		  //$( "#coupon-spacer" ).show( );
		  // 
		  });
//
}
else
{
//
		  $( idClass ).slideUp( "slow", function() {
		  //
		  //$( idClass ).hide( );
		  //$( "#coupon-spacer" ).hide( );
		  // 
		  });
//
}


// end document scroll func
});
// end func	
}



// THIS WAS MOVED TO walls_functions.js !!
//function expireDate(expireDateStr){
// start func	
//var expireDateArr = expireDateStr.split("/");
//var expireDate = new Date(expireDateArr[2], parseInt(expireDateArr[0] - 1), expireDateArr[1]);
//return expireDate;
// end func	
//}

//Kids
//Video

//var expireDateStr = "11/1/2013";
//var expireDateArr = expireDateStr.split("/");
//var expireDate = new Date(expireDateArr[2], parseInt(expireDateArr[0] - 1), expireDateArr[1]);

//var expireDateStr_11_16_13 = "11/16/2013";
//var expireDateArr_11_16_13 = expireDateStr_11_16_13.split("/");
//var expireDate_11_16_13 = new Date(expireDateArr_11_16_13[2], parseInt(expireDateArr_11_16_13[0] - 1), expireDateArr_11_16_13[1]);

//var expireDateStr_12_5_13 = "12/5/2013";
//var expireDateStr_12_5_13 = expireDateStr_12_5_13.split("/");
//var expireDateStr_12_5_13 = new Date(expireDateStr_12_5_13[2], parseInt(expireDateStr_12_5_13[0] - 1), expireDateStr_12_5_13[1]);

//var expireDateStr_1_1_14 = "1/1/2014";
//var expireDateStr_1_1_14 = expireDateStr_1_1_14.split("/");
//var expireDateStr_1_1_14 = new Date(expireDateStr_1_1_14[2], parseInt(expireDateStr_1_1_14[0] - 1), expireDateStr_1_1_14[1]);

//var expireDateStr_2_15_14 = "2/15/2014";
//var expireDateStr_2_15_14 = expireDateStr_2_15_14.split("/");
//var expireDateStr_2_15_14 = new Date(expireDateStr_2_15_14[2], parseInt(expireDateStr_2_15_14[0] - 1), expireDateStr_2_15_14[1]);



var todayDate = new Date();

$( document ).ready(function() {
// start func

// hide expired coupons in TopNav dropdown
if (todayDate > expireDate("11/16/2013") ) {
//if (todayDate < expireDate_11_16_13) {
$(".walls-top-nav-coupon-videogames").remove();
$(".walls-top-nav-coupon-kids").remove();
    
};


// end func
});



$(window).ready(function(){
// ------------------------------------------------------------------------- start window ready function


if (todayDate < expireDate("2/15/2014") ) {

if(isCatGlobal(21274)){
scrollCoupon("#coupon-wrapper.cw-valentine");
}
    
};



if (todayDate < expireDate("3/1/2014") ) {

if(

isCatNumBreadCrumb(2283) 

 || isCatGlobal(2283)

 || isCatGlobal(1879)
 || isCatGlobal(3797)
 || isCatGlobal(2352)
 || isCatGlobal(3791)
 || isCatGlobal(2328)
 || isCatGlobal(2329)
 || isCatGlobal(2330)
 || isCatGlobal(2331)
 || isCatGlobal(2325)
 || isCatGlobal(31592)

){
scrollCoupon("#coupon-wrapper.cw-FEB20");
}

    
};







if (todayDate >= expireDate("3/1/2014") ) 

{
$("#topstrip-wrapper").remove();
}









//if (todayDate < expireDateStr_12_5_13) {

//scrollCoupon("#coupon-wrapper.cw-WGW2013");
    
//};


//if(        isCatNumBreadCrumb(2277) ||   isCatNumBreadCrumb(2361) || isCatNumBreadCrumb(2359)        ){
// ----------------------------------------- start video games

//if (todayDate < expireDate_11_16_13) {
//''
//if(isCatNumBreadCrumb(31587)){
// BF4

//scrollCoupon("#coupon-wrapper.cw-bf4");
	//}
//else
//{
	//scrollCoupon("#coupon-wrapper.cw-video-game");

//}
//''
//};


// ----------------------------------------- end video games 
//}


// ------------------------------------------------------------------------- end window ready function
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-video

//$(document).ready(function(){
$(window).load(function(){
// ------------------------------------------------------------------------- start document ready function


// ----------------------------------------------------------------------------------------------------------------------------start vines

var opVIne = 0;
var heightContent = "auto";
var vidLink = "";
var idKey = "#exampleApplication";
//


if(
thisPageIsProd() && 
(
isCatNumBreadCrumb(31645)
)
){
// start Rubik 2
opVIne = 1;
var embedCode = "h0BeLA9Kwa1";
var strBold = "";
var strLink = "";
var strText = "";

// end Rubik 2
}


if(
thisPageIsProd() && 
(
isProdGlobal(30946) 
)
){
// start Rubik
opVIne = 1;
var embedCode = "h0BeLA9Kwa1";
var strBold = "";
var strLink = "";
var strText = "";

// end Rubik
}



if(
thisPageIsProd() && 
(
isProdGlobal(31040)
//|| isProdGlobal(31068) 
)
){
// start Rubik
opVIne = 1;
var embedCode = "h0BeLA9Kwa1";
//var heightContent = 2300;
var strBold = "";
var strLink = "";
var strText = "";

var idKey = "#altviews";

// end Rubik
}


if(
thisPageIsProd() && 
(
isProdGlobal(30926) 

|| isProdGlobal(30956) 

|| isProdGlobal(30953) 

|| isProdGlobal(30955)
 
)
){
// start eddie colla 2
opVIne = 1;
var embedCode = "h0AhPOHE5nE";
//var heightContent = 2300;
var strBold = "Walls360 Blog: ";
var strLink = "http://blog.walls360.com/eddie-colla-wall-graphics-from-walls-360/";
var strText = "Eddie Colla Wall Graphics";

// end eddie colla 2
}




if(
thisPageIsProd() && 
(
isProdGlobal(30927) 

|| isProdGlobal(30928) 

|| isProdGlobal(30929) 

|| isProdGlobal(30954) 

|| isProdGlobal(30952)
)
){
// start eddie colla 1
opVIne = 1;
var embedCode = "h0B5xvra6U9";
//var heightContent = 2300;
var strBold = "Walls360 Blog: ";
var strLink = "http://blog.walls360.com/eddie-colla-wall-graphics-from-walls-360/";
var strText = "Eddie Colla Wall Graphics";

// end eddie colla 1
}




if(
thisPageIsProd() && 
(
isProdGlobal(30943)
)
){
// start derek vines
opVIne = 1;
var embedCode = "h0B5AIUvp5E";
//var heightContent = "1405px";
var strBold = "Walls360 Blog: ";
var strLink = "http://blog.walls360.com/holiday-special-exclusive-derek-riggs-door-monster-wall-graphics/";
var strText = "Derek Riggs Wall Graphics";

// end derek vines
}




if(parseInt(opVIne)==1){
//
vidFrame = "<iframe class='vine-embed' src='https://vine.co/v/"+embedCode+"/embed/simple' width='500' height='500' frameborder='0'></iframe><script async src='//platform.vine.co/static/scripts/embed.js' charset='utf-8'></script>"

if(strLink){
vidLink = "<div id='walls-vine-label'><b>"+strBold+"</b><a href='"+strLink+"' target='_blank'>"+strText+"</a></div>";
}


$(idKey).after("<div id='prod-page-video-wrapper' style='width:500px !important;min-height:520px !important;margin: 30px auto 0 auto !important;'>"+vidFrame+vidLink+"</div>");

$('.vCSS_breadcrumb_td b').remove();
$('#content').attr('style','height:'+heightContent+' !Important;')
//
}



// ----------------------------------------------------------------------------------------------------------------------------end vines



if(
thisPageIsProd() && 
(
isCatNumBreadCrumb(13997) || isCatNumBreadCrumb(2359) || isCatNumBreadCrumb(2360) || isCatNumBreadCrumb(2361) || isCatNumBreadCrumb(2362) || isCatNumBreadCrumb(2363)  
)
){
// start moshi videos
//alert('Moshi!');

var embedCode = "";

switch(prodNum()){

//Doris
case 11104:
embedCode = "zq_vGRN396Y";
break;
//Cleo
case 11133:
embedCode = "9nxXx2_gdCs";
break;
//Coolio
case 11125:
embedCode = "Si_SSCutIqA";
break;
//CutiePie
case 11126:
embedCode = "NI6UoSZFRhs";
break;
//Gurgle
case 11120:
embedCode = "W8_rEFOeFH4";
break;
//Humphrey
case 11128:
embedCode = "xLh1P0a4gVk";
break;
//ChopChop
case 11092:
embedCode = "Fj5wqtbURfc";
break;
//Pooky
case 11107:
embedCode = "SSYvi8yRSvI";
break;
//ShiShi
case 11123:
embedCode = "Pn37pUBbrko";
break;
//Jeepers
case 11127:
embedCode = "LVzPcU7vzno";
break;

default:
embedCode = "0_zZgsaiqz4";
break;
	
// end switch	
}


vidFrame = "<iframe width='420' height='315' src='http://www.youtube.com/embed/"+embedCode+"?rel=0&amp;showinfo=0&autoplay=0' frameborder='0' allowfullscreen=''></iframe>"

$('#v65-share-buttons-cell').closest('table').after("<div id='prod-page-video-wrapper'>"+vidFrame+"</div>");
//$('#prod-page-video-wrapper iframe').fadeIn('slow');


//});




// end moshi videos
}

// ------------------------------------------------------------------------- end document ready function
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ tag-cart-checkout

$(window).load(function(){
//$(document).ready(function(){
// ---------------------------------------------------------------------------------- start document ready function


if(PageName()=='shoppingcart.asp' ){
//
var checkoutButton = "<a href='/' id='walls-cart-btn-continue-shopping'><img src='/v/vspfiles/templates/walls360/images/buttons/btn_continueshopping.gif'></a>";
$("#v65-cart-checkout-table").after(checkoutButton);

// end if shoppingcart.asp
}

// ---------------------------------------------------------------------------------- end document ready function
});

