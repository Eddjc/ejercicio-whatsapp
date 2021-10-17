var showingUsers = false; //variable para sabere si se esta mostrando o no se muestran los usuarios 

function toggleUsers(){
    if (showingUsers){
        document.getElementById('user-list').style.display = 'none';  //ocultal usuarios
        showingUsers = false;
    }
    else{
        document.getElementById('user-list').style.display = 'flex'; //mostrar usuarios
        showingUsers = true;
    }
}; 

function toggleStickers(){
    if(document.getElementById('stickers').style.display == 'block') {
        document.getElementById('stickers').style.display = 'none';
    }
    else{
        document.getElementById('stickers').style.display = 'block';
    }
}

function selectOption(id, menuOption){
    document.getElementById('chat-datail').style.display = 'none';
    document.getElementById('chats-list').style.display = 'none'
    document.getElementById('contacts-list').style.display = 'none'
    document.getElementById(id).style.display = 'block'

    document.querySelectorAll('.menu-option').forEach(etiqueta =>{
        etiqueta.classList.remove('active');
    });
    menuOption.classList.add('active');
}

function showChatDetail(){
    document.getElementById('chats-list').style.display = 'none'
    document.getElementById('contacts-list').style.display = 'none'
    document.getElementById('chat-datail').style.display = 'flex';

}