<template>
  <div class="card-wrapper">
    <md-card>
      <md-card-header>
        <h2>
          {{ msg }}
        </h2>
        <div class="header">
          <div class="trinity">
            <md-autocomplete
              v-model="selectedCountry"
              :md-options="countries"
              required
            >
              <label>Country</label>
            </md-autocomplete>
          </div>
          <div class="trinity">
            <md-field>
              <label>Quantity</label>
              <md-input
                v-model="selectedQuantity"
                type="number"
                required
              ></md-input>
            </md-field>
          </div>
          <div class="trinity">
            <md-field>
              <label>Price</label>
              <span class="md-prefix">$</span>
              <md-input
                v-model="selectedPrice"
                type="number"
                required
              ></md-input>
            </md-field>
          </div>
        </div>
        <div class="left-handed">
          <div>
            <md-button
              type="submit"
              class="md-raised md-primary"
              @click="addToList"
            >
              Add Item
            </md-button>
          </div>
        </div>
      </md-card-header>

      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-head>Name</md-table-head>
            <md-table-head>Quantity</md-table-head>
            <md-table-head>Price</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>

          <md-table-row
            v-for="item in items"
            :key="item.id"
          >
            <md-table-cell>
              {{ item.name }}
            </md-table-cell>
            <md-table-cell
              v-if="item.edit"
            >
              <md-field>
                <md-input
                  v-model="item.quantity"
                  type="number"
                ></md-input>
              </md-field>
            </md-table-cell>
            <md-table-cell
              v-else
            >
              {{ item.quantity }}
            </md-table-cell>
            <md-table-cell
              v-if="item.edit"
            >
              <md-field>
                <md-input
                  v-model="item.price"
                  type="number"
                ></md-input>
              </md-field>
            </md-table-cell>
            <md-table-cell
              v-else
            >
              ${{ Intl.NumberFormat('ru-RU').format(item.price) }}
            </md-table-cell>
            <md-table-cell>
              <md-button
                v-if="item.edit"
                class="md-icon-button md-primary"
                @click="toggleEdit(item.id, item.name, item.quantity, item.price, item.edit)"
              >
                <img src="../assets/round-cancel-24px.svg">
              </md-button>
              <md-button
                v-else
                class="md-icon-button md-primary"
                @click="deleteFromList(item.id)"
              >
                <img src="../assets/round-delete-24px.svg">
              </md-button>
              <md-button
                v-if="item.edit"
                class="md-icon-button md-primary"
                @click="toggleEdit(item.id, item.name, item.quantity, item.price, item.edit)"
              >
                <img src="../assets/round-done-24px.svg">
              </md-button>
              <md-button
                v-else
                class="md-icon-button md-primary"
                @click="toggleEdit(item.id, item.name, item.quantity, item.price, item.edit)"
              >
                <img src="../assets/round-edit-24px.svg">
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table>
      </md-card-content>

      <md-card-actions>
        <h2>
          Summary: ${{ Intl.NumberFormat('ru-RU').format(summary) }}
        </h2>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data: () => ({
      selectedCountry: '',
      selectedQuantity: '',
      selectedPrice: '',
      countries: [
        'Algeria',
        'Argentina',
        'Brazil',
        'Canada',
        'Italy',
        'Japan',
        'United Kingdom',
        'United States'
      ],
      items: [],
    }),
    methods: {
      addToList() {
        this.items.push({
          id: this.items.length + 1,
          name: this.selectedCountry,
          quantity: this.selectedQuantity,
          price: this.selectedPrice,
          summ: this.selectedQuantity * this.selectedPrice,
          edit: false
        });
        this.selectedCountry = '';
        this.selectedQuantity = '';
        this.selectedPrice = '';
      },
      deleteFromList(id) {
        const newarr = _.reject(this.items, {id: id});
        this.items = newarr;
      },
      toggleEdit(id, name, quantity, price, edit) {
        const index = _.findIndex(this.items, {id: id});
        this.items.splice(index, 1, {
          id: id,
          name: name,
          quantity: quantity,
          price: price,
          summ: quantity * price,
          edit: !edit
        });
      }
    },
    computed: {
      summary() {
        const initialValue = 0;
        return this.items.reduce(
          (accumulator, currentValue) => accumulator + currentValue.summ,
          initialValue
        );
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    margin: 34px;
    font-weight: 300;
    font-size: 2.636em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .card-wrapper {
    justify-content: center;
  }
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .trinity {
    width: 30%;
  }
  .left-handed {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 13px;
  }
</style>
