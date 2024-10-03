import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

<<<<<<< HEAD

=======
document.addEventListener("DOMContentLoaded", ()=>{
>>>>>>> 78c4977 (asd)


    const tbody = document.getElementById("tbody");
    getJson();
    
    function getJson(){
        fetch("")
        .then((response) => response.json())
        .then((json) => tbodyCreate(json));
    }


    function tbodyCreate(elements){
        let element = "";

        elements.forEach(item => {
            let items = `
            
             <tr >
              <td class="text-start">
                <button><img src="${}"> </button>
              </td>
              <td class="text-start">
                 <button><img src="${}"> </button>
              </td>
              <td class="text-end">
                ${}
              </td>
              <td class="text-center">
                <button>X</button>
              </td>
            </tr>
            `

            element += item;
        });

        tbody.innerHTML += element;
        
    }


})

