let articleCounter = 0;

function loadButtons()
{
    const forButtons = document.getElementsByClassName('buttonable')
    
    for (let i = 0; i < forButtons.length; i++)
    {
        const thisElement = forButtons[i]
        
        const textDisplay = document.getElementsByClassName('article-text-b')[articleCounter]
        articleCounter++
        const newButton = document.createElement('button')
        newButton.type = 'button'
        newButton.className = 'styledButton'
        newButton.textContent = "Display"
        thisElement.append(newButton)

        newButton.addEventListener('click', function()
        {
            if (textDisplay.style.display === "none" || textDisplay.style.display === "")
            {
                textDisplay.style.display = "block"
                newButton.textContent = "Hide"
            }
            else
            {
                textDisplay.style.display = "none"
                newButton.textContent = "Reveal"
            }
        })
    }; 
    
}

function myFunction(tryer){
    alert(tryer)
}

document.onload(loadButtons())