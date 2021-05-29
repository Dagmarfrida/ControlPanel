//Dark Mode lavet med hjælp fra Kevin Powell, https://www.youtube.com/watch?v=wodWDIdV9BY
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#checkbox');

//check if dark mode is enabled
//if enabled, turn of
//if disabled, turn on
const enableDarkMode = () => {
    //add class dark mode to body
    document.body.classList.add('dark')
    //update darkmode in localStorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    //add class dark mode to body
    document.body.classList.remove('dark')
    //update darkmode in localStorage
    localStorage.setItem('darkMode', 'null');
};

if (darkMode == 'enabled') {
    enableDarkMode();
}
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode(); 
        localStorage.setItem('takki', 'true');
    } else {
        disableDarkMode ();
        localStorage.setItem('takki', 'false');
    }
    darkTakki();
    
});

function darkTakki(){    
    const state = localStorage.getItem('takki');
    return state;
    }

//RADIO BUTTONS COLORS AND DARK MODE 
        //console.log(x);
        function changeColour(value, id)
            {
                var color = document.getElementById(id).style.backgroundColor;
                let x = darkTakki();
                switch(value)
                {
                    case 'NAN':
                        if(x == 'false'){
                            color = "#FEF2CC";
                        }
                        else{
                            color = "#AB47BC";
                        }
                    break;
                    case 'IP':
                        if(x == 'false'){
                            color = "#CCFAFE";
                        }
                        else{
                            color = "#3D5AFE";
                        }
                    break;
                    case 'S':
                        if(x == 'false'){
                            color = "#CCFAFE";
                        }
                        else{
                            color = "#0E9F7A";
                        }
                    break;
                    case 'D':
                        if(x == 'false'){
                            color = "#F7F7F7";
                        }
                        else{
                            color = "#333";
                        }
                    break;
                    default:
                    if(x == 'true'){
                        color = "#333";}
                    else 
                        color = "#F7F7F7";
                }
                document.getElementById(id).style.backgroundColor = color;
                
            }

            

        