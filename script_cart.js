
function loadshoppingcart() {
    const ul = document.getElementById("list")
    ul.innerHTML = ""

    const counts = {}
    for (let i = 0; i < localStorage.length; i++) {
        let value = localStorage.getItem(localStorage.key(i))
        counts[value] = (counts[value] || 0) + 1
    }

    for (const [text, count] of Object.entries(counts)) {
        showshoppingcart(text, count)
    }

    const emptyMsg = document.getElementById("cart-empty-msg")
    if (emptyMsg) emptyMsg.style.display = Object.keys(counts).length === 0 ? "block" : "none"

    updateCartSummary()
}

function showshoppingcart(text, count) {
    const ul = document.getElementById("list")
    const li = document.createElement("li")

    const parts = text.split("–")
    const nameText = parts[0] ? parts[0].trim() : text
    const priceText = parts[1] ? parts[1].trim() : ""

    const nameSpan = document.createElement("span")
    nameSpan.classList.add("cart-item-name")
    nameSpan.textContent = count + "x " + nameText

    const priceSpan = document.createElement("span")
    priceSpan.classList.add("cart-item-price")
    priceSpan.textContent = priceText

    li.dataset.count = count

    const deleteButton = document.createElement('button')
    deleteButton.textContent = document.body.dataset.lang === 'en' ? 'delete' : 'löschen'
    deleteButton.classList.add('cart-delete-btn')

    deleteButton.addEventListener("click", function () {
        removeOneCartItem(text)
        loadshoppingcart()
    })

    li.appendChild(nameSpan)
    li.appendChild(priceSpan)
    li.appendChild(deleteButton)
    ul.appendChild(li)
}

function removeOneCartItem(productValue) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (localStorage.getItem(key) === productValue) {
            localStorage.removeItem(key)
            break
        }
    }
}

function updateCartSummary() {
    const items = document.querySelectorAll(".cartlist li")
    let total = 0
    for (const li of items) {
        const priceSpan = li.querySelector(".cart-item-price")
        const count = parseInt(li.dataset.count) || 1
        const price = parseFloat(priceSpan.textContent.replace(",", ".")) || 0
        total += price * count
    }
    const summaryEl = document.getElementById("cart-summary")
    const wrapEl = document.getElementById("cart-summary-wrap")
    const totalLabel = document.body.dataset.lang === 'en' ? 'Total: ' : 'Gesamt: '
    if (summaryEl) summaryEl.textContent = total > 0 ? totalLabel + total.toFixed(2) + " €" : ""
    if (wrapEl) wrapEl.style.display = total > 0 ? "block" : "none"
}

document.addEventListener("DOMContentLoaded", loadshoppingcart)