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
        p = editor.document.createElement( 'p' );
        parent = editor.getSelection().getStartElement();
        //console.log(editor.document)
        p.insertAfter(parent);
        editor.getSelection().selectElement( p )
      },
      refresh: function(editor, path){
        alert("HERRO!");
      }
    })
  }
});