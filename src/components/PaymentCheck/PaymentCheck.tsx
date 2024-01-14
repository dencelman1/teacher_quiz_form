import crypto from 'crypto';


var PaymentCheck = () => {

    

    var paymentData = {
        price: 100,
        login: 'testznanio', // TODO:
        description: 'Description', // TODO:

        password1: 'A6898JsTX6QPPtqpGqKg',
        password2: 'Cy994dCU1BIXtqVjlz1Y',

        stringForHash() {
            return `${this.login}:${this.price}::${this.password1}`
        },

        getSign() {
            var md5Hash = crypto.createHash('md5');
            md5Hash.update(this.stringForHash());

            return md5Hash.digest('hex');
        }
    }
    
    var url = (
        "https://auth.robokassa.ru/Merchant/Index.aspx?"+
        `MerchantLogin=${paymentData.login}&`+
        `OutSum=${paymentData.price}&`+
        `Description=${paymentData.description}&`+
        `SignatureValue=${paymentData.getSign()}`
    )

    console.log(url)

    return (
        <div>

        </div>
    )
}

export default PaymentCheck;
