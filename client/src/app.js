const form = document.querySelector("#form");

function handleSubmitForm(event) {
    event.preventDefault();
    console.log("Default prevented");

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

     fetch("https://week4-guestbook-v2jp.onrender.com", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
    });
    console.log(formValues);

    fetch("https://week4-guestbook-v2jp.onrender.com", {
        method: "GET",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
    });
    console.log(formValues);
}

form.addEventListener("submit", handleSubmitForm);