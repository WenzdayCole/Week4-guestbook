const form = document.querySelector("#form");

function handleSubmitForm(event) {
    event.preventDefault();
    console.log("Default prevented");

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

     fetch("http://localhost:8080/form_entries", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
    });
    console.log(formValues);

    fetch("http://localhost:8080/form_entries", {
        method: "GET",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
    });
    console.log(formValues);
}

form.addEventListener("submit", handleSubmitForm);