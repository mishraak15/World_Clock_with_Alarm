let countries = [
    { name: "Afghanistan", capital: "Kabul", continent: "Asia" },
    { name: "Aland Islands", capital: "Mariehamn", continent: "Europe" },
    { name: "Albania", capital: "Tirana", continent: "Europe" },
    { name: "Algeria", capital: "Algiers", continent: "Africa" },
    { name: "American Samoa", capital: "Pago Pago", continent: "Oceania" },
    { name: "Andorra", capital: "Andorra la Vella", continent: "Europe" },
    { name: "Angola", capital: "Luanda", continent: "Africa" },
    { name: "Anguilla", capital: "The Valley", continent: "North America" },
    { name: "Antarctica", capital: "Antarctica", continent: "Antarctica" },
    { name: "Antigua and Barbuda", capital: "St. John's", continent: "North America" },
    { name: "Argentina", capital: "Buenos Aires", continent: "South America" },
    { name: "Armenia", capital: "Yerevan", continent: "Asia" },
    { name: "Aruba", capital: "Oranjestad", continent: "North America" },
    { name: "Australia", capital: "Canberra", continent: "Oceania" },
    { name: "Austria", capital: "Vienna", continent: "Europe" },
    { name: "Azerbaijan", capital: "Baku", continent: "Asia" },
    { name: "Bahamas", capital: "Nassau", continent: "North America" },
    { name: "Bahrain", capital: "Manama", continent: "Asia" },
    { name: "Bangladesh", capital: "Dhaka", continent: "Asia" },
    { name: "Barbados", capital: "Bridgetown", continent: "North America" },
    { name: "Belarus", capital: "Minsk", continent: "Europe" },
    { name: "Belgium", capital: "Brussels", continent: "Europe" },
    { name: "Belize", capital: "Belmopan", continent: "North America" },
    { name: "Benin", capital: "Porto-Novo", continent: "Africa" },
    { name: "Bermuda", capital: "Hamilton", continent: "North America" },
    { name: "Bhutan", capital: "Thimphu", continent: "Asia" },
    { name: "Bolivia", capital: "Sucre", continent: "South America" },
    { name: "Bonaire, Sint Eustatius and Saba", capital: "Kralendijk", continent: "North America" },
    { name: "Bosnia and Herzegovina", capital: "Sarajevo", continent: "Europe" },
    { name: "Botswana", capital: "Gaborone", continent: "Africa" },
    { name: "Bouvet Island", capital: "", continent: "Antarctica" },
    { name: "Brazil", capital: "Brasilia", continent: "South America" },
    { name: "British Indian Ocean Territory", capital: "Diego Garcia", continent: "Asia" },
    { name: "Brunei Darussalam", capital: "Bandar Seri Begawan", continent: "Asia" },
    { name: "Bulgaria", capital: "Sofia", continent: "Europe" },
    { name: "Burkina Faso", capital: "Ouagadougou", continent: "Africa" },
    { name: "Burundi", capital: "Bujumbura", continent: "Africa" },
    { name: "Cambodia", capital: "Phnom Penh", continent: "Asia" },
    { name: "Cameroon", capital: "Yaounde", continent: "Africa" },
    { name: "Canada", capital: "Ottawa", continent: "North America" },
    { name: "Cape Verde", capital: "Praia", continent: "Africa" },
    { name: "Cayman Islands", capital: "George Town", continent: "North America" },
    { name: "Central African Republic", capital: "Bangui", continent: "Africa" },
    { name: "Chad", capital: "N'Djamena", continent: "Africa" },
    { name: "Chile", capital: "Santiago", continent: "South America" },
    { name: "China", capital: "Beijing", continent: "Asia" },
    { name: "Christmas Island", capital: "Flying Fish Cove", continent: "Asia" },
    { name: "Cocos (Keeling) Islands", capital: "West Island", continent: "Asia" },
    { name: "Colombia", capital: "Bogota", continent: "South America" },
    { name: "Comoros", capital: "Moroni", continent: "Africa" },
    { name: "Congo", capital: "Brazzaville", continent: "Africa" },
    { name: "Democratic Republic of the Congo", capital: "Kinshasa", continent: "Africa" },
    { name: "Cook Islands", capital: "Avarua", continent: "Oceania" },
    { name: "Costa Rica", capital: "San Jose", continent: "North America" },
    { name: "Cote D'Ivoire", capital: "Yamoussoukro", continent: "Africa" },
    { name: "Croatia", capital: "Zagreb", continent: "Europe" },
    { name: "Cuba", capital: "Havana", continent: "North America" },
    { name: "Curacao", capital: "Willemstad", continent: "North America" },
    { name: "Cyprus", capital: "Nicosia", continent: "Asia" },
    { name: "Czech Republic", capital: "Prague", continent: "Europe" },
    { name: "Denmark", capital: "Copenhagen", continent: "Europe" },
    { name: "Djibouti", capital: "Djibouti", continent: "Africa" },
    { name: "Dominica", capital: "Roseau", continent: "North America" },
    { name: "Dominican Republic", capital: "Santo Domingo", continent: "North America" },
    { name: "Ecuador", capital: "Quito", continent: "South America" },
    { name: "Egypt", capital: "Cairo", continent: "Africa" },
    { name: "El Salvador", capital: "San Salvador", continent: "North America" },
    { name: "Equatorial Guinea", capital: "Malabo", continent: "Africa" },
    { name: "Eritrea", capital: "Asmara", continent: "Africa" },
    { name: "Estonia", capital: "Tallinn", continent: "Europe" },
    { name: "Ethiopia", capital: "Addis Ababa", continent: "Africa" },
    { name: "Falkland Islands (Malvinas)", capital: "Stanley", continent: "South America" },
    { name: "Faroe Islands", capital: "Torshavn", continent: "Europe" },
    { name: "Fiji", capital: "Suva", continent: "Oceania" },
    { name: "Finland", capital: "Helsinki", continent: "Europe" },
    { name: "France", capital: "Paris", continent: "Europe" },
    { name: "French Guiana", capital: "Cayenne", continent: "South America" },
    { name: "French Polynesia", capital: "Papeete", continent: "Oceania" },
    { name: "French Southern Territories", capital: "Port-aux-Francais", continent: "Antarctica" },
    { name: "Gabon", capital: "Libreville", continent: "Africa" },
    { name: "Gambia", capital: "Banjul", continent: "Africa" },
    { name: "Georgia", capital: "Tbilisi", continent: "Asia" },
    { name: "Germany", capital: "Berlin", continent: "Europe" },
    { name: "Ghana", capital: "Accra", continent: "Africa" },
    { name: "Gibraltar", capital: "Gibraltar", continent: "Europe" },
    { name: "Greece", capital: "Athens", continent: "Europe" },
    { name: "Greenland", capital: "Nuuk", continent: "North America" },
    { name: "Grenada", capital: "St. George's", continent: "North America" },
    { name: "Guadeloupe", capital: "Basse-Terre", continent: "North America" },
    { name: "Guam", capital: "Hagatna", continent: "Oceania" },
    { name: "Guatemala", capital: "Guatemala City", continent: "North America" },
    { name: "Guernsey", capital: "St Peter Port", continent: "Europe" },
    { name: "Guinea", capital: "Conakry", continent: "Africa" },
    { name: "Guinea-Bissau", capital: "Bissau", continent: "Africa" },
    { name: "Guyana", capital: "Georgetown", continent: "South America" },
    { name: "Haiti", capital: "Port-au-Prince", continent: "North America" },
    { name: "Heard Island and McDonald Islands", capital: "", continent: "Antarctica" },
    { name: "Holy See (Vatican City State)", capital: "Vatican City", continent: "Europe" },
    { name: "Honduras", capital: "Tegucigalpa", continent: "North America" },
    { name: "HongKong", capital: "Hong Kong", continent: "Asia" },
    { name: "Hungary", capital: "Budapest", continent: "Europe" },
    { name: "Iceland", capital: "Reykjavik", continent: "Europe" },
    { name: "India", capital: "New Delhi", continent: "Asia" },
    { name: "Indonesia", capital: "Jakarta", continent: "Asia" },
    { name: "Iran", capital: "Tehran", continent: "Asia" },
    { name: "Iraq", capital: "Baghdad", continent: "Asia" },
    { name: "Ireland", capital: "Dublin", continent: "Europe" },
    { name: "Isle of Man", capital: "Douglas, Isle of Man", continent: "Europe" },
    { name: "Israel", capital: "Jerusalem", continent: "Asia" },
    { name: "Italy", capital: "Rome", continent: "Europe" },
    { name: "Jamaica", capital: "Kingston", continent: "North America" },
    { name: "Japan", capital: "Tokyo", continent: "Asia" },
    { name: "Jersey", capital: "Saint Helier", continent: "Europe" },
    { name: "Jordan", capital: "Amman", continent: "Asia" },
    { name: "Kazakhstan", capital: "Astana", continent: "Asia" },
    { name: "Kenya", capital: "Nairobi", continent: "Africa" },
    { name: "Kiribati", capital: "Tarawa", continent: "Oceania" },
    { name: "Korea, Democratic People's Republic of", capital: "Pyongyang", continent: "Asia" },
    { name: "Korea, Republic of", capital: "Seoul", continent: "Asia" },
    { name: "Kosovo", capital: "Pristina", continent: "Europe" },
    { name: "Kuwait", capital: "Kuwait City", continent: "Asia" },
    { name: "Kyrgyzstan", capital: "Bishkek", continent: "Asia" },
    { name: "Lao People's Democratic Republic", capital: "Vientiane", continent: "Asia" },
    { name: "Latvia", capital: "Riga", continent: "Europe" },
    { name: "Lebanon", capital: "Beirut", continent: "Asia" },
    { name: "Lesotho", capital: "Maseru", continent: "Africa" },
    { name: "Liberia", capital: "Monrovia", continent: "Africa" },
    { name: "Libyan Arab Jamahiriya", capital: "Tripolis", continent: "Africa" },
    { name: "Liechtenstein", capital: "Vaduz", continent: "Europe" },
    { name: "Lithuania", capital: "Vilnius", continent: "Europe" },
    { name: "Luxembourg", capital: "Luxembourg", continent: "Europe" },
    { name: "Macao", capital: "Macao", continent: "Asia" },
    { name: "Macedonia, the Former Yugoslav Republic of", capital: "Skopje", continent: "Europe" },
    { name: "Madagascar", capital: "Antananarivo", continent: "Africa" },
    { name: "Malawi", capital: "Lilongwe", continent: "Africa" },
    { name: "Malaysia", capital: "Kuala Lumpur", continent: "Asia" },
    { name: "Maldives", capital: "Male", continent: "Asia" },
    { name: "Mali", capital: "Bamako", continent: "Africa" },
    { name: "Malta", capital: "Valletta", continent: "Europe" },
    { name: "Marshall Islands", capital: "Majuro", continent: "Oceania" },
    { name: "Martinique", capital: "Fort-de-France", continent: "North America" },
    { name: "Mauritania", capital: "Nouakchott", continent: "Africa" },
    { name: "Mauritius", capital: "Port Louis", continent: "Africa" },
    { name: "Mayotte", capital: "Mamoudzou", continent: "Africa" },
    { name: "Mexico", capital: "Mexico City", continent: "North America" },
    { name: "Micronesia, Federated States of", capital: "Palikir", continent: "Oceania" },
    { name: "Moldova, Republic of", capital: "Chisinau", continent: "Europe" },
    { name: "Monaco", capital: "Monaco", continent: "Europe" },
    { name: "Mongolia", capital: "Ulan Bator", continent: "Asia" },
    { name: "Montenegro", capital: "Podgorica", continent: "Europe" },
    { name: "Montserrat", capital: "Plymouth", continent: "North America" },
    { name: "Morocco", capital: "Rabat", continent: "Africa" },
    { name: "Mozambique", capital: "Maputo", continent: "Africa" },
    { name: "Myanmar", capital: "Nay Pyi Taw", continent: "Asia" },
    { name: "Namibia", capital: "Windhoek", continent: "Africa" },
    { name: "Nauru", capital: "Yaren", continent: "Oceania" },
    { name: "Nepal", capital: "Kathmandu", continent: "Asia" },
    { name: "Netherlands", capital: "Amsterdam", continent: "Europe" },
    { name: "Netherlands Antilles", capital: "Willemstad", continent: "North America" },
    { name: "New Caledonia", capital: "Noumea", continent: "Oceania" },
    { name: "New Zealand", capital: "Wellington", continent: "Oceania" },
    { name: "Nicaragua", capital: "Managua", continent: "North America" },
    { name: "Niger", capital: "Niamey", continent: "Africa" },
    { name: "Nigeria", capital: "Abuja", continent: "Africa" },
    { name: "Niue", capital: "Alofi", continent: "Oceania" },
    { name: "Norfolk Island", capital: "Kingston", continent: "Oceania" },
    { name: "Northern Mariana Islands", capital: "Saipan", continent: "Oceania" },
    { name: "Norway", capital: "Oslo", continent: "Europe" },
    { name: "Oman", capital: "Muscat", continent: "Asia" },
    { name: "Pakistan", capital: "Islamabad", continent: "Asia" },
    { name: "Palau", capital: "Melekeok", continent: "Oceania" },
    { name: "Palestinian Territory, Occupied", capital: "East Jerusalem", continent: "Asia" },
    { name: "Panama", capital: "Panama City", continent: "North America" },
    { name: "Papua New Guinea", capital: "Port Moresby", continent: "Oceania" },
    { name: "Paraguay", capital: "Asuncion", continent: "South America" },
    { name: "Peru", capital: "Lima", continent: "South America" },
    { name: "Philippines", capital: "Manila", continent: "Asia" },
    { name: "Pitcairn", capital: "Adamstown", continent: "Oceania" },
    { name: "Poland", capital: "Warsaw", continent: "Europe" },
    { name: "Portugal", capital: "Lisbon", continent: "Europe" },
    { name: "Puerto Rico", capital: "San Juan", continent: "North America" },
    { name: "Qatar", capital: "Doha", continent: "Asia" },
    { name: "Reunion", capital: "Saint-Denis", continent: "Africa" },
    { name: "Romania", capital: "Bucharest", continent: "Europe" },
    { name: "Russia", capital: "Moscow", continent: "Asia" },
    { name: "Rwanda", capital: "Kigali", continent: "Africa" },
    { name: "Saint Barthelemy", capital: "Gustavia", continent: "North America" },
    { name: "Saint Helena", capital: "Jamestown", continent: "Africa" },
    { name: "Saint Kitts and Nevis", capital: "Basseterre", continent: "North America" },
    { name: "Saint Lucia", capital: "Castries", continent: "North America" },
    { name: "Saint Martin", capital: "Marigot", continent: "North America" },
    { name: "Saint Pierre and Miquelon", capital: "Saint-Pierre", continent: "North America" },
    { name: "Saint Vincent and the Grenadines", capital: "Kingstown", continent: "North America" },
    { name: "Samoa", capital: "Apia", continent: "Oceania" },
    { name: "San Marino", capital: "San Marino", continent: "Europe" },
    { name: "Sao Tome and Principe", capital: "Sao Tome", continent: "Africa" },
    { name: "Saudi Arabia", capital: "Riyadh", continent: "Asia" },
    { name: "Senegal", capital: "Dakar", continent: "Africa" },
    { name: "Serbia", capital: "Belgrade", continent: "Europe" },
    { name: "Serbia and Montenegro", capital: "Belgrade", continent: "Europe" },
    { name: "Seychelles", capital: "Victoria", continent: "Africa" },
    { name: "Sierra Leone", capital: "Freetown", continent: "Africa" },
    { name: "Singapore", capital: "Singapur", continent: "Asia" },
    { name: "St Martin", capital: "Philipsburg", continent: "North America" },
    { name: "Slovakia", capital: "Bratislava", continent: "Europe" },
    { name: "Slovenia", capital: "Ljubljana", continent: "Europe" },
    { name: "Solomon Islands", capital: "Honiara", continent: "Oceania" },
    { name: "Somalia", capital: "Mogadishu", continent: "Africa" },
    { name: "South Africa", capital: "Pretoria", continent: "Africa" },
    { name: "South Georgia and the South Sandwich Islands", capital: "Grytviken", continent: "Antarctica" },
    { name: "South Sudan", capital: "Juba", continent: "Africa" },
    { name: "Spain", capital: "Madrid", continent: "Europe" },
    { name: "Sri Lanka", capital: "Colombo", continent: "Asia" },
    { name: "Sudan", capital: "Khartoum", continent: "Africa" },
    { name: "Suriname", capital: "Paramaribo", continent: "South America" },
    { name: "Svalbard and Jan Mayen", capital: "Longyearbyen", continent: "Europe" },
    { name: "Swaziland", capital: "Mbabane", continent: "Africa" },
    { name: "Sweden", capital: "Stockholm", continent: "Europe" },
    { name: "Switzerland", capital: "Berne", continent: "Europe" },
    { name: "Syrian Arab Republic", capital: "Damascus", continent: "Asia" },
    { name: "Taiwan, Province of China", capital: "Taipei", continent: "Asia" },
    { name: "Tajikistan", capital: "Dushanbe", continent: "Asia" },
    { name: "Tanzania, United Republic of", capital: "Dodoma", continent: "Africa" },
    { name: "Thailand", capital: "Bangkok", continent: "Asia" },
    { name: "Timor-Leste", capital: "Dili", continent: "Asia" },
    { name: "Togo", capital: "Lome", continent: "Africa" },
    { name: "Tokelau", capital: "", continent: "Oceania" },
    { name: "Tonga", capital: "Nuku'alofa", continent: "Oceania" },
    { name: "Trinidad and Tobago", capital: "Port of Spain", continent: "North America" },
    { name: "Tunisia", capital: "Tunis", continent: "Africa" },
    { name: "Turkey", capital: "Ankara", continent: "Asia" },
    { name: "Turkmenistan", capital: "Ashgabat", continent: "Asia" },
    { name: "Turks and Caicos Islands", capital: "Cockburn Town", continent: "North America" },
    { name: "Tuvalu", capital: "Funafuti", continent: "Oceania" },
    { name: "Uganda", capital: "Kampala", continent: "Africa" },
    { name: "Ukraine", capital: "Kiev", continent: "Europe" },
    { name: "United Arab Emirates", capital: "Abu Dhabi", continent: "Asia" },
    { name: "United Kingdom", capital: "London", continent: "Europe" },
    { name: "United States of America", capital: "Washington", continent: "North America" },
    { name: "United States Minor Outlying Islands", capital: "", continent: "North America" },
    { name: "Uruguay", capital: "Montevideo", continent: "South America" },
    { name: "Uzbekistan", capital: "Tashkent", continent: "Asia" },
    { name: "Vanuatu", capital: "Port Vila", continent: "Oceania" },
    { name: "Venezuela", capital: "Caracas", continent: "South America" },
    { name: "Viet Nam", capital: "Hanoi", continent: "Asia" },
    { name: "Virgin Islands, British", capital: "Road Town", continent: "North America" },
    { name: "Virgin Islands, U.s.", capital: "Charlotte Amalie", continent: "North America" },
    { name: "Wallis and Futuna", capital: "Mata Utu", continent: "Oceania" },
    { name: "Western Sahara", capital: "El-Aaiun", continent: "Africa" },
    { name: "Yemen", capital: "Sanaa", continent: "Asia" },
    { name: "Zambia", capital: "Lusaka", continent: "Africa" },
    { name: "Zimbabwe", capital: "Harare", continent: "Africa" }
];




