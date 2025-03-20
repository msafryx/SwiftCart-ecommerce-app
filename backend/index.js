const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT | 3000

const BookmarkRoute = require('./route/BookmarkRoute');
const CartRoute = require('./route/CartRoute');
const CategoryRoute = require('./route/CategoryRoute');
const DealRoute = require('./route/DealRoute');
const OrderRoute = require('./route/OrderRoute');
const PaymentRoute = require('./route/PaymentRoute');
const PaymentMethodRoute = require('./route/PaymentMethodRoute');
const ProductRoute = require('./route/ProductRoute');
const ReturnRoute = require('./route/ReturnRoute');
const RefundRoute = require('./route/RefundRoute');
const ReviewRoute = require('./route/ReviewRoute');
const RoleRoute = require('./route/RoleRoute');
const UserRoute = require('./route/UserRoute');
const VoucherRoute = require('./route/VoucherRoute');
const VoucherDetailRoute = require('./route/VoucherDetailRoute');


const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://0.0.0.0/swiftcart').then(()=>{
    console.log('database connected!')
}).catch((e)=>{
    console.log(e);
})

app.use('/api/v1/bookmarks',BookmarkRoute);
app.use('/api/v1/carts',CartRoute);
app.use('/api/v1/categories',CategoryRoute);
app.use('/api/v1/deals',DealRoute);
app.use('/api/v1/orders',OrderRoute);
app.use('/api/v1/paymentMethods',PaymentMethodRoute);
app.use('/api/v1/payments',PaymentRoute);
app.use('/api/v1/products',ProductRoute);
app.use('/api/v1/refunds',RefundRoute);
app.use('/api/v1/returns',ReturnRoute);
app.use('/api/v1/reviews',ReviewRoute);
app.use('/api/v1/roles',RoleRoute);
app.use('/api/v1/users',UserRoute);
app.use('/api/v1/voucherDetails',VoucherDetailRoute);
app.use('/api/v1/vouchers',VoucherRoute);


app.listen(PORT,()=>{
    console.log(`server up & running on por ${PORT}`);
})