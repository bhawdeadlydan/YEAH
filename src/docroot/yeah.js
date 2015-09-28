/*!
 * YEAH JavaScript Library v1.0.0
 * http://www.alessiodicrescenzo.com/
 *
 *
 * Released under the GNU license
 *
 * Date: 2015-09-28T16:01Z
 */



(function( $ ) {

    $.fn.yeah = function( params ) {

        var that=this;

        $( window ).scroll(function(e) {
            var _sp = $(window).scrollTop();
            var objIntoView=$.fn.yeah.objsWebViewLocation(that,_sp);

            $(objIntoView.objIntoWebView).each(function(i,el){
                $(el).removeClass($(el).data("yeah-animation-out"));
                $(el).addClass($(el).data("yeah-animation-in"));
            });

            $(objIntoView.objOutWebView).each(function(i,el){
                $(el).removeClass($(el).data("yeah-animation-in"));
                $(el).addClass($(el).data("yeah-animation-out"));
            });

        });

        return this;


    };

    $.fn.yeah.objsWebViewLocation=function(objList,_scrollPosition)
    {
        var _arrInto=[];
        var _arrOut=[];
        objList.each(function(i,el){
            var objPosition=($(el).offset().top - window.innerHeight + $(el).outerHeight());

            //if(objPosition <=_scrollPosition - $(el).data("yeah-animation-in-offset") && _scrollPosition<=objPosition+window.innerHeight-$(el).outerHeight()-$(el).data("yeah-animation-out-offset"))
            if(objPosition <=_scrollPosition  && _scrollPosition<=objPosition+window.innerHeight-$(el).outerHeight())
            {
                _arrInto.push(el);
            }
            else
            {
                _arrOut.push(el);
            }
        });

        return {"objIntoWebView":_arrInto,"objOutWebView":_arrOut};
    }




}( jQuery ));

