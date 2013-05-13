CKEDITOR.plugins.add( 'headlines', {
  init: function(editor){
    var h1style = new CKEDITOR.style({ element: 'h1' });
    var h2style = new CKEDITOR.style({ element: 'h2' });
    var h3style = new CKEDITOR.style({ element: 'h3' });
    var h4style = new CKEDITOR.style({ element: 'h4' });
    var h5style = new CKEDITOR.style({ element: 'h5' });
    var h6style = new CKEDITOR.style({ element: 'h6' });

    editor.addCommand( 'heading-h1', {
      exec: function(editor){
        var sel = editor.getSelection().getStartElement();
        h1style.applyToObject(sel);
      }
    }

    editor.addCommand( 'heading-h2', {
      exec: function(editor){
        var sel = editor.getSelection().getStartElement();
        h2style.applyToObject(sel);
      }
    }

    editor.addCommand( 'heading-h3', {
      exec: function(editor){
        var sel = editor.getSelection().getStartElement();
        h3style.applyToObject(sel);
      }
    }

    editor.addCommand( 'heading-h4', {
      exec: function(editor){
        var sel = editor.getSelection().getStartElement();
        h4style.applyToObject(sel);
      }
    }
  }

});