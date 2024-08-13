const data = {
    "Country1": {
        "State1": ["District1", "District2"],
        "State2": ["District3", "District4"]
    },
    "Country2": {
        "State3": ["District5", "District6"],
        "State4": ["District7", "District8"]
    }
};

window.onload = function() {
    const countrySelect = document.getElementById('country');
    for (const country in data) {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    }
}

function updateStates() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    stateSelect.innerHTML = '<option value="">Select State</option>';
    districtSelect.innerHTML = '<option value="">Select District</option>';

    const selectedCountry = countrySelect.value;
    if (selectedCountry && data[selectedCountry]) {
        const states = data[selectedCountry];
        for (const state in states) {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        }
    }
}

function updateDistricts() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    districtSelect.innerHTML = '<option value="">Select District</option>';

    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;
    if (selectedCountry && selectedState && data[selectedCountry][selectedState]) {
        const districts = data[selectedCountry][selectedState];
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function addHobby() {
    const hobbyInput = document.getElementById('hobbyInput');
    const hobbyList = document.getElementById('hobbyList');

    if (hobbyInput.value.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = hobbyInput.value;
        hobbyList.appendChild(listItem);
        hobbyInput.value = "";
    }
}


function toggleList(type) {
    const gamesList = document.getElementById('gamesList');
    const moviesList = document.getElementById('moviesList');

    if (type === 'games') {
        gamesList.classList.toggle('hidden', !document.getElementById('playingGames').checked);
    } else if (type === 'movies') {
        moviesList.classList.toggle('hidden', !document.getElementById('watchingMovies').checked);
    }
}

function addItem(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (input.value.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = input.value;
        list.appendChild(listItem);
        input.value = "";
    }
}


function previewImage(event) {
    const photoPreview = document.getElementById('photoPreview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function previewSignature(event) {
    const signaturePreview = document.getElementById('signaturePreview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            signaturePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
