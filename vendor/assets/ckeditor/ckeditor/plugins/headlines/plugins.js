CKEDITOR.plugins.add( 'headlines', {
  init: function(editor){
    var h1style = new CKEDITOR.style({ element: 'h1' });
    var h2style = new CKEDITOR.style({ element: 'h2' });
    var h3style = new CKEDITOR.style({ element: 'h3' });
    var h4style = new CKEDITOR.style({ element: 'h4' });
    var h5style = new CKEDITOR.style({ element: 'h5' });
    var h6style = new CKEDITOR.style({ element: 'h6' });

    editor.addCommand( 'heading-h1', new CKEDITOR.dialogCommand( h1style ));
    editor.addCommand( 'heading-h2', new CKEDITOR.dialogCommand( h2style ));
    editor.addCommand( 'heading-h3', new CKEDITOR.dialogCommand( h3style ));
    editor.addCommand( 'heading-h4', new CKEDITOR.dialogCommand( h4style ));
    editor.addCommand( 'heading-h5', new CKEDITOR.dialogCommand( h5style ));
    editor.addCommand( 'heading-h6', new CKEDITOR.dialogCommand( h6style ));
  }

});