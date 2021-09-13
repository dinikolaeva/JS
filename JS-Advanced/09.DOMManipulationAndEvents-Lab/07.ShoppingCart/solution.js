function solve() {
    let addBtnElements = Array.from(document.querySelectorAll('.add-product'));
    addBtnElements.forEach(e => e.addEventListener('click', onAddClick));

    let cart = [];
    let textArea = document.getElementsByTagName('textarea')[0];

    function onAddClick(ev) {
        let product = ev.target.parentNode.parentNode.querySelector('.product-title').textContent;
        let currPrice = Number(ev.target.parentNode.parentNode.querySelector('.product-line-price').textContent);
        let currentProduct = {
            name: product,
            price: currPrice
        };
        cart.push(currentProduct);
        let text = `Added ${currentProduct.name} for ${currentProduct.price.toFixed(2)} to the cart.\n`;
        textArea.textContent += text;
    }

    let checkoutBtnElement = document.querySelector('.checkout');
    checkoutBtnElement.addEventListener('click', onCheckoutClick);

    function onCheckoutClick() {
        let totalSum = cart.reduce((sum, currProduct) => sum + currProduct.price, 0);

        let list = [];

        for (let product of cart) {
            if (!list.includes(product.name)) {
                list.push(product.name);
            }
        }

        // В условието го няма, но трябва да се проверява дали в количката има изобщо някакви продукти, 
        //иначе бутона 'Chekout' отново работи, а не би трябвало.

        let checkoutText = `You bought ${list.join(', ')} for ${totalSum.toFixed(2)}.`
        textArea.textContent += checkoutText;

        Array.from(document.getElementsByTagName('button')).forEach(b => b.setAttribute('disabled', ''));
    }
}