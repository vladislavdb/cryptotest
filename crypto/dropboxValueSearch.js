let dropdownInpute = document.querySelectorAll('.dropdown-input-hidden');
let dropdownListItemName = document.querySelectorAll('.dropdown-list-item-name');
let dropdownListItemIcon = document.querySelectorAll('.dropdown-list-item-icon');
let dropdownListItemDiscription = document.querySelectorAll('.dropdown-list-item-description');

let textSelectt = document.querySelectorAll('.select-1-text');
let iconSelect = document.querySelectorAll('.select1-icon');

async function fetchObj()
    {
        const response = await fetch('https://api.changenow.io/v1/currencies?active=true');
        const data = await response.json();
        return data;
    }

    fetchObj().then(data => {

        // изначальные дефолтные значения
        function setDefault()
        {
            for (let i = 0; i < 6; i++)
            {
                dropdownListItemName[i].textContent = data[i].ticker.toUpperCase();
                dropdownListItemDiscription[i].textContent = data[i].name;
                dropdownListItemIcon[i].src = data[i].image;
            }
        }

        setDefault();

        for (let i = 0; i < 2; i++)
        {
            textSelectt[i].textContent = data[i].ticker.toUpperCase();
            iconSelect[i].src = data[i].image;
        }
        
        // поиск пока кастыльной
        
        for (let i = 0; i < 2; i++)
        {
            dropdownInpute[i].addEventListener('keyup', function(evt)
            {
                let match = [];
                let arr = [];
                let search = dropdownInpute[i].value.toLowerCase();

                data.forEach(function(crypto){
                
                    if (search === crypto.ticker.toLowerCase())
                    {
                        match.push(crypto)
                    }
                    if(crypto.ticker.toLowerCase().startsWith(search))
                    {
                        arr.push(crypto)  
                    }

                });
            
                if (i===0)
                {
                    dropdownListItemName[0].textContent = arr[0].ticker.toUpperCase();
                    dropdownListItemDiscription[0].textContent = arr[0].name;
                    dropdownListItemIcon[0].src = arr[0].image;

                    dropdownListItemName[1].textContent = arr[1].ticker.toUpperCase();
                    dropdownListItemDiscription[1].textContent = arr[1].name;
                    dropdownListItemIcon[1].src = arr[1].image;

                    dropdownListItemName[2].textContent = arr[2].ticker.toUpperCase();
                    dropdownListItemDiscription[2].textContent = arr[2].name;
                    dropdownListItemIcon[2].src = arr[2].image;
                }
                if (i===1)
                {
                    dropdownListItemName[3].textContent = arr[0].ticker.toUpperCase();
                    dropdownListItemDiscription[3].textContent = arr[0].name;
                    dropdownListItemIcon[3].src = arr[0].image;

                    dropdownListItemName[4].textContent = arr[1].ticker.toUpperCase();
                    dropdownListItemDiscription[4].textContent = arr[1].name;
                    dropdownListItemIcon[4].src = arr[1].image;

                    dropdownListItemName[5].textContent = arr[2].ticker.toUpperCase();
                    dropdownListItemDiscription[5].textContent = arr[2].name;
                    dropdownListItemIcon[5].src = arr[2].image;
                }
            

                // скидывает в дефолтные значения если в инпуте ниче нет
                if(search.length === 0)
                {
                    setDefault();
                }

                 // Cрабывает когда значение тикера абсолютно одинаковое
                if(match.length === 1 && i === 0)
                {
                    dropdownListItemName[0].textContent = match[0].ticker.toUpperCase();
                    dropdownListItemDiscription[0].textContent = match[0].name;
                    dropdownListItemIcon[0].src = match[0].image;
                }
                if(match.length === 1 && i === 1)
                {
                    dropdownListItemName[3].textContent = match[0].ticker.toUpperCase();
                    dropdownListItemDiscription[3].textContent = match[0].name;
                    dropdownListItemIcon[3].src = match[0].image;
                }
            });
        }
        document.onwheel = function()
        {
            console.log(arr);
        }
        


    });