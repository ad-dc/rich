(function(){

  CKEDITOR.plugins.add('liTab', {
      init: function(editor) {
          editor.on('key', function(ev) {
              if( ev.data.keyCode == 9 || ev.data.keyCode == CKEDITOR.SHIFT + 9) {
                  if ( editor.focusManager.hasFocus )
                  {
                      var sel = editor.getSelection(),
                      ancestor = sel.getCommonAncestor();
                      asc = ancestor.getAscendant({li:1, td:1, th:1, p:1}, true);

                      if( (asc === "undefined" || asc === null) || (asc.$.nodeName != 'TD' && asc.$.nodeName != 'TH') ){ 
                        editor.execCommand(ev.data.keyCode == 9 ? 'indent' : 'outdent');
                        ev.cancel();
                      }
                      // else we've found a td/th first, so let's not break the
                      // existing tab functionality in table cells.
                  }
                  
              }
          }, null, null, 5); // hi#gh priority (before the tab plugin)
      }
  });

})();
