var myList = [];
function addItem()
{

  var input = document.getElementById("newItem").value;
  if(myList.indexOf(input) == -1)
  {

    var list = document.getElementById("listDisplay");
    var item = document.createElement("li");

    var itemName = document.createTextNode(input);
    myList.push(input);
    for(i=0; i<myList.length; i++)
    {
    console.log(myList[i]);
    }
    var btnClose = btnClose = document.createElement("button");
    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");

    var iconClose = document.createElement("span");
    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");
    btnClose.addEventListener("click", removeParentListItem);
    btnClose.appendChild(iconClose);
    item.appendChild(btnClose);
    item.appendChild(itemName);
    item.appendChild(btnClose);
    list.appendChild(item);
    document.getElementById("newItem").value = "";
  }
}

function removeParentListItem()
{

  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);
  myList.splice(itemIndex,1);
  for(i = 0; i<myList.length; i++)
  {
    console.log(myList[i]);
  }
}

function saveList()
{
   var newList = myList.toString();
   setCookie("myCookie",newList,20);
}

function clearList()
{
  document.getElementById("listDisplay").innerHTML = "";
  myList = [];
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
