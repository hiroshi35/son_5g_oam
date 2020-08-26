<template>
  <div class="invoice">
    <panel type="panel-white">
      <h3 slot="header">Company Inc.</h3>
      <div class="row margin-bottom-15">
        <div class="col-md-4">
          <p><strong>From:</strong></p>
          <p v-text="from.name"></p>
          <p v-text="from.address"></p>
          <p v-text="from.phone"></p>
          <p v-text="from.email"></p>
        </div>
        <div class="col-md-4">
          <p><strong>To:</strong></p>
          <p v-text="to.name"></p>
          <p v-text="to.address"></p>
          <p v-text="to.phone"></p>
          <p v-text="to.email"></p>
        </div>
        <div class="col-md-4">
          <p><strong>Invoice {{ invoice.number }}</strong></p>
          <p><strong>Order:</strong> {{ invoice.orderID }} </p>
          <p><strong>Payment Due:</strong> {{ invoice.paymentDue }} </p>
          <p><strong>Account:</strong> {{ invoice.account }} </p>
        </div>
      </div>
      <div class="table-responsive products-table">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Qty</th>
            <th>Product</th>
            <th>Code</th>
            <th>Subtotal</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="product in products">
            <td v-text="product.qty"></td>
            <td v-text="product.name"></td>
            <td v-text="product.code"></td>
            <td>{{ `${product.subtotal}${currency}` }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h4>Payment Methods</h4>
          <div class="payment-methods margin-bottom-5">
            <i class="fa fa-cc-paypal"></i>
            <i class="fa fa-cc-mastercard"></i>
            <i class="fa fa-cc-visa"></i>
          </div>
          <div class="well">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti deserunt dolorem eum, ex laboriosam nemo placeat provident quas? A commodi debitis dolor harum, hic minus quae quas repellat suscipit?
          </div>
        </div>
        <div class="col-md-6">
          <h4>Amount</h4>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>{{ `${subtotal}${currency}` }}</td>
                </tr>
                <tr>
                  <th>Tax</th>
                  <td>{{ `${tax}${currency}` }}</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>{{ `${shipping}${currency}` }}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>{{ `${total}${currency}` }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button class="btn btn-blue pull-right">
        <i class="fa fa-cloud"></i>  Download Invoice
      </button>
      <button class="btn btn-teal pull-right margin-right-5">
        <i class="fa fa-credit-card"></i>  Submit Payment
      </button>
    </panel>
  </div>
</template>

<script>
  export default {
    name: 'Invoice',
    props: ['from', 'to', 'invoice', 'products', 'tax', 'currency', 'shipping'],
    computed: {
      subtotal () {
        return this.products.reduce((previous, next) => {
          if (typeof previous === 'object') {
            previous = previous.qty * previous.subtotal
          }

          return previous + next.qty * next.subtotal
        })
      },
      total () {
        return this.subtotal + this.tax + this.shipping
      }
    }
  }
</script>

<style lang="scss" scoped>
  .invoice{
    .products-table{
      margin-right: -15px;
      margin-left: -15px;
    }
    .payment-methods i{
      font-size: 24px;
      margin-right: 10px;
    }
  }
</style>