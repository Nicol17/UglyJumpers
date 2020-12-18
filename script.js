function myFunction() {
    const navlinks = document.getElementsByClassName('navlinks')[0]

    if(navlinks.style.display === 'block'){
            navlinks.style.display = 'none'
        }else{
            navlinks.style.display = 'block'
        }
}