<template>
  <div>
    <div class="container-fluid">
      <page-header title="Invoice"></page-header>
      <invoice :from="from" :to="to" :invoice="invoice" :products="products" :tax="tax" :shipping="shipping" :currency="currency" />
    </div>
    <!-- /.container-fluid -->
  </div>

</template>

<script>
  import Invoice from '../components/Invoice'
  export default {
    components: {
      Invoice
    },
    data () {
      return {
        from: {
          name: 'John Doe',
          address: 'Lorem Address, 1',
          phone: '+1 555 666',
          email: 'john@doe.com'
        },
        to: {
          name: 'Sam Doe',
          address: 'Lorem Address, 1',
          phone: '+1 555 666',
          email: 'sam@doe.com'
        },
        invoice: {
          number: '#352356',
          orderID: '4F3S834dfdgJ',
          paymentDue: '2/25/2018',
          account: '9628-34xs467'
        },
        products: [
          {
            qty: 1,
            name: 'Product 1',
            code: '#45324',
            subtotal: 130
          },
          {
            qty: 2,
            name: 'Product 2',
            code: '#6546',
            subtotal: 24
          },
          {
            qty: 1,
            name: 'Product 3',
            code: '#24352',
            subtotal: 70
          },
          {
            qty: 1,
            name: 'Product 4',
            code: '#3245',
            subtotal: 93
          }
        ],
        shipping: 30,
        tax: 20,
        currency: '$'
      }
    }
  }
</script>
