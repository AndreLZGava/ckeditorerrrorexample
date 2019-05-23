/**
 * Toolbar com apenas as opções de negrito, itálico e sublinhado do CKEditor 5
 *
 * Ao alterar esse arquivo deve ser rodado o comando './node_modules/.bin/webpack' dentro da pasta 'sass',
 * para gerar o arquivo bundle do webpack.
 *
 * O arquivo JS a ser incluído na página HTML é o arquivo bundle, gerado na pasta 'js/webpack/RESTANTE_DO_CAMINHO'
 */

import ClassicEditor from '../../../node_modules/@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '../../../node_modules/@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '../../../node_modules/@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '../../../node_modules/@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '../../../node_modules/@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '../../../node_modules/@ckeditor/ckeditor5-basic-styles/src/underline';

window.CKEditorsToolbar2 = [];
window.buildCKEditorToolbar2 = function(elementEditor) {
    ClassicEditor
        .create(elementEditor, {
            plugins: [
                Essentials,
                Paragraph,
                Bold,
                Italic,
                Underline
            ],
            toolbar: [
                'bold',
                'italic',
                'underline'
            ]
        })
        .then(editor => {
            CKEditorsToolbar2.push(editor);
            editor.model.document.on('change', () => {
                editor.element.value = editor.getData();
            });
        })
        .catch(error => {
            console.log(error);
        });
};

var allEditors = document.querySelectorAll('.ckeditor');

for (var i = 0; i < allEditors.length; ++i) {
    self.buildCKEditorToolbar2(allEditors[i]);
}