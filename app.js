const langBtn = document.getElementById("lang");
const cards = document.getElementById("cards")
const uz = document.getElementById("uz");
const ru = document.getElementById("ru");


const URL = "https://figma-api-1.vercel.app/api/data"

langBtn.addEventListener("click", () => {
 if (uz.className.includes("bg-white") ){
    ru.classList = "bg-white rounded-full px-2  py-1";
    uz.classList = "px-2 py-1";
}else{
    uz.classList = "bg-white rounded-full px-2  py-1";
    ru.classList = "px-2 py-1";
 }
  
});


document.addEventListener("DOMContentLoaded",(e)=>{
e.preventDefault()
getData()
})


async function getData() {
    try{
    const response = await fetch(`${URL}`)
    const data = await response.json()
    console.log(data);
    displayAdd(data)
    }catch(error){
        console.log(error);
    }
}

function displayAdd(data) {
    data.forEach(item => {
        cards.innerHTML += `
        <div class="flex gap-4 p-4 flex-col md:flex-row bg-gray-200 rounded-3xl">
                        <div class="w-full md:w-[40%]">
                            <img class="rounded-xl object-cover min-w-full min-h-full" src="${item.img}" alt="">
                        </div>
                        <div class="w-full flex gap-4 flex-col">
                            <h1 class="text-xl font-semibold">${item.title}</h1>
                            <h1 class="text-base">${item.description}</h1>
                            <h1 class="text-sm">${item.info}</h1>
                        </div>
                    </div>
        `
    });
}