const tweeter=document.querySelector('#post');
const ul =document.querySelector('ul');

tweeter.addEventListener('submit',function (e){

    e.preventDefault();
    const usernameInput=document.querySelectorAll('input')[0];
    const tweetInput=document.querySelectorAll('input')[1];
    addItem(usernameInput.value,tweetInput.value);
    usernameInput.value='';
    tweetInput.value='';
});

function addItem(username,tweet){
    const item=document.createElement('li');
    const b=document.createElement('b');
    b.append(username);
    item.append(`@`);
    item.append(b);
    item.append(` tweeted: ${tweet}`);
    ul.append(item);
}