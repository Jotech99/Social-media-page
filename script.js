//SIDEBAR
// we want each of element of the side bar to have an active class whe clicked
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//LIKE 
const like = document.querySelectorAll('#like');
// console.log(like);

//BOOKMARK
const booked = document.querySelectorAll('#booked');
// console.log(booked)

//==================================> SIDEBAR <================================
//remove the active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    });
}
// Adding the active classlist to all the element of the sidebar
menuItems.forEach(item =>{
    // for each item we want to add an event listener
    item.addEventListener('click',()=>{
        // so whenever one is clicked we call the function of changeActiveItem
        changeActiveItem();
        item.classList.add('active');
        // if the notification is clicked we want to remove the notifcation count and show the notifications pop up
        if(item.id != 'notifications'){//so if the menu-item does not have the id of notifications we get the notifications pop up
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';  
            document.querySelector('#notifications .notification-count').style.display = 'none'; 
        }
        // if(item.id !='bookmarks'){
        //     document.querySelector('.bookmarked-popup').style.display = 'none';
        // }
        // else{
        //     document.querySelector('.bookmarked-popup').style.display = 'block';  
        //     document.querySelector('#bookmarks .notification-count').style.display = 'none'; 
        // }
    });
});

//==================================> MESSAGES <================================
//searches chat
const searchMessage = () => {
        const val = messageSearch.value.toLowerCase();
        // console.log(val);
        message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        // console.log(name);
        // we want to match the names we are getting to the names that are being typed in
        if(name.indexOf(val) != -1){// if there is a match that means the index of name and val is not going to be negative one that what we are searching can bef found in the name
            chat.style.display = 'flex'; // flex cause that is the inital styling, the display  we gave each message
        }else{
            chat.style.display = 'none';
        }
    });
};

//search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight message card when message menu item is clicked
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    // hiding the message notiications count
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);//2 seconds
});

//==================================> THEME/ DISPLAY CUSTOMIZATION <================================
//opens modal
const openThemeModal = () =>{
    themeModal.style.display = 'grid';
};

//closes modal
const closeThemeModal = (e) =>{// so the function takes in an event cause we are going to use a target
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
};
//clsoe modal
themeModal.addEventListener('click',closeThemeModal);
//opens modal
theme.addEventListener('click', openThemeModal);


//==================================> FONTS <================================

//remove active class from span or font-size selectors
const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
      size.classList.remove('active');
    });  
  };

fontSizes.forEach( size =>{
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left','-10rem');
            root.style.setProperty('--sticky-top-right','-33rem');
        }
        // we used 'rem' for all our font-size that is why we were able to change all our font-size at once just by changing that of our html element
        // change font-size of the root element in the html element 
        document.querySelector('html').style.fontSize = fontSize;
    });
});

//==================================> PRIMARY COLORS <================================
//this functions removes active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    });
};

//Change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click',()=>{
        let primaryHue;
        //removing the active class from colors
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
           primaryHue = 252;
        }else if(color.classList.contains('color-2')){
           primaryHue = 52; 
        }else if(color.classList.contains('color-3')){
            primaryHue = 352; 
        }else if(color.classList.contains('color-4')){
            primaryHue = 152; 
        }else if(color.classList.contains('color-5')){
            primaryHue = 202; 
        }
        color.classList.add('active');  

        root.style.setProperty('--primary-color-hue',primaryHue);
    });
});


//==================================> BACKGROUND COLOR  <================================ 
// theme Background Values
let lightColorLightness;
let whitetColorLightness;
let darkColorLightness;

const changeBg = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whitetColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
};

//change background colors
Bg1.addEventListener('click',()=>{
    //add active class
    Bg1.classList.add('active'); 
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customize changes form local storage 
    // we are just going to reload the page cause all the css values are the default values for the first bg
    window.location.reload();
});


Bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whitetColorLightness = '20%';
    lightColorLightness = '15%';
    
    //add active class
    Bg2.classList.add('active'); 
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
});

Bg3.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whitetColorLightness = '10%';
    lightColorLightness = '0%';
    
    //add active class
    Bg3.classList.add('active'); 
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
});

//==================================> LIKE <================================
like.forEach(likes =>{
    likes.addEventListener('click',()=>{
        likes.classList.toggle('fa-heart-o');
        likes.classList.toggle('fa-heart');
    })
});

//==================================> BOOKMARK <================================
booked.forEach(book =>{
    book.addEventListener('click', ()=>{
        book.classList.toggle('fa-bookmark-o');
        book.classList.toggle('fa-bookmark');
    })
});

//==================================> PRELOADER <================================

// Preloader JS
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut;


//==================================> SCROLL TO TOP BUTTON <================================
//Scroll To Top Button
const btnScrolltoTop = document.querySelector("#btnScrolltoTop");
	
	btnScrolltoTop.addEventListener("click", function(){	
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});
//==================================> END <==================
