import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener("DOMContentLoaded", ()=>{

    const tbody = document.getElementById("tbody");
    
    const firstButton = document.getElementById("firstButton");
    const secondButton = document.getElementById("secondButton");
    getJson();
    
    async function getJson(){
        await fetch('./parts.json')
        .then((response) => response.json())
        .then((json) => tbodyCreate(json));
    }


    function tbodyCreate(elements){
        let element = "";

        for (let i = 0; i < elements.length; i += 2) {
          let items = `
            <tr>
              <td class="text-center">
                <button id="${elements[i].id}" class="not-clickable" disabled onclick="selectFunction('${elements[i].id}','${elements[i].price}'); return false" ><img src="${'./subaru_kepek/' + elements[i].imgName}"></button>
              </td>
              <td class="text-start">
                 <button id="${elements[i+1].id}" class="clickable"   onclick="selectFunction('${elements[i+1].id}','${elements[i+1].price}')"><img  src="${'./subaru_kepek/' + elements[i + 1].imgName}"> </button>
              </td>
              
              <td>
                <input type="checkbox" id="nothingCheckbox" ></input>Nothing
              </td>
              <td id="${elements[i].id}">
                ${elements[i].price}Ft
              </td>
            </tr>
          `

          element += items;
          
        }

        tbody.innerHTML += element;
       
    }
    

    function selectFunction(idButton, price) {
      
      if (idButton % 2 == 0) {
        let buttonChosen = document.getElementById(idButton.toString());
        let buttonNotChosen = document.getElementById((idButton - 1).toString());
        buttonChosen.disabled = true;
        buttonChosen.classList.remove("clickable");
        buttonChosen.classList.add("not-clickable");
        buttonNotChosen.disabled = false;
        buttonNotChosen.classList.remove("not-clickable");
        buttonNotChosen.classList.add("clickable");
      };
      if (idButton % 2 != 0) {
        let buttonChosen = document.getElementById(idButton.toString());
        idButton++
        let buttonNotChosen = document.getElementById((idButton).toString())
        buttonChosen.disabled = true;
        buttonChosen.classList.remove("clickable");
        buttonChosen.classList.add("not-clickable");
        buttonNotChosen.disabled = false;
        buttonNotChosen.classList.remove("not-clickable");
        buttonNotChosen.classList.add("clickable");
      };
    }
    
    window.selectFunction = selectFunction;

})

