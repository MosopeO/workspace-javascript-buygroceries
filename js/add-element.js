/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});

// traverse the elements
$('#one').next().next().text('milk');

// add a new element by clicking the plus sign
$('#todo').append('<li>candy</li>');

// before and after are for siblings
// append and prepend are for parent
$('#add').click(addElement);
function addElement() {
  var txt = '';
  // add a new element
  $('#todo').append('<li><input type = "text"></li>');

  // add a input text box
  $('input').blur(function () {
    $(this).parent().addClass('Cool');
    var items = $(this).val();

    //replace the input box with the text
    $(this).parent().text(items);
  });

  // whenever the user are done add the element
}

// bind click with the event handler
$('li').click(changeStyle);
$('input').click(changeStyle);

//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  } else if ($(this).hasClass('complete')) {
    $(this).removeClass('complete');
    $(this).addClass('cool');
  } else {
    $(this).removeClass();
    $(this).addClass('cool');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('.complete').remove()
}
