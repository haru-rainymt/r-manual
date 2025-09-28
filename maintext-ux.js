document.addEventListener ("DOMContentLoaded", () => {
    sortFunctionIndex();
});

function sortFunctionIndex() {
    const originalList = document.querySelectorAll("#function-list li");
    const items = Array.from(originalList).map(li => {
        const a = li.querySelector("a");
        return { name: a.textContent, link: a.getAttribute("href")};
    })
    items.sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base"}));

    const container = document.querySelector(".sort-function");
    container.innerHTML = "";

    let currentLetter = "";
    let ul = null;

    items.forEach(item => {
        const firstLetter = item.name[0].toUpperCase();
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            const heading = document.createElement("h2");
            heading.textContent = currentLetter;
            container.appendChild(heading);
            
            ul = document.createElement("ul");
            container.appendChild(ul);
        }
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
}