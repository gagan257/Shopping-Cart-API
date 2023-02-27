function fetchProducts (done) {
    //Get array of all products from the database(in form of JSON)
    $.get('/api/products',function (data) {
        done(data)
    })
}

function addProduct(name, manuf, price, done){//getting data from "add_product.js"
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    },function(data){
        done(data)
    })
}

function createProductCard (product){//layout for each data to be displayed
    return $(`
        <div class="col-4 card mr-3 p-2">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <div class="row">
                <div class="col-6 m-3 p-3">
                    <b>Rs.${product.price}</b>
                </div>
                <button class="col btn btn-primary m-3 p-1">Buy</button>
            </div>
        </div>`
        )
}
