$(function(){
    
    let productList =  $('#product-list')

    fetchProducts(function(products){//calling fetchProducts function
        productList.empty()
        for(product of products){//loop adding all products
            productList.append(createProductCard(product))
        }
    })
})