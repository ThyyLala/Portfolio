function priznanjaPage() {
    window.location.href = "priznanja.html";
}

function robloxStvari() {
    window.location.href = "projekti.html#roblox";
}

function vsStvari() {
    window.location.href = "projekti.html#vs";
}

function unityStvari() {
    window.location.href = "projekti.html#unity";
}

function pythonProjekti() {
    window.location.href = "projekti.html#python";
}

function muzikaStvari() {
    window.location.href = "projekti.html#muzika";
}

function HomePage() {
    window.location.href = "index.html";
}

function contactPage () {
    window.location.href = "contact.html";
}

function projektiPage () {
    window.location.href = "projekti.html";
}

window.addEventListener("load", () => {
    const hash = window.location.hash; // e.g. "#roblox"
    if (hash) {
        document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    }
});