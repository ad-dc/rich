CKEDITOR.plugins.add( 'headlines', {
  init: function(editor){

    editor.setKeystroke( [
      [ CKEDITOR.CTRL + 49 /*1*/, 'heading-h1' ],
      [ CKEDITOR.CTRL + 50 /*2*/, 'heading-h2' ],
      [ CKEDITOR.CTRL + 51 /*3*/, 'heading-h3' ],
      [ CKEDITOR.CTRL + 52 /*4*/, 'heading-h4' ],
      [ CKEDITOR.CTRL + 53 /*5*/, 'heading-h5' ],
      [ CKEDITOR.CTRL + 54 /*6*/, 'heading-h6' ]
    ] );

    var h1style = new CKEDITOR.style({ element: 'h1' });
    var h2style = new CKEDITOR.style({ element: 'h2' });
    var h3style = new CKEDITOR.style({ element: 'h3' });
    var h4style = new CKEDITOR.style({ element: 'h4' });
    var h5style = new CKEDITOR.style({ element: 'h5' });
    var h6style = new CKEDITOR.style({ element: 'h6' });

    editor.addCommand( 'heading-h1', {
      exec: function(editor){
        h1style.apply(editor.document)
      }
    });

    editor.addCommand( 'heading-h2', {
      exec: function(editor){
        h2style.apply(editor.document)
      }
    });

    editor.addCommand( 'heading-h3', {
      exec: function(editor){
        h3style.apply(editor.document)
      }
    });

    editor.addCommand( 'heading-h4', {
      exec: function(editor){
        h4style.apply(editor.document)
      }
    });

    editor.addCommand( 'heading-h5', {
      exec: function(editor){
        h5style.apply(editor.document)
      }
    });

    editor.addCommand( 'heading-h6', {
      exec: function(editor){
        h6style.apply(editor.document)
      }
    });
  }

});