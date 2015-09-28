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

        this.getElementsPosition=function()
        {
            var _arr=[];
            that.each(function(i,el){
                var offset=$(el).offset().top, inOffset=$(el).data("yeah-animation-in-offset"), outOffset=$(el).data("yeah-animation-out-offset");

                var obj={
                    'element':$(el),
                    'bottom':parseInt(offset - window.innerHeight + $(el).outerHeight()),
                    'top':parseInt(offset),
                    'inOffset':inOffset ? parseInt(inOffset) : 0,
                    'outOffset':outOffset ? parseInt(outOffset) : 0
                };

                _arr.push(obj);

            });

            return _arr;
        }

        this.animatedElements=this.getElementsPosition();

        $( window ).scroll(function(e)
        {
            var _sp = parseInt($(window).scrollTop());

            var objs=$.fn.yeah.objsWebViewLocation(that.animatedElements,_sp);

            $(objs.objIntoWebView).each(function(i,el){
                $(el).removeClass($(el).data("yeah-animation-out"));
                $(el).addClass($(el).data("yeah-animation-in"));
            });

            $(objs.objOutWebView).each(function(i,el){
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

        $(objList).each(function(i,el){

            if(el.bottom <=_scrollPosition - el.inOffset  && _scrollPosition + el.outOffset <= el.top)
            {
                _arrInto.push(el.element);
            }
            else
            {
                _arrOut.push(el.element);
            }
        });

        return {"objIntoWebView":_arrInto,"objOutWebView":_arrOut};
    }




}( jQuery ));

