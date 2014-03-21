$(document).ready(function () {
  var defaults = {
    styleWithSpan: false,
    height: 200,
    toolbar: [
      ['font', ['bold', 'italic', 'underline', 'clear']],
      ['para', ['ul', 'ol']],
      ['view', ['fullscreen', 'codeview']]
    ]
  };
  $('.summernote').each(function () {
    var textarea, options, data;
    textarea = $(this);
    data = textarea.data();
    options = $.extend(true, {}, defaults);

    $.each(Object.keys(data), function (index, value) {
      var optionKeyName;
      if (value.indexOf('summernote') !== -1) {
        optionKeyName = value.replace(/summernote/g, '');
        options[optionKeyName.substring(0, 1).toLowerCase() + optionKeyName.substring(1, value.length)] = data[value];
      }
    });
    textarea.summernote(options);
  });
  $('form').each(function () {
    var form = $(this);
    form.on('submit', function () {
      form.find('.summernote').each(function () {
        $(this).val($(this).code());
      });
    })
  });
});
