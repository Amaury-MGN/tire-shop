// base de données du projet (tableau)
const apiCatalogue = [{
    id:0,
    gamme: 'Little Boy',
    category: 'Entrée de gamme',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~20 000km',
    epaisseur: '8-9 mm',
    renforcement:'Aucun',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N1',
    dimension:'Citadin',
    price: 115,
    image: 'pneu2',
    reference: 'LB2022-1372894'


}, {
    id:1,
    gamme: 'Nomad',
    category: 'Milieu de gamme',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~25 000km',
    epaisseur: '8-9 mm',
    renforcement:'Aucun',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N2',
    dimension:'Citadin',
    price: 150,
    image: 'pneu2',
    reference: 'ND2022-1589585'
}, {
    id:2,
    gamme: 'Vega',
    category: 'Gamme premium',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~32 000km',
    epaisseur: '8-9 mm',
    renforcement:'Kevlar 2mm sous couche caoutchouc',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N2',
    dimension:'Citadin',
    price: 175,
    image: 'pneu1',
    reference: 'VG2022-1425529'
},{ 
    id:3,
    gamme: 'Little Boy',
    category: 'Entrée de gamme',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~20 000km',
    epaisseur: '8-9 mm',
    renforcement:'Aucun',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N1',
    dimension:'Crossover',
    price: 135,
    image: 'pneu2',
    reference: 'LB2022-1372885'
}, {
    id:4,
    gamme: 'Little Boy',
    category: 'Entrée de gamme',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~20 000km',
    epaisseur: '8-9 mm',
    renforcement:'Aucun',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N1',
    dimension:'LCV-SUV',
    price: 160,
    image: 'pneu2',
    reference: 'LB2022-1373789'
}, {
    id:5,
    gamme: 'Nomad',
    category: 'Milieu de gamme',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~25 000km',
    epaisseur: '8-9 mm',
    renforcement:'Aucun',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N2',
    dimension:'Crossover',
    price: 180,
    image: 'pneu2',
    reference: 'ND2022-1119235'
}, {
    id:6,
    gamme: 'Nomad',
    category: 'Milieu de gamme',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~25 000km',
    epaisseur: '8-9 mm',
    renforcement:'Aucun',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N2',
    dimension:'LCV-SUV',
    price: 215,
    image: 'pneu2',
    reference: 'ND2022-1856987'
}, {
    id: 7,
    gamme: 'Vega',
    category: 'Gamme premium',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~32 000km',
    epaisseur: '8-9 mm',
    renforcement: 'Aucun',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N2',
    dimension: 'Crossover',
    price: 210,
    image: 'pneu1',
    reference: 'VG2022-1356660',
}, {
    id: 8,
    gamme: 'Vega',
    category: 'Gamme premium',
    couleur: 'noir (unique)',
    jantes: 'Aluminium',
    type: 'Clouté',
    ttl: '~32 000km',
    epaisseur: '8-9 mm',
    renforcement: 'Aucun',
    description: 'Caoutchouc recyclé avec clous en aluminium renforcé N2',
    dimension: 'LCV-SUV',
    price: 250,
    image: 'pneu1',
    reference: 'VG2022-1822157',
}
];  
                                                       
                                                       
                                                       
                                                    // Début de la fonction card du catalogue
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
} 

