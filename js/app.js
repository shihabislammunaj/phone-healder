 const loadPhones=async(seacchText,dataLimit)=>{
      const url=`https://openapi.programming-hero.com/api/phones?search=${seacchText}`
      const res=await fetch(url);
      const data= await res.json();
      displayPhones(data.data,dataLimit);
    }

   const displayPhones= (Phones,dataLimit)=>{
    // console.log(Phones);
      const phonesContainer=document.getElementById('phone-container');
  phonesContainer.textContent= '';
  const  showall =document.getElementById('show-all');
     if(dataLimit && Phones.length >10){
      Phones=Phones.slice(0, 10);
     showall.classList.remove('d-none')
      }
else{
  showall.classList.add('d-none')
}
      const noPhone=document.getElementById('no-found-message');
     if(Phones.length===0){
        noPhone.classList.remove('d-none')
      }
      else{
        noPhone.classList.add('d-none');
   }
Phones.forEach(Phones =>{
       const PhoneDiv=document.createElement('div');
       PhoneDiv.classList.add('col')
       PhoneDiv.innerHTML= `
       <div class="card p-4">
       <img src="${Phones.image}" class="card-img-top" alt="...">
       <div class="card-body">
    <h5 class="card-title">${Phones.phone_name}</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <button onclick="loadPhonsDetlas('${'Phone.slug'}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetalsModal">Show-Detals</button>

   
 
     </div>
   </div>
     `
     phonesContainer.appendChild(PhoneDiv)
     
   });
        togleSpinner(false)
   }
 

// handle seacch button click



const processSearh=(dataLimit)=>{
  togleSpinner(true)
  const searchField=document.getElementById('seacch-field');
     const seacchText=searchField.value;
     loadPhones(seacchText,dataLimit)
}
   document.getElementById('btn-search').addEventListener('click',function(){
    processSearh(10);
   })    
   document.getElementById('seacch-field').addEventListener('keypress',function(e){
    if(e.key ==='Enter'){
      processSearh(10);
    }
   })
   const togleSpinner=isLoading =>{
    const loaderSectin=document.getElementById('loader');
    if(isLoading){
      loaderSectin.classList.remove('d-none')
    }
    else{
      loaderSectin.classList.add('d-none')
    }
   }

document.getElementById('btn-show-all').addEventListener('click',function(){
        processSearh();
});



const loadPhonsDetlas=async id=>{
   const url=`https://openapi.programming-hero.com/api/phone/${id}`;
  const res=await fetch(url);
  const data =await res.json();
  displayPhonesDetalis(data.data)
  }
 
  const displayPhonesDetalis=Phones=>{
 console.log(Phones);
 const modatTital=document.getElementById('phoneDetalsModalLabel');
 modatTital.innerText=Phones.name;
  }

    loadPhones('apple');