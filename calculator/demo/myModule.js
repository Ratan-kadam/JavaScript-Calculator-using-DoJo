define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.
    'dojo/dom',
    'dijit/form/Button'
], function(dom,Button){
    var display = dom.byId("display");
    display.innerHTML="calculator";
   // alert("setting inner content");
            
        
    var oldText = {};

    // This returned object becomes the defined value of this module
    return {
        setText: function (id, text) {
            var node = dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },

        restoreText: function (id) {
            var node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        },
        
        sample:function(msg){
           // alert("accessed mymodule---Ratan"+ msg);
        }
    };
});