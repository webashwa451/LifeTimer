const isDOBOpen = false;
const settinggearEl = document.getElementById("settingsicon");
const settingcontentEl = document.getElementById("settingcontent");

const toggleDateofBirthselector = () => {

    if(isDOBOpen){
        settingcontentEl.classList.add("hide");
    } else {
        settingcontentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log("toggle", isDOBOpen);
};

settinggearEl.addEventListener("click", toggleDateofBirthselector);