let opt = document.querySelectorAll('.opt');
let countryName = document.querySelector('.country_name');
let inputCountry = document.querySelector('.input_country');
let capital = document.querySelector('.capital');
let continent = document.querySelector('.continent');
let v = document.querySelector('.v');
let inv = document.querySelector('.inv');
let countryLink = document.getElementById('country_link');
let submitbtn = document.getElementById('submitbtn');
let countryFlag = document.getElementById('country_flag');
let timeBox=document.querySelector('.time_box');
let dateBox=document.querySelector('.date_box');
let date = new Date();

changeTimezone("Asia");

Array.from(opt).forEach(e => {
    e.addEventListener('click', () => {
        //    console.log(e.textContent);
        inputCountry.value = e.textContent;
        submitbtn.click();
    });
});

let correct = 0;
let m;
let Name;
let NAME;
let M;
let cont;
let cap;

submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    Array.from(countries).forEach(e => {
        Name = e.name;
        let n = Name.toUpperCase();
        let i = inputCountry.value;
        m = i.toUpperCase();

        if (m == n) {
            cont = e.continent;
            cap = e.capital;
            M = m;
            NAME = Name;
            correct = 1;
        }
    });

    if (inputCountry.value == "" || correct == 0) {
        v.classList.add('d-none');
        inv.classList.remove('d-none');
        inputCountry.classList.remove('is-valid');
        inputCountry.classList.add('is-invalid');
    }
    else if (correct == 1) {
        let x = M.toLowerCase();
        x = x.replaceAll(" ", "-");
        inv.classList.add('d-none');
        v.classList.remove('d-none');
        inputCountry.classList.remove('is-invalid');
        inputCountry.classList.add('is-valid');
        countryName.innerHTML = `${NAME}`;
        capital.innerHTML = `Capital: ${cap}`;
        continent.innerHTML = `Continent: ${cont}`;
        countryFlag.src = `https://cdn.countryflags.com/thumbs/${x}/flag-800.png`;
        countryLink.href = `https://en.wikipedia.org/wiki/${NAME}`;
        correct = 0;
        setInterval(() => {
            changeTimezone(cont);
        }, 1000);
    }

});
// America/Chicago
function changeTimezone(cont) {
    setInterval(() => {
        
    }, 1000);
    let nt="";
    let nd="";
    let chngTime;
    switch (cont) {
        case "Africa":
            date=new Date();
            chngTime =
                date.toLocaleString("en-US", {
                    // timeZone: `${cont}/${NAME}`;
                    timeZone:"Africa/Nairobi"
                });
            
            break;

        case "North America":
            date=new Date();
            chngTime =
                date.toLocaleString("en-US", {
                    // timeZone: `${cont}/${NAME}`;
                    timeZone:"America/Los_Angeles"
                });
            
            break;

        case "South America":
            date=new Date();
            chngTime =
                date.toLocaleString("en-US", {
                    // timeZone: `${cont}/${NAME}`;
                    timeZone:"America/Argentina/San_Juan"
                });
            
            break;

        case "Oceania":
            date=new Date();
            chngTime =
                date.toLocaleString("en-US", {
                    // timeZone: `${cont}/${NAME}`;
                    timeZone:"Australia/Melbourne"
                });
            break;

        case "Europe":
            date=new Date();
            chngTime =
                date.toLocaleString("en-US", {
                    // timeZone: `${cont}/${NAME}`;
                    timeZone:"Europe/Paris"
                });
            break;

        case "Asia":
            date=new Date();
            chngTime =
                date.toLocaleString("en-US", {
                    // timeZone: `${cont}/${NAME}`;
                    timeZone:"Asia/Kolkata"
                });
            break;
    
        default:
            date=new Date();
            chngTime =
                date.toLocaleString("en-US", {
                    // timeZone: `${cont}/${NAME}`;
                    timeZone:"Asia/Kolkata"
                });
            break;
    }
    // console.log(date);
    for (let i = 0; i < 9; i++) {
         nd+=chngTime[i];  
    }
    for (let i = 10; i < chngTime.length; i++) {
         nt+=chngTime[i];  
    }
    timeBox.innerHTML=nt;
    dateBox.innerHTML=nd;  
}

let alarm =document.querySelector(".input_alarm");
let alarmbtn =document.getElementById("alarmbtn");
let alarmMusic=new Audio('./assets/Bella Ciao(PagalWorld.com.se).mp3');
alarmMusic.loop=true;
let q=0;
alarmbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(alarmbtn.innerText=="Set"){
        alarmbtn.innerText="Reset";
        q=0;
        alarmMusic.currentTime="0";
        // console.log("Alarm Time is set at: "+ alarm.value);
    }
    else{
        alarmMusic.pause();
        alarmbtn.innerText="Set";
    }
    setInterval(() => {
        date=new Date();
        let h=date.getHours();
        let m=date.getMinutes();
        if(h<=9){
            h="0"+h;
        }
        if(m<=9){
            m="0"+m;
        }
        let t= `${h}:${m}`;
        // console.log("Current time is: "+t);
        if(t==alarm.value && q==0){
            alarmMusic.play();
            q=1;
         }
    }, 1000);
     
});
 
