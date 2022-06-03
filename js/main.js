document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest(){
    const characterName = document.querySelector('input').value.toLowerCase();
    try{
        const response = await fetch(`https://sonic-api-100devs.herokuapp.com/api/${characterName}`);
        const data = await response.json();

        console.log(data);
        let characterImg = document.querySelector('.character-img');
        switch(characterName) {
            case 'sonic':
                characterImg.src = "https://i.imgur.com/URMIXzU.png";
                break;
            case 'eggman':
                characterImg.src = "https://i.imgur.com/PRL2ocv.png";
                break;
            case 'tails':
                characterImg.src = "https://i.imgur.com/W6z89iP.png";
                break;
            case 'metal sonic':
                characterImg.src = "https://i.imgur.com/9dFMJ6q.png";
                break;
            case 'knuckles':
                characterImg.src = "https://i.imgur.com/fTc9Brt.png";
                break;
            default:
                characterImg.src = "https://i.imgur.com/QAIRxBN.png";
                break;
        }
        /* if(characterName === 'sonic') {
            
            //characterImg.src = "../img/sonic.png";
        } else if() */
        document.querySelector('p').innerText = `${data.powers}`;
    }catch(error){
        console.log(error);
    }
}