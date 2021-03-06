
/*
* Toggling sidebar open, pinned and closed with below function;
* Also changing class of fontawesome icon to change icons;
* */
function sidebarIconClicked(sidebarIcon){
    let sideBarElement = document.getElementById('sidebar');
    let sideBarFontAwsm = document.getElementById('sideBarIcon');

    if (sideBarElement.className === 'sidebar open'){

        sideBarElement.classList.add('pinned');
        sidebarIcon.classList.add('pinned');
        window.localStorage.setItem('sidebar', 'pinned'); //saving pinned attribute of sidebar locally
        document.getElementsByClassName("mainContent")[0].style.marginRight = "250px"; // squashing mainContent div on sidebar pin;
        document.getElementById("page-header").style.marginRight = "250px"; // squashing mainContent div on sidebar pin;
        document.getElementById("footer").style.marginRight = "250px"; // squashing mainContent div on sidebar pin;
        sideBarFontAwsm.classList.remove('rotate-45');

    } else if(sideBarElement.className === 'sidebar open pinned'){

        sideBarElement.classList.remove('open','pinned');
        sidebarIcon.classList.remove('open','pinned');
        sideBarFontAwsm.classList.remove('fa-thumbtack');
        sideBarFontAwsm.classList.add('fa-chevron-left');
        window.localStorage.removeItem('sidebar'); //deleting pinned attribute of sidebar locally
        document.getElementsByClassName("mainContent")[0].style.marginRight = "0"; // squashing mainContent div on sidebar pin;
        document.getElementById("page-header").style.marginRight = "0"; // squashing mainContent div on sidebar pin;
        document.getElementById("footer").style.marginRight = "0"; // squashing mainContent div on sidebar pin;

    } else {

        sideBarElement.classList.add('open');
        sidebarIcon.classList.add('open');
        sideBarFontAwsm.classList.remove('fa-chevron-left');
        sideBarFontAwsm.classList.add('fa-thumbtack', 'rotate-45');

    }
}

/*
* Adding global click listener
*
* Checking if clicked element is sidebar button or sidebar element and its children elements
* If clicked region is not the above and sidebar has class 'open' remove open class
* from button and side bar to close sidebar if its not pinned;
* */

document.addEventListener('click', function(event){
    let sideBarElement = document.getElementById('sidebar');
    let sideBarIcon = document.getElementById('sidebarButton');
    let sideBarFontAwsm = document.getElementById('sideBarIcon');

    if(!sideBarElement.contains(event.target) && !sideBarIcon.contains(event.target) &&
        event.target !== sideBarIcon && event.target !== sideBarElement &&
        sideBarElement.className === 'sidebar open')
    {

        sideBarIcon.classList.remove('open');
        sideBarElement.classList.remove('open');
        sideBarFontAwsm.classList.remove('fa-thumbtack','rotate-45');
        sideBarFontAwsm.classList.add('fa-chevron-left');

    }
});
/*
* Checking localstorage for sidebar pinned
* If it exists add pinned classes
* */
window.onload = function(){
    if(window.localStorage.getItem('sidebar')){

        let sideBarElement = document.getElementById('sidebar');
        let sideBarIcon = document.getElementById('sidebarButton');
        let sideBarFontAwsm = document.getElementById('sideBarIcon');


        sideBarFontAwsm.classList.remove('fa-chevron-left');
        sideBarFontAwsm.classList.add('fa-thumbtack');
        sideBarElement.classList.add('open', 'pinned');
        sideBarIcon.classList.add('open', 'pinned');
        document.getElementsByClassName("mainContent")[0].style.marginRight = "300px";
    }
}

