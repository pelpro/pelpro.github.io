function CreateandAdd(s) {
var element = $('<li><span></span> <button class="deleteb">�������</button></li>');
$('span', element).text(s);
$('#root ul').append(element);
$('.deleteb', element).click(function(delq){
$(this).parent().remove()});
}
$(function(){
$('#root').append('<ul></ul>');
$('#root').append('<input id="add_task_input">)
$('#root').append('<button id="add_task">��������</button>');
$('#add_task').click(function(){
addElement($('#add_task_input').val())
}
);
CreateandAdd('������� ������� #3 �� web-����������������');
})