count=0;
function Additem () {
  count++;
  node=document.createElement('li');
  parag=document.createElement('p');
  parag.setAttribute('id','parg'+count);
  x=document.getElementById('search').value;
  if (x.length ==0)
  {
    alert('Please enter valid input');
    return;
  }
  
  if (!document.getElementById('listitem')) {
  ul = document.createElement('ul')
  ul.setAttribute('id', 'listitem');
  ul.classList.add('list-group');
  ul.classList.add('list-group-flush');
  document.getElementById('mo').prepend(ul);  }
  TextNode=document.createTextNode(x);
  node.setAttribute('id','p'+count);
  node.classList.add('list-group-item');
  node.classList.add('d-flex');
  node.classList.add('list-group-item');
  node.classList.add('justify-content-between');
  node.classList.add('align-items-center');
  parag.appendChild(TextNode);
  node.appendChild(parag);
  div = document.createElement('div');
  div.classList.add('container');
  node.appendChild(div);
  a1 = document.createElement('a');
  a1.style.fontSize ="25px";
  a1.classList.add('fa');
  a1.classList.add('fa-trash');
  a1.classList.add('pr-2');
  a1.classList.add('text-danger');
  a1.setAttribute('onclick', 'deleteitem(this)');
  a1.setAttribute('id',count);
  node.appendChild(a1);
  a2 = document.createElement('a');
  a2.style.fontSize = "25px";
  a2.classList.add('fa');
  a2.classList.add('fa-pencil');
  a2.classList.add('pr-2');
  a2.classList.add('text-primary');
  a2.setAttribute('onclick', 'edit(this)');
  a2.setAttribute('id', count);

  node.appendChild(a2);

  a3 = document.createElement('a');
  a3.style.fontSize = "25px";
  a3.classList.add('fa');
  a3.classList.add('fa-check');
  a3.classList.add('pr-2');
  a3.classList.add('text-success');
  a3.setAttribute('onclick', 'Arrowf(this)');
  a3.setAttribute('id', count);

  node.appendChild(a3);
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
  element.parentElement.remove();
}
function edit(element) {
  Textd=document.getElementById('parg'+element.id).innerHTML;
  document.getElementById('search').value=Textd;
  deleteitem(element);
}
function clearitemss() {
  x = document.getElementsByClassName('list-group');
  for (i=0; i<x.length ;i++) {
    x[i].remove();
  }
}