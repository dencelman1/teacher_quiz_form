import crypto from 'crypto';


var PaymentCheck = () => {

    

    var paymentData = {
        price: 10000,
        login: '', // TODO:
        description: '', // TODO:

        password1: '',
        password2: '',

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

    // TODO:

    return (
        <div>

        </div>
    )
}

export default PaymentCheck;
