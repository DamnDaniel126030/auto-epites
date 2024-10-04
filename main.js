import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener("DOMContentLoaded", ()=>{


    const tbody = document.getElementById("tbody");
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
                <button ><img src="${'./subaru_kepek/' + elements[i].imgName}"></button>
              </td>
              <td class="text-start">
                 <button><img  src="${'./subaru_kepek/' + elements[i + 1].imgName}"> </button>
              </td>
              <td id="price">
                0
              </td>
              <td>
                <button>X</button>
              </td>
            </tr>
          `

          element += items;
          
        }

        tbody.innerHTML += element;
        
    }


})