function ready() {
    // fonction d'ajout au panier
    var chosen_product = document.getElementsByClassName("add_cart_cards");
    for (var i = 0; i < chosen_product.length; i++) {
        var add_button = chosen_product[i]
        add_button.addEventListener('click', add_item)
        add_button.addEventListener('click', modify_add_content_card)
    } 
}
const container = document.getElementById('catalogue');
// Création des card des différents pneus
var now = new Date();
var date_day = now.getDate() + 5
var date_month = now.toLocaleString('default', { month: 'long' })
apiCatalogue.forEach((result) => {
    // vérification du panier pour savoir si un pneu est déjà dedans ou non
    let localStorage_exist = localStorage.getItem('Produit_' + result.id)
    if (localStorage_exist == null) {
        // Création de l'élément cards dans le catalogue
    const card = document.createElement('div');
    card.classList = 'card-body';
    // création du contenu des cards
    const content = `
        <div id='tire_card' class='filter_div card ${result.gamme} display'>
            <div class='card-header' id='heading-${result.id}'>
            </div>

            <div id='collapse-${result.id}' class='collapse show' aria-labelledby='heading-${result.id}' data-parent='#catalogue'>
            <div class='card-body inside_card_resize display'>

                <div class='inside_card_first'>
                    <img class='image_card_size' src='../images_pneus/${result.image}.jpg'>
                </div>
                <div class='inside_card_second display column_flex'>
                    <h5 class='gamme gamme_card'><a href='./catalogue/${result.gamme}.html'>${result.gamme}</a></h5>
                    <p class='reference'>${result.reference}</p>
                    <p class='type'>Type : ${result.type}</p>
                    <p class='category'>Catégorie : ${result.category}</p>
                    <p class='dimension'>Gabarit : <strong> ${result.dimension}</strong></p>
                    <p class='id' style='display:none'>${result.id}</p>
                </div>
                <div class='inside_card_third'>
                    <div class='column_flex'>
                        <div>
                            <h3 class='price price_card'>${result.price} €</h3>
                        </div>
                        <div>
                            <p>Livraison à domicile dès le <strong>${date_day} ${date_month}</strong></p>
                        </div>
                        <div class='display_center'>
                        <a class='details_card' href='./catalogue/${result.gamme}.html'>Plus de détails</a>
                        </div>
                    </div>
                    <div class='display column_flex display_center'>
                        
                        <div id='quantity'>
                            <input class='tire_quantity' type='number' value='1' min='1' step="1" oninput="validity.valid||(value='');">
                            <a class='add_cart_cards add_cart_css'>Ajouter au panier</a>
                        </div>
                        <div id='inside_cart' class='display_center quantity_display'>
                        <p class='in_cart'>Cet article est déjà dans votre panier</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div>
        </div>
    `;
    container.innerHTML += content;
    } else {
    // Création de l'élément cards dans le catalogue
    const card = document.createElement('div');
    card.classList = 'card-body';
    // création du contenu des cards
    const content = `
        <div id='tire_card' class='filter_div card ${result.gamme} display'>
            <div class='card-header' id='heading-${result.id}'>
            </div>

            <div id='collapse-${result.id}' class='collapse show' aria-labelledby='heading-${result.id}' data-parent='#catalogue'>
            <div class='card-body inside_card_resize display'>

                <div class='inside_card_first'>
                    <img class='image_card_size' src='../images_pneus/${result.image}.jpg'>
                </div>
                <div class='inside_card_second display column_flex'>
                    <h5 class='gamme gamme_card'><a href='./catalogue/${result.gamme}.html'>${result.gamme}</a></h5>
                    <p class='reference'>${result.reference}</p>
                    <p class='type'>Type : ${result.type}</p>
                    <p class='category'>Catégorie : ${result.category}</p>
                    <p class='dimension'>Gabarit : <strong> ${result.dimension}</strong></p>
                    <p class='id' style='display:none'>${result.id}</p>
                </div>
                <div class='inside_card_third'>
                    <div class='column_flex'>
                        <div>
                            <h3 class='price price_card'>${result.price} €</h3>
                        </div>
                        <div>
                            <p>Livraison à domicile dès le <strong>${date_day} ${date_month}</strong></p>
                        </div>
                        <div class='display_center'>
                        <a class='details_card' href='./catalogue/${result.gamme}.html'>Plus de détails</a>
                        </div>
                    </div>
                    <div class='display column_flex display_center'>
                        
                        <div id='quantity' class='quantity_display'>
                            <input class='tire_quantity' type='number' value='1' min='1' step="1" oninput="validity.valid||(value='');">
                            <a class='add_cart_cards add_cart_css'>Ajouter au panier</a>
                        </div>
                        <div id='inside_cart'>
                        <p class='in_cart'>Cet article est déjà dans votre panier</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
    container.innerHTML += content;
    }
})


                                                    // FIN de la fonction card du catalogue

                                                    // Début de la fonction recherche du catalogue

// Classement par catégories
filter_selection("all")
function filter_selection(c) {
        var x, i;
        x = document.getElementsByClassName("card");
        if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        remove_cards(x[i], "show");
            if (x[i].className.indexOf(c) >-1 ) add_card(x[i], "show");
        }
    }
        // afficher les éléments filtrés
        function add_card(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    element.className += " " + arr2[i];
                }
            }
        }

        // cacher les fichiers non sélectionnés
        function remove_cards(element, name) {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                    arr1.splice(arr1.indexOf(arr2[i]), 1);
                }
            }
            element.className = arr1.join(" ");
        }

                                                                // END classement par catégories

                                                                // Début de la Search bar

function search_bar() {
    // Declaration de variables
    var input, filter, card;
    input = document.getElementById('search_input');
    filter = input.value.toLowerCase();
    card = document.getElementsByClassName("card");
    

    // boucler tous les champs des différentes cards pour recercher lettre par lettre
    for (i = 0; i < card.length; i++) {
        filter_selection("all")
        gamme = card[i].getElementsByClassName("gamme")[0];
        category = card[i].getElementsByClassName("category")[0];
        type = card[i].getElementsByClassName("type")[0];
        reference = card[i].getElementsByClassName("reference")[0];
        price = card[i].getElementsByClassName("price")[0];
        dimension = card[i].getElementsByClassName("dimension")[0];


        if (gamme.textContent.toLowerCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else if(category.textContent.toLowerCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else if(type.textContent.toLowerCase().indexOf(filter) > -1){
            card[i].style.display = "";
        } else if (reference.textContent.toLowerCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else if (price.textContent.toLowerCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else if (dimension.textContent.toLowerCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}
                                          /////////////////////////////////////PANIER///////////////////////////////////////////
panier()

function panier() {
    create_cart_cards()
    cart_price()
}

function create_cart_cards() {
    all_products = Object.entries(localStorage).filter(([key]) => key.startsWith('Produit_'));
    all_products.forEach((element) => {
        product_delete_id = JSON.stringify(element[0])
        product = JSON.parse(element[1])
        creation_cards()
    });  
        
    
}


function creation_cards() {
    const cart = document.getElementById('panier')
        // Création de l'élément cards dans le panier
    const row_cart = document.createElement('div');
    row_cart.classList = 'panier_body';
    // création du contenu des cards
    const content = `
        <div id='cart_card' class='display cart_card_border cart_number'>
            <div class='display'>
                <img  class='image_size' src='../images_pneus/${product.image}.jpg'>
            </div>
            <div id='' class='display column_flex cart_info'>
            
                <h5><a href='./catalogue/${product.gamme}.html'>${product.gamme}</a></h5>
                <p>${product.reference}</p>
                <!--<p>Gabarit : ${product.dimension}</p>-->
                <p>Prix HT : ${product.price} €</p>
                <p class='storage_id' style='display:none'>Produit_${product.id}</p>
                <p class='cart_card_quantity'>Quantité : <input class='tire_quantity' type='number' value=${product.quantity} min='1'  step="1" oninput="validity.valid||(value='');"></p>
                <button class='delete_product category_button'>Supprimer l'article</button>                
            </div>
        </div> 
    `;
    // Ajout des nouvelles cards à l'emplacement de la div choisie préalablement (ici la div du html : <div id='panier'>)
    cart.innerHTML += content;
    var product_delete = document.getElementsByClassName("delete_product");
    for (var i = 0; i < product_delete.length; i++) {
        var button = product_delete[i]
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            let id_new_cart_card = buttonClicked.parentElement.parentElement.childNodes[3].childNodes[3].innerHTML
            let return_card_add_button = document.getElementsByClassName('reference')
            
            for (var i = 0; i < return_card_add_button.length; i++) { 
                id_card = return_card_add_button[i]
                // console.log(id_card.innerHTML,id_new_cart_card)
                if (id_card.innerHTML == id_new_cart_card) {
                    hide_phrase = id_card.parentElement.parentElement.childNodes[5].childNodes[3].childNodes[3]
                    hide_phrase.classList.add('quantity_display')
                    display_add_button = id_card.parentElement.parentElement.childNodes[5].childNodes[3].childNodes[1]
                    display_add_button.classList.remove('quantity_display')
                    console.log(display_add_button)
                }               
            }   
        }) 
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
        }) 
        button.addEventListener('click', function (event) {
            let buttonClicked = event.target
            let test = buttonClicked.parentElement
            let test2 =test.getElementsByClassName('storage_id')[0].innerText
            localStorage.removeItem(test2)
        }) 
        button.addEventListener('click', update_cart);
    }
    var quantity = document.getElementsByClassName('cart_card_quantity')
    for (let i = 0; i < quantity.length; i++) {
        let change_quantity = quantity[i]
        change_quantity.addEventListener('change', function () {
            let storage_id = change_quantity.parentElement.getElementsByClassName('storage_id')[0].innerHTML
            let new_quantity = change_quantity.parentElement.getElementsByClassName('tire_quantity')[0].valueAsNumber
            if (isNaN(new_quantity)) {
                new_quantity = 1
            } else {
                new_quantity=new_quantity
            }
            product_JSON=localStorage.getItem(storage_id)
            product = JSON.parse(product_JSON)
            delete_quantity = delete product.quantity
            product.quantity = new_quantity
            new_product = JSON.stringify(product)
            localStorage.removeItem(storage_id)
            localStorage.setItem(storage_id, new_product)
            update_cart()
            
        })
    }
 
}
function cart_price() {
    all_products = Object.entries(localStorage).filter(([key]) => key.startsWith('Produit_'));
    var price_ht = 0;
    all_products.forEach((element, id_product) => {
        products = JSON.parse(element[1])
        // price_ht += Number(products.price);
        price_ht += Math.round((Number(products.price)*Number(products.quantity)) * 100) / 100
    });
    let price_ttc = Math.round((price_ht * 1.2) * 100)/ 100;

    // choisir la div dans laquelle créer les sommes à payer
    const total_panier = document.getElementById('total_panier')
    // Création de l'élément cards dans le panier
    const card = document.createElement('div');
    card.classList = 'panier_body';
    // création du contenu des cards
    const content = `
        <!--<div class="clear"></div>-->
        <div class='cart_card_price display_center column_flex'>
            <p id='prix_ht'>Prix HT : ${price_ht} €</p>
            <h3 id='prix_ttc'>Prix TTC : ${price_ttc} €</h3>
        </div>
        <div class='cart_card_button'>
            <a href="./panier.html" class='category_button'>Payer</a>
        </div>
        `;
    // Création  effective
    total_panier.innerHTML += content;
}

function update_cart() {
    all_products = Object.entries(localStorage).filter(([key]) => key.startsWith('Produit_'));
    var price_ht = 0;
    all_products.forEach((element) => {
        localStorage_id = JSON.stringify(element[0])
        products = JSON.parse(element[1])     
        price_ht += Number(products.price)*Number(products.quantity);
    });
    let price_ttc = price_ht * 1.2;
    document.getElementById('prix_ht').innerHTML = 'Prix HT :'+price_ht+'€';
    document.getElementById('prix_ttc').innerHTML = 'Prix TTC :'+price_ttc+'€';
}

function add_item(event) {
    let button = event.target
    let tire_card = button.parentElement.parentElement.parentElement.parentElement
    let card_id = tire_card.getElementsByClassName('id')[0].innerText
    let tire_quantity = tire_card.getElementsByClassName('tire_quantity')[0].valueAsNumber
   
    all_products = Object.entries(localStorage).filter(([key]) => key.startsWith('Produit_'))
    let storage_key = `Produit_${card_id}`
    storage_empty = localStorage.getItem(storage_key)
    if (storage_empty == null) {      
        add_localStorage(card_id,tire_quantity)
        add_card_cart(storage_key)
        update_cart()
    } else {
        add_localStorage(card_id,tire_quantity)
        add_card_cart(storage_key)
        update_cart()
   }
}
function modify_add_content_card(event) {
    delete_button = event.target
    div_quantity = delete_button.parentElement
    div_quantity.classList.add('quantity_display')
    div_inside_cart = delete_button.parentElement.parentElement.childNodes[3]
    div_inside_cart.classList.remove('quantity_display')
}
function add_localStorage(card_id,tire_quantity) {
    apiCatalogue.forEach((result, id) => { 
        if (card_id == id) {
            quantity=result.quantity=tire_quantity

            card = JSON.stringify(result)

            id = 'Produit_'+card_id;
            add_product = localStorage.setItem(id, card)  
        };
    });
    
}
function add_card_cart(storage_key) {
    let product_JSON = localStorage.getItem(storage_key)
    product=JSON.parse(product_JSON)
    product_delete_id = `Produit_${product.id}`
    creation_cards()
}