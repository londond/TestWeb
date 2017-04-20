function MenuController(debug) {
  var pubs = {};
  var isDebug = ((debug == null || debug == false) ? false : true);
  var currentShowing = null;
    
  $('.mainNav li a').click(function(e){
    
    e.preventDefault();
    
    var splitStr = this.className.split(" ")[0]; // Get the top nav index class
    
    var str = splitStr.substring(splitStr.length - 2, splitStr.length); // Get the subNav index number ".subNav00" 
    
    $('.mainNav li a').removeClass('selected'); // removes selected class from top nav item
    $('.subNavList').removeClass('subNavShow'); // removes subNavShow class from all subNavList
    
    if (currentShowing == this) {
      if(isDebug) console.log("currentShowing = this");
      currentShowing = null; 
      
      $("." + splitStr).removeClass('selected'); // add selected class to the top nav item
            
      $('.subNav' + str).removeClass('subNavShow'); // Add the subNavShow class on the top nav's sub nav

    
    } else {
      if(isDebug) console.log("currentShowing !=");
      currentShowing = this;
      
      $("." + splitStr).addClass('selected'); // add selected class to the top nav item
            
      $('.subNav' + str).addClass('subNavShow'); // Add the subNavShow class on the top nav's sub nav
    
    }
          
  });
  
  return pubs;
}

$(document).ready(function(){

  var menuController = new MenuController(); 
  
  //appHelp menu dropdown
  $('.appHelp').click(function(event){
    event.stopPropagation();
    console.log('helpWrap toggle');
    $('.appHelpWrapper').toggleClass('hidden');
  });
  
  $('.mainWrap').click(function() {
    console.log('mainWrap toggle');
    var isHidden = $('.appHelpWrapper').hasClass('hidden');
    console.log('is hidden ' + isHidden);
    if(isHidden) {
		console.log('it is hidden');
    } else {
        console.log('it is NOT hidden');
		var abc = $('.appHelpWrapper');
		abc.addClass('hidden');
    }
  });
  
  $( "#datepicker" ).datepicker();
  
});