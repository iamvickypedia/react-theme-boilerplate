export default function changeTheme(themecolor){
    const registeredThemes = ["dark","light","dreamy"]
    const rootComp = document.querySelector("#AppRoot")
    registeredThemes.forEach((themename)=>{
        rootComp.classList.remove(themename)
    })
    rootComp.classList.add(themecolor)
}