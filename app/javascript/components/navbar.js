
const initMenuToggle = () => {
  const nav = document.querySelector("#myTopnav");
  if (nav.className === "items-buttons") {
    nav.className += " responsive";
  } else {
    nav.className = "items-buttons";
  }

    $(document).ready(function(){
  $("#icon").dropdown();
});

}


export { initMenuToggle };
