setTimeout(function() {
    // Select the button container
    var btnContainer = document.querySelector('.top-btn-container');
    
    // Make the button container visible by adding the 'visible' class
    btnContainer.classList.add('visible');
}, 11500); // 3000 milliseconds delay

function toggleTheme() {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}
