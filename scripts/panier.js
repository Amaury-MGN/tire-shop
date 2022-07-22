cart()
update_cart()

function cart() {
    all_products = Object.entries(localStorage).filter(([key]) => key.startsWith('Produit_'));
    // console.log(all_products.length)
    price_ht = 0;
    all_products.forEach((element) => {
        product = JSON.parse(element[1])
        // console.log(product)
        const cart = document.getElementById('panier_recap')
        // Création de l'élément cards dans le panier
        const row_cart = document.createElement('div');
        row_cart.classList = 'panier_body';
        // création du contenu des cards
        const content = `
            <div id='cart_card' class='display row_flex cartP_border cart_number'>
                <div class='display_center cartP_image_size'>
                    <img src='../images_pneus/${product.image}.jpg'>
                </div>
                <div id='' class='display column_flex cartP_infos'>
                    <h5 class='gamme cartP_gamme'><a href='./catalogue/${product.gamme}.html'>${product.gamme}</a></h5>
                    <p class='reference'>Référence : ${product.reference}</p>
                    <p class='dimension'>Gabarit : ${product.dimension}</p>
                    <p class='storage_id' style='display:none'>Produit_${product.id}</p>
                    <a class='delete_product cartP_suppr'>| Supprimer l'article</a>
                </div>
                <div class='cartP_quantity display'>
                    <p class='cart_card_quantity'><input class='tire_quantity' type='number' value=${product.quantity} 
                        min='1'step="1" oninput="validity.valid||(value='');"></p>
                </div>
                <div class='cartP_price display'>
                    <p>${product.price} €</p>
                </div>
            </div>

        `;
        // Ajout des nouvelles cards à l'emplacement de la div choisie préalablement (ici la div du html : <div id='panier'>)
        cart.innerHTML += content;
        
        price_ht += Number(product.price) * Number(product.quantity);
    });  
    let price_ttc = price_ht * 1.2;
    if (all_products.length === 0) {
        // console.log('test')
        const total_panier = document.getElementById('total_panier')
        // Création de l'élément cards dans le panier
        const card = document.createElement('div');
        card.classList = 'prix_body';
        // création du contenu des cards
        const content = `
            <!--<div class="clear"></div>-->
            <div class='display cart_empty'>
                <p>Votre Panier est vide</p>
            </div>
            `;
    
    // Création  effective
        total_panier.innerHTML += content;
    } else {
        // choisir la div dans laquelle créer les sommes à payer
    const total_panier = document.getElementById('total_panier')
    // Création de l'élément cards dans le panier
    const card = document.createElement('div');
    card.classList = 'prix_body';
    // création du contenu des cards
        const content = `
            <div id='cart_card' class='display row_flex cart_number'>
                <div class='display_center cartP_image_size'>
                </div>
                <div id='' class='display column_flex cartP_infos'>
                </div>
                <div class='cartP_total_price cartP_Total_border cartP_Price_border display column_flex'>
                    <!--<p>total HT : </p>-->
                    <p>Total TTC : </p>
                </div>
                <div class='cartP_total_price cartP_total_price_border cartP_Price_border'>
                    <!--<p id='prix_ht'>${price_ht} €</p>-->
                    <p id='prix_ttc'>${price_ttc} €</p>
                </div>
            </div>
            <div class="delivery_title">
                            <h2>Mode de livraison</h2>
                        </div>
                        <div class="delivery delivery_phrase">
                            <p>Choisissez votre mode de livraison pour connaître les frais de ports relatifs à votre commande</p>
                        </div>
                        <div class="delivery display delivery_choices">
                            <div class="delivery_choices_border display">
                                <div>
                                    <input type="radio" name="livraison">
                                </div>
                                <div class="delivery_padding">
                                    <p>Livraison en magasin</p>
                                    <p>Veuillez choisir un centre de retrait</p>
                                </div>
                            </div>
                            <div class="delivery_choices_border display">
                                <div>
                                    <input type="radio" name="livraison">
                                </div>
                                <div class="delivery_padding">
                                    <p>Livraison à domicile</p>                                    
                                    <p>Frais de Livraison à partir de : 10€</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="delivery_payment">
                                <button class="category_button" id="myBtn" onclick='modal()'>Confirmer votre Achat</button>
                            </div>
                        </div>
        `;
    
    // Création  effective
        total_panier.innerHTML += content;
        modal()
    }
    
    
    var product_delete = document.getElementsByClassName("delete_product");
    for (var i = 0; i < product_delete.length; i++) {
        var button = product_delete[i]
        
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
        }) 
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            let suppr_div = buttonClicked.parentElement
            let suppr=suppr_div.getElementsByClassName('storage_id')[0].innerText
            localStorage.removeItem(suppr)
        }) 
        button.addEventListener('click', update_cart);
    }
    var quantity = document.getElementsByClassName('tire_quantity')
    for (let i = 0; i < quantity.length; i++) {
        let change_quantity = quantity[i]
        change_quantity.addEventListener('change', function () {
            let storage_id = change_quantity.parentElement.parentElement.parentElement.getElementsByClassName('storage_id')[0].innerHTML
            let new_quantity = change_quantity.parentElement.getElementsByClassName('tire_quantity')[0].valueAsNumber
            product_JSON=localStorage.getItem(storage_id)
            product = JSON.parse(product_JSON)
            delete_quantity = delete product.quantity
            // console.log(change_quantity.parentElement.parentElement.parentElement.childNodes[3].getElementsByClassName('storage_id')[0].innerHTML)
            product.quantity = new_quantity
            new_product = JSON.stringify(product)
            localStorage.removeItem(storage_id)
            localStorage.setItem(storage_id, new_product)
            update_cart()
        })
    }
}

function update_cart() {
    all_products = Object.entries(localStorage).filter(([key]) => key.startsWith('Produit_'));
    var price_ht = 0;
    all_products.forEach((element) => {
        localStorage_id = JSON.stringify(element[0])
        products = JSON.parse(element[1])     
        price_ht += Number(products.price)*Number(products.quantity);
        // console.log(products) 
    });
    let price_ttc = price_ht * 1.2;
    // document.getElementById('prix_ht').innerHTML = 'Prix HT:'+price_ht+'€';
    document.getElementById('prix_ttc').innerHTML = price_ttc+'€';
}

function payer() {
    all_products = Object.entries(localStorage).filter(([key]) => key.startsWith('Produit_'));
    var price_ht = 0;
     all_products.forEach((element) => {
         products = JSON.parse(element[1])
        price_ht += Number(products.price)*Number(products.quantity);
     });
    let price_ttc = price_ht * 1.2;
    let gamme = document.getElementsByClassName('gamme')[0].innerHTML
    let reference =document.getElementsByClassName('reference')[0].innerHTML
    let dimension = document.getElementsByClassName('dimension')[0].innerHTML
    let quantity = document.getElementsByClassName('tire_quantity')[0].valueAsNumber
    let values = {
        'gamme': gamme,
        'reference': reference,
        'dimension': dimension,
        'quantity': quantity,
        'price' : price_ttc,
    }
    storage_value=JSON.stringify(values)
    let rand = Math.random().toString(16).substr(2, 8); // 6de5ccda
    localStorage.setItem('Achat_'+rand,storage_value)
    // console.log(quantity)
    alert('Félicitation vous avez payer votre commande')
}
function modal() {
        // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

