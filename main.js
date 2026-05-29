const type_individual = document.getElementById("individual");
const type_business = document.getElementById("business");
const type_ira = document.getElementById("ira");
const type_trust = document.getElementById("trust");

const type_individual_description = document.getElementById("type-individual-description")
const type_business_description = document.getElementById("type-business-description");
const type_ira_description = document.getElementById("type-ira-description");
const type_trust_description = document.getElementById("type-trust-description");

const ic_info_individual = document.getElementById("ic-info-individual");
const ic_info_business = document.getElementById('ic-info-business');
const ic_info_ira = document.getElementById('ic-info-ira');
const ic_info_trust = document.getElementById('ic-info-trust');

const typeCheck = () => {
    if (type_individual.checked) {
        typeIndividualChecked();
    }
    if (type_business.checked) {
        typeBusinessChecked();
    }
    if (type_ira.checked) {
        typeIRAChecked();
    }
    if (type_trust.checked) {
        typeTrustChecked();
    }
}

const typeDefault = () => {
    type_individual_description.style.display = "none";
    type_business_description.style.display = "none";
    type_ira_description.style.display = "none";
    type_trust_description.style.display = "none";
}

const typeIndividualChecked = () => {
    type_individual_description.style.display = "block";
    type_business_description.style.display = "none";
    type_ira_description.style.display = "none";
    type_trust_description.style.display = "none";
}

const typeBusinessChecked = () => {
    type_individual_description.style.display = "none";
    type_business_description.style.display = "block";
    type_ira_description.style.display = "none";
    type_trust_description.style.display = "none";
}

const typeIRAChecked = () => {
    type_individual_description.style.display = "none";
    type_business_description.style.display = "none";
    type_ira_description.style.display = "block";
    type_trust_description.style.display = "none";
}

const typeTrustChecked = () => {
    type_individual_description.style.display = "none";
    type_business_description.style.display = "none";
    type_ira_description.style.display = "none";
    type_trust_description.style.display = "block";
}

// После загрузки контента
document.addEventListener("DOMContentLoaded", () => {
    typeDefault();
});


// После любых изменений на странице
document.addEventListener("change", () => {
    typeDefault();
});

// Наведение мыши
// Individual
ic_info_individual.addEventListener('mouseenter', () => {
    typeIndividualChecked();
});
type_individual_description,addEventListener('mouseenter', () => {
    typeIndividualChecked();
});
type_individual_description.addEventListener('mouseleave', () => {
    typeDefault();
});

// Business
ic_info_business.addEventListener('mouseenter', () => {
    typeBusinessChecked();
});
type_business_description.addEventListener('mouseenter', () => {
    typeBusinessChecked();
});
type_business_description.addEventListener('mouseleave', () => {
    typeDefault();
});

// IRA
ic_info_ira.addEventListener('mouseenter', () => {
    typeIRAChecked();
});
type_ira_description.addEventListener('mouseenter', () => {
    typeIRAChecked();
});
type_ira_description.addEventListener('mouseleave', () => {
    typeDefault();
});

// Trust
ic_info_trust.addEventListener('mouseenter', () => {
    typeTrustChecked();
});
type_trust_description.addEventListener('mouseenter', () => {
    typeTrustChecked();
});
type_trust_description.addEventListener('mouseleave', () => {
    typeDefault();
});