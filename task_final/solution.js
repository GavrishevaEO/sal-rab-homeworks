function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order: {}};

    let countOfGoods = goods.length;

    goods.forEach(element => {
        let good = {
            title: element.title,
            count: element.count
        };
        data.goods.push(good);
    });
    
    data.order.address = "ул. " + address.street + ", дом "+address.house + ', '+address.entrance+' подъезд, '+address.floor+" этаж, кв. "+address.flat;
    data.order.sum = sum;
    
    data.client = name + " " + phone;
    let jsonData = JSON.stringify({data: data});

    return jsonData;
}
