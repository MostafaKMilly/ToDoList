count=0;
function Additem () {
  count++;
  node=document.createElement('li');
  parag=document.createElement('p');
  parag.setAttribute('id','parg'+count);
  x=document.getElementById('search').value;
  TextNode=document.createTextNode(x);
  node.setAttribute('id','p'+count);
  parag.appendChild(TextNode);
  node.appendChild(parag);
  div=document.createElement('div');
  div.setAttribute('id',count);
  image1=document.createElement('img');
  image1.setAttribute('src','https://img.icons8.com/color/48/000000/checked-checkbox.png');
  image1.setAttribute('id',count);
  image1.setAttribute('onclick','Arrowf(this);');
  div.appendChild(image1);
  image2=document.createElement('img');
  image2.setAttribute('src','https://img.icons8.com/cotton/64/000000/edit--v1.png');
  image2.setAttribute('id',count);
  image2.setAttribute('onclick','edit(this)');
  div.appendChild(image2);
  image3=document.createElement('img');
  image3.setAttribute('src','https://img.icons8.com/flat_round/64/000000/delete-sign.png');
  image3.setAttribute('id',count);
  image3.setAttribute('onclick','deleteitem(this)');
  div.appendChild(image3);
  node.appendChild(div);
  document.getElementById('listitem').appendChild(node);
  document.getElementById('search').value="";
}
function Arrowf(element) {
  x=document.getElementById('parg'+element.id);
  if (x.style.textDecoration=="none")
  document.getElementById('parg'+element.id).style.textDecoration="line-through";
  else {
    document.getElementById('parg'+element.id).style.textDecoration="none";
  }
}
function deleteitem (element) {
  x=document.getElementById('p'+element.id);
  x.parentNode.removeChild(x);
}
function edit(element) {
  Textd=document.getElementById('parg'+element.id).innerHTML;
  document.getElementById('search').value=Textd;
  deleteitem(element);
}
