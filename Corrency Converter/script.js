// Project Created by Malav Shah Ig:- @lav._.coder
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
const dropDownFrom = document.getElementById("dropdownfrom");
const dropDownTo = document.getElementById("dropdownto");
const result = document.getElementById("result");

// putting currencies codes into the options
currenciseList.forEach(currency => {
    const opt = document.createElement("option");
    opt.value = currency;
    opt.text = currency;
    dropDownFrom.add(opt);
});

// repeat for to
currenciseList.forEach(currency => {
    const opt = document.createElement("option");
    opt.value = currency;
    opt.text = currency;
    dropDownTo.add(opt);
});

// default Values
dropDownFrom.value = "INR";
dropDownTo.value = "USD";

// Converting Function
let convertedCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = dropDownFrom.value;
    const toCurrency = dropDownTo.value;

    if(amount.length != 0) {
        fetch(api)
            .then((res) => res.json())
            // .then((data) => console.log(data));
            .then((data) => {
                let fromexchnagerate = data.conversion_rates[fromCurrency];
                let toexchnagerate = data.conversion_rates[toCurrency];
                console.log(fromexchnagerate);
                const convertedAmt = (amount / fromexchnagerate) * toexchnagerate;
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmt.toFixed(2)} ${toCurrency}`;
            });
    }
    else {
        alert("Enter Amount!");
    }
}
document.querySelector("#calulatebtn").addEventListener("click",convertedCurrency);
// Project Created by Malav Shah Ig:- @lav._.coder