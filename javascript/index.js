console.log("hello from index.js for index.html page for all offers");

const offerts=[
    {
        "index":1,
        "title":"item1",
        "category":"curatenie",
        "code":"112233",
        "um":"bucata",
        "nrum":"0",
        "imgOffer":"./images/photo1.jpg",
        "inventory":"no",
        "color":"#FFC107",
        "price_unitar":100,
        "descriere":"text1",
        "detalii":"detalii1",
        "producator":"producator1",
        "expira":"4.09.2023"
      },
      {
        "index":2,
        "title":"item2",
        "category":"curatenie",
        "code":"456",
        "um":"cutie",
        "nrum":"5",
        "imgOffer":"./images/photo2.jpg",
        "inventory":"yes",
        "color":"#198754",
        "price_unitar":450,
        "descriere":"text2",
        "detalii":"detalii2",
        "producator":"producator1",
        "expira":"01.2027"
      },
      {
        "index":3,
        "title":"item3",
        "category":"curatenie",
        "code":"789",
        "um":"cutie",
        "nrum":"3",
        "imgOffer":"./images/photo3.jpg",
        "inventory":"yes",
        "color":"#198754",
        "price_unitar":700,
        "descriere":"text3",
        "detalii":"detalii3",
        "producator":"producator1",
        "expira":"01.2027"
      },
      {
        "index":4,
        "title":"item4",
        "category":"curatenie",
        "code":"101112",
        "um":"cutie",
        "nrum":"0",
        "imgOffer":"./images/photo4.jpg",
        "inventory":"no",
        "color":"#FFC107",
        "price_unitar":670,
        "descriere":"text4",
        "detalii":"detalii4-blablabla",
        "producator":"producator1",
        "expira":"01.2027"
      },
      {
        "index":5,
        "title":"item5",
        "category":"saboti",
        "code":"1234",
        "um":"pereche",
        "nrum":"2",
        "imgOffer":"./images/photo5.jpg",
        "inventory":"yes",
        "color":"#198754",
        "price_unitar":180,
        "descriere":"text5",
        "detalii":"detalii5-lalala",
        "producator":"producator2",
        "expira":"03.2030"
      },
      {
        "index":6,
        "title":"item6",
        "category":"saboti",
        "code":"1235",
        "um":"pereche",
        "nrum":"0",
        "imgOffer":"./images/sky.jpg",
        "inventory":"no",
        "color":"#FFC107",
        "price_unitar":180,
        "descriere":"text6",
        "detalii":"detalii6",
        "producator":"producator2",
        "expira":"03.2030"
      },
      {
        "index":7,
        "title":"item7",
        "category":"consumabile",
        "code":"345",
        "um":"bucata",
        "nrum":"0",
        "imgOffer":"./images/photo7.jpg",
        "inventory":"no",
        "color":"#FFC107",
        "price_unitar":85,
        "descriere":"text7",
        "detalii":"detalii7",
        "producator":"producator3",
        "expira":"06.2025"
      },
      {
        "index":8,
        "title":"item8",
        "category":"consumabile",
        "code":"567",
        "um":"bucata",
        "nrum":"150",
        "imgOffer":"./images/photo8.jpg",
        "inventory":"yes",
        "color":"#198754",
        "price_unitar":85,
        "descriere":"text8",
        "detalii":"detalii8",
        "producator":"producator3",
        "expira":"06.2025"
      },
     
];

console.log("offerts length" , offerts.length);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

const offertsToShowAll=[...offerts];
console.log("offertsToShowAll.length is : " , offertsToShowAll.length);

//---
let offertsContent=``;


const showAllOffertsBtn=document.getElementById("showAllOffertsBtn");

console.log("showAllOffertsBtn" , showAllOffertsBtn);

showAllOffertsBtn.addEventListener("click" , function(event){

    event.preventDefault();
    console.log("you clicked the show all offerts btn");

    ///-----

    offertsToShowAll.forEach(showAllCallBackFunc);

    //-----
    function showAllCallBackFunc(offerItem){
        offertsContent +=`
        <div class="card" style="width: 35%">
            <img src="${offerItem.imgOffer}" class="card-img-top" alt="pill_item_img">
            <div class="card-body">
                <h5 class="card-title" style="color:${offerItem.color}">${offerItem.title}</h5>
                <h5 class="card-title">Pret: ${offerItem.price_unitar} RON</h5>
                <h5 class="card-title">Categorie: ${offerItem.category}</h5>
                <h5 class="card-title">Code: ${offerItem.code}</h5>
                <h5 class="card-title">Unitate de masura: ${offerItem.um}</h5>
                <h5 class="card-title">Numar: ${offerItem.nrum}</h5>
                <h5 class="card-title">Inventar: ${offerItem.inventory}</h5>
                <p class="card-title">Descriere: ${offerItem.descriere}</p>
                <p class="card-title">Detalii: ${offerItem.detalii}</p>
                <h5 class="card-title">Producator: ${offerItem.producator}</h5>
                <h5 class="card-title">Expira: ${offerItem.expira}</h5>
              
            </div>
        </div>
        `;
    }
    //---

    offerts_container.innerHTML=offertsContent;
    
    ///------

});





















