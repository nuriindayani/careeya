jQuery(document).ready(function($){var flag=$("#navigationFlag").val();if(flag!='')
{var element="div.navigation ."+flag;if(element.length>0)
{$(element).addClass("selected");}}});