function reveal(choice)
{
  clear();
  var content_to_reveal;
  switch(choice)
  {
    case 1:
    {
      content_to_reveal = document.getElementsByClassName("general-content")[0];
      break;
    }
    case 2:
    {
      content_to_reveal = document.getElementsByClassName("education-content")[0];
      break;
    }
    case 3:
    {
      content_to_reveal = document.getElementsByClassName("gallery-content")[0];
      break;
    }
    case 4:
    {
      content_to_reveal = document.getElementsByClassName("contacts-content")[0];
      break;
    }
  }
  content_to_reveal.style.paddingLeft = '40px';
  content_to_reveal.style.opacity = '1';
}

function clear()
{
  var possible_active_content_array = document.getElementsByClassName("possible-active-content");
  for(let i = 0; i < possible_active_content_array.length; i++)
  {
    possible_active_content_array[i].style.paddingLeft = 0;
    possible_active_content_array[i].style.opacity = 0;
  }
}