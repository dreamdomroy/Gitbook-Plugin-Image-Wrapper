var cheerio = require( "cheerio" )


var wrapImageTags = function(page){

    var $ = cheerio.load(page.content);

    // Loop through each image found in the page content
    $('img').each(function(){

        // Build the wrapper
        var imageWrapper = $('<div style="text-align: center;">').addClass('image-wrapper');

        // Get the image object
        var img = $(this);

        // Rebuild the image
        var $image = $('<img>')
                        .attr('src', img.attr('src'))
                        .attr('alt', img.attr('alt'));

        // Append the original image
        imageWrapper.append($image);
        
        // Add the image with its wrapper
        $(this).before(imageWrapper);
        
        // Remove the image
        $(this).remove();
    });
    
    // Loop through each h1 found in the page content
    $('h1').each(function(){
        // Build the wrapper
        var h1Wrapper = $('<div style="text-align: center;">');
        // Get the image object
        var h1 = $(this).innerHTML;
        console.log(h1)
        var $hh1 = $('<h1>')
                        .attr('value', h1.attr('value'));
        h1Wrapper.append($hh1);
        $(this).before(h1Wrapper);
        $(this).remove();
    });
    
    page.content = $.html();

    return page;

}

module.exports = {


    // Map of hooks
    hooks: {

    	'page': function(page){    		
    		return wrapImageTags(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
