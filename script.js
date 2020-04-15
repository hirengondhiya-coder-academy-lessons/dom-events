(
    function() {
        function onMakeItRed() {
            let warning = document.getElementById('warning');
            if(warning) {
                warning.style.backgroundColor = 'red';
            }
        }
        const btnMakeItRed = document.getElementById('makeItRed');
        btnMakeItRed.addEventListener('click', onMakeItRed);
    }
)();