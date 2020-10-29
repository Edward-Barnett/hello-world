let articleCounter = 0;

function loadButtons()
{
    const forButtons = document.getElementsByClassName('buttonable')
    
    for (let i = 0; i < forButtons.length; i++)
    {
        const thisElement = forButtons[i]
        
        const textDisplay = document.getElementsByClassName('buttonable-text')[articleCounter]
        const newButton = document.createElement('button')
        newButton.type = 'button'
        newButton.className = 'styledButton'
        newButton.id = "sequential-button" + articleCounter
        articleCounter++
        
        if (i > 0)
        {
            newButton.disabled = true
            newButton.textContent = '???'
        }
        else {            
            newButton.textContent = "Show me!"
        }

        thisElement.append(newButton)

        newButton.addEventListener('click', function()
        {
            if (newButton.disabled === false)
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
                const idPortion = newButton.id.substring(17, newButton.id.length)
                
                const numeric = parseInt(idPortion) + 1
                
                const nextButton = document.getElementById("sequential-button" + numeric)
                if (nextButton != null)
                {
                  nextButton.disabled = false
                  nextButton.textContent = "Show me!"
                } 
            }            
        })
    }; 

   
}


document.onload(loadButtons())