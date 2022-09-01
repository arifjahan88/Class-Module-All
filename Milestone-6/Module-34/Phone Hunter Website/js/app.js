const loadphones = async(searchtext, datalimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchtext}`;
    const res = await fetch(url);
    const data = await res.json();
    displayphones(data.data, datalimit);
}

const displayphones = (phones, datalimit) =>{
    const phonecontainer = document.getElementById('phone-container');
    phonecontainer.textContent = '';

    // Display No phone Found
    const nophone = document.getElementById('no-phone-massage');
    if(phones.length === 0){
        nophone.classList.remove('d-none');
    }
    else{
        nophone.classList.add('d-none');
    }

    //Display 10 phones only
    const showall = document.getElementById('show-all');
    if(datalimit && phones.length > 10){
        phones = phones.slice(0,10);
        showall.classList.remove('d-none');
    }
    else{
        showall.classList.add('d-none');
    }

    phones.forEach(phone =>{
        const phonediv = document.createElement('div');
        phonediv.classList.add('col');
        phonediv.innerHTML = `
        <div class="card p-3 shadow-lg mb-5 bg-body rounded">
        <img src="${phone.image}" class="card-img-top w-50" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <button onclick=loadphonedetails('${phone.slug}') type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phonedetailsmodal">Details</button>
        </div>
      </div>
        `
        phonecontainer.appendChild(phonediv);
    })
    //stop loader
    togglespinner(false);
} 

const searchingcommand = (datalimit) =>{
    togglespinner(true);
    const searchfield = document.getElementById('search-field');
    const searchtext = searchfield.value;
    loadphones(searchtext, datalimit);
}

document.getElementById('btn-search').addEventListener('click', function(){
    //start Loader
    searchingcommand(10);
})

// button search key handler
document.getElementById('search-field').addEventListener('keypress', function (press) {
    if (press.key === 'Enter') {
        searchingcommand(10);
    }
});

const togglespinner = isloading =>{
    const loader = document.getElementById('loader');
    if(isloading){
        loader.classList.remove('d-none');
    }
    else{
        loader.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function(){
    searchingcommand();
})

const loadphonedetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayphonedetails(data.data);
}

const displayphonedetails = phone =>{
    const modaltitle = document.getElementById('phonedetailsmodalLabel');
    modaltitle.innerText = phone.name;
    const modal_body = document.getElementById('modalbody');
    modal_body.innerHTML = `
        <p>Unique ID: ${phone.slug}</p>
        <p>Chipset: ${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet : 'No Chipset Found'}</p>
        <p>Display ${phone.mainFeatures ? phone.mainFeatures.displaySize : 'No Display Found'}</p>
        <p>Memory: ${phone.mainFeatures ? phone.mainFeatures.memory : 'No Memory Found'}</p>
    `;
}

// loadphones('apple');