let textSelect = document.querySelectorAll('.select-1-text');
let dropdownListItem = document.querySelectorAll('.dropdown-list-item');
let inputLeft = document.querySelector('.input-1');
let inputRight = document.querySelectorAll('.input-1');

// изначальные дефолтные значения минимума и estimated BTC к ETH
let url = `https://api.changenow.io/v1/min-amount/btc_eth?api_key=c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`;
async function fetchMinimalAmount()
        {
            const response = await fetch(url);
            const data = await response.json();
            inputLeft.value = data.minAmount;
            const responseEstimated = await fetch(`https://api.changenow.io/v1/exchange-amount/${data.minAmount}/btc_eth/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`);
            const dataEstimated = await responseEstimated.json();
            inputRight[1].value = dataEstimated.estimatedAmount;
        }
        fetchMinimalAmount();


for (let i = 0; i < 3; i++) {
     dropdownListItem[i].addEventListener('mouseup', function()
     {
         errorAlert.classList.remove('button__error--active');
         url = (`https://api.changenow.io/v1/min-amount/${this.querySelector('.dropdown-list-item-name').textContent}_${textSelect[1].textContent}?api_key=c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`)
         console.log('Minimal = ', url);

        async function fetchMinimalAmount()
        {   try {
            const response = await fetch(url);
            const data = await response.json();
            inputLeft.value = data.minAmount;
            if(data.error)
            {
                errorAlert.classList.add('button__error--active');
            }
            const responseEstimated = await fetch(`https://api.changenow.io/v1/exchange-amount/${data.minAmount}/${dropdownListItem[i].querySelector('.dropdown-list-item-name').textContent}_${textSelect[1].textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`);
            console.log('Estimated = ', `https://api.changenow.io/v1/exchange-amount/${data.minAmount}/${dropdownListItem[i].querySelector('.dropdown-list-item-name').textContent}_${textSelect[1].textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`)
            const dataEstimated = await responseEstimated.json();
            if(dataEstimated.error)
            {
                errorAlert.classList.add('button__error--active');
            }
            inputRight[1].value = dataEstimated.estimatedAmount;
        } catch (e) {
          console.error(e);
        }
            
        }
        fetchMinimalAmount();
     });
}


for (let i = 3; i < 6; i++) {
    dropdownListItem[i].addEventListener('mouseup', function()
     {
         errorAlert.classList.remove('button__error--active');
         url = (`https://api.changenow.io/v1/min-amount/${textSelect[0].textContent}_${this.querySelector('.dropdown-list-item-name').textContent}?api_key=c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`)
         console.log('Minimal = ', url);

        async function fetchMinimalAmount()
        {
            const response = await fetch(url);
            const data = await response.json();
            inputLeft.value = data.minAmount;
            if(data.error)
            {
                errorAlert.classList.add('button__error--active');
            }
            const responseEstimated = await fetch(`https://api.changenow.io/v1/exchange-amount/${data.minAmount}/${textSelect[0].textContent}_${dropdownListItem[i].querySelector('.dropdown-list-item-name').textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`);
            console.log('Estimated = ', `https://api.changenow.io/v1/exchange-amount/${data.minAmount}/${textSelect[0].textContent}_${dropdownListItem[i].querySelector('.dropdown-list-item-name').textContent}/?c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`)
            const dataEstimated = await responseEstimated.json();
            if(dataEstimated.error)
            {
                errorAlert.classList.add('button__error--active');
            }
            inputRight[1].value = dataEstimated.estimatedAmount;
        }
        fetchMinimalAmount();
     });
}



 



    