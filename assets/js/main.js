(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        $.is_fs = false;
        $.requestFullScreen = function(calr) {
            var element = document.body;

            // Supports most browsers and their versions.
            var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

            if (requestMethod) { // Native full screen.
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }

            $.is_fs = true;
            $(calr).val('Exit Full Screen');
        }

        $.cancel_fs = function(calr) {
            var element = document; //and NOT document.body!!
            var requestMethod = element.exitFullScreen || element.mozCancelFullScreen || element.webkitExitFullScreen || element.mozExitFullScreen || element.msExitFullScreen || element.webkitCancelFullScreen;

            if (requestMethod) { // Native full screen.
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }

            $(calr).val('Full Screen');
            $.is_fs = false;
        }

        $.toggleFS = function(calr) {
            $.is_fs == true ? $.cancel_fs(calr) : $.requestFullScreen(calr);
        }






    });

    /*====  Window Load Function =====*/
    jQuery(window).load(function() {



    });

}(jQuery));