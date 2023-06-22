document.addEventListener('keydown', event => {
    if (event.key === 'Tab') event.preventDefault();
    else if (event.ctrlKey && event.key === 's') event.preventDefault();
});