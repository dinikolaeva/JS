function sumTable() {
    const productsWithPrice = document.querySelectorAll('tr');
    const productsArr = [...productsWithPrice].slice(1, -1);

    document.getElementById('sum').textContent = productsArr.reduce((sum, currentProduct) => {
        return sum + Number(currentProduct.lastElementChild.textContent)
    }, 0)
}