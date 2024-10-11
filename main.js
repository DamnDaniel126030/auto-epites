import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener("DOMContentLoaded", ()=>{

    const tbody = document.getElementById("tbody");
    const table = document.getElementById("table");
    const titleImage = document.getElementById("titleImage");
    const finalPriceCell = document.getElementById("finalPrice");
    let finalPrice = 0;

    
    const firstButton = document.getElementById("firstButton");
    const secondButton = document.getElementById("secondButton");
    getJson();
    
    async function getJson(){
        await fetch('./parts.json')
        .then((response) => response.json())
        .then((json) => tbodyCreate(json));
    }

    function tbodyCreate(elements){
        let rowNumber = 21;
        let element = "";
        for (let i = 0; i < elements.length; i += 2) {
          let items = `
            <tr>
              <td></td>
              <td class="text-center">
                <button id="${elements[i].id}" class="not-clickable" disabled onclick="selectFunction('${elements[i].id}','${elements[i].price}', '${rowNumber}'); return false" ><img src="${'./subaru_kepek/' + elements[i].imgName}"></button>
              </td>
              <td class="text-start">
                 <button id="${elements[i+1].id}" class="clickable" onclick="selectFunction('${elements[i+1].id}','${elements[i+1].price}', '${rowNumber}')"><img  src="${'./subaru_kepek/' + elements[i + 1].imgName}"> </button>
              </td>
              <td class="text-start">
                <span id="${rowNumber}">+${elements[i].price}Ft</span>
              </td>
            </tr>
          `
          console.log(rowNumber);
          rowNumber++
          element += items;
          finalPrice += elements[i].price;
          
        }
        finalPriceCell.textContent = "Végösszeg: " + finalPrice + "Ft";
        tbody.innerHTML += element;
       
    }
    

    function selectFunction(idButton, price, rowNumber) {
      if (idButton == 2){
        titleImage.src = './feketeKocsi.png';
      }
      else if (idButton == 1){
        titleImage.src = './feherKocsi.png';
      }

      if (idButton % 2 == 0) {
        const buttonChosen = document.getElementById(idButton.toString());
        const buttonNotChosen = document.getElementById((idButton - 1).toString());
        const priceChosen = document.getElementById(rowNumber);
        buttonChosen.disabled = true;
        buttonChosen.classList.remove("clickable");
        buttonChosen.classList.add("not-clickable");
        buttonNotChosen.disabled = false;
        buttonNotChosen.classList.remove("not-clickable");
        buttonNotChosen.classList.add("clickable");
        priceChosen.textContent = "+" + price + "Ft"
        changePrice(price);
      }
      if (idButton % 2 != 0) {
        const buttonChosen = document.getElementById(idButton.toString());
        idButton++
        const buttonNotChosen = document.getElementById((idButton).toString())
        const priceChosen = document.getElementById(rowNumber);
        buttonChosen.disabled = true;
        buttonChosen.classList.remove("clickable");
        buttonChosen.classList.add("not-clickable");
        buttonNotChosen.disabled = false;
        buttonNotChosen.classList.remove("not-clickable");
        buttonNotChosen.classList.add("clickable");
        priceChosen.textContent = "+" + price + "Ft"
        changePrice(price);
      };
    }

    function changePrice(price){
      let plusPrice = parseInt(price);
      finalPrice += plusPrice;
      finalPriceCell.textContent = "Végösszeg: " + finalPrice + "Ft";
    }
    
    window.selectFunction = selectFunction;
    window.changePrice = changePrice;

})

