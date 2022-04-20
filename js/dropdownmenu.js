function consultingList() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
 
function customersList() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

function publicationsList() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
   
  window.onclick = function(event) {
    if (!event.target.matches('.topbar-trigger')) {
      var dropdowns = document.getElementsByClassName("topbar-submenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


function webList() {
    document.getElementById("dropdown1").classList.toggle("showsubnav");
  }
 
function digitalList() {
    document.getElementById("dropdown2").classList.toggle("showsubnav");
  }

function mobileList() {
    document.getElementById("dropdown3").classList.toggle("showsubnav");
  } 

function digitalMarketingList() {
    document.getElementById("dropdown4").classList.toggle("showsubnav");
  }   

function iotList() {
    document.getElementById("dropdown5").classList.toggle("showsubnav");
  }
   
  window.onclick = function(event) {
    if (!event.target.matches('.nav-trigger')) {
      var dropdowns = document.getElementsByClassName("nav-submenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showsubnav')) {
          openDropdown.classList.remove('showsubnav');
        }
      }
    }
  }