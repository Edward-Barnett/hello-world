const jokes = [
{l1: ["What's grey and has a trunk?"], l2: "A mouse on vacation.",
l3:["Obviously a vintage joke as who nowadays, mouse or otherwise, would be carrying a trunk on vacation?","I remember it because I heard it so many times and I loved it.", 
"Although I do remember thinking that mice are brown."]},
{l1: ["How does it rain in the circus?"], l2: "The man on the flying 'trapeze'.", 
l3: ["This is really an audio joke, it doesn't translate well to print.","Anyway, I thought it was funny. I told my second grade teacher and she made me stand in the corner.", 
"But I knew my mom was right and the teacher was wrong."]},
{l1: ["The darling children having returned from summer vacation, the teacher asked if anyone had an interesting experience to share.",
"Little Frankie's hand shot up. He waved frantically.",
"'Yes, Frankie? Did something interesting happen to you?'", 
"'Yes'm! A man was crossing the street right in front of my house, and a big truck come along and hit him right in the ass!'",
"The teacher frowned and shook her head. 'No, Frankie, don't say that. Say 'rectum'.'"], l2: "'Wrecked him? Hell, it killed him!'",
l3:["I still puzzle over this one."]}]

function putJokes(){
    for (let i = 0; i < jokes.length; i++)
    {
    const jokeSection = document.getElementById("jokeSection")
    const unJoke = document.createElement("div")
    unJoke.className = "unJoke"
    //const setupDiv = document.createElement("div")
    //setupDiv.className = "setupDiv"
    for (let iter = 0; iter < jokes[i].l1.length; iter++)
    {
        const setUp = document.createElement("p")
        setUp.className = "setUp"
        setUp.textContent = jokes[i].l1[iter]
        unJoke.append(setUp)
    }

    const punchLine = document.createElement("p")
    punchLine.textContent = jokes[i].l2
    punchLine.style.display = 'none'
    punchLine.className = 'punchLine'
    unJoke.append(punchLine)
    const unButton = document.createElement('button')
    unButton.type = 'button'
    unButton.className = 'styledButton'
    unButton.textContent = ">"
 
    unJoke.append(unButton)
    jokeSection.append(unJoke)
    const commentDiv = document.createElement('div')
    commentDiv.className = "CommentDiv"
    commentDiv.style.display = "none"
    for (let j = 0; j < jokes[i].l3.length; j++)
    {
        const jokeComment = document.createElement("p")
        jokeComment.textContent = jokes[i].l3[j]
        jokeComment.className = "jComment"
        commentDiv.append(jokeComment) 
    }
    unJoke.append(commentDiv)      
    unButton.addEventListener('click', function()
    {
        punchLine.style.display = "block"
        unButton.style.display = "none"
        commentDiv.style.display = "block"
/*        for (let k = 0; k < displayer.length; k++)
            {
                display[k].style.display = 'block'                
            }
        }
        */
    })
}
    
}
document.onload(putJokes())

