CKEDITOR.plugins.add( 'addparagraph', {
  init: function( editor ){
    //add it to the toolbar
    editor.ui.addButton( 'addparagraph', {
      label: 'Add Paragraph',
      command: 'makeparagraph',
      icon: this.path + 'images/addparagraph.png'
    });
    //the command
    editor.addCommand( 'makeparagraph', {
      exec: function(editor){
        var str = "<p>&nbsp;</p>";
        var p = CKEDITOR.dom.element.createFromHtml(str);
        var parent = editor.getSelection().getStartElement();
        p.insertAfter(parent);
        editor.getSelection().selectElement(p);
      }
    })
  }
});