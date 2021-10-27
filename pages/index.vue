<template>
  <div>
    <Nav />
    <div class="container-narrow grid2 mt-2">
      <div class=" container">
        <div class="click">
          <div v-for="item in selected" :key="item.id" :class="`tile-file ${ current === item  ? 'selected' : ''}`" :style="`background: ${item.color}`" @click.prevent="setCurrent(item)">
            {{ item.id }}
          </div>

        </div>
        <p> {{ selected.length }} moves left. </p>
      </div>
      <div class="position-card">
        <div v-for="(k, i) in 9" :id="`${k}`" :key="i" class="tile" style="margin-bottom: 0px;box-shadow: 0 2px 8px rgb(33 33 33 / 40%);" @click.prevent="Replace(`${k}`,i)"></div>
      </div>
    </div>
    <div>
      <div v-show="success" class="display-3 text-center">
        💐
        <br>
        You win
      </div>
      <p v-show="error">Game finish, you close</p>
    </div>
  </div>

</template>

<script>
  import { adjantes, generateRandomColor } from '~/utils/helper.js'
import Nav from "~/components/UI/nav.vue";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      items: [],
      resultat: [],
      els: [],
      current: null,
      change: false,
      success: false,
      error: false
    }
  },
  computed: {
    selected () {
     return this.items.filter(({ id: id1 }) => !this.resultat.some(( { value: id2 } ) => id2 === id1))
    }
  },
  mounted() {
    if(this.items.length === 0) {
      for(let i = 1; i < 10; i++) {
        this.items.push({
          id: i,
          color: generateRandomColor(),
        })
      }
      return this.items
    }
  },
  methods: {
    setCurrent (id) {
      let content = document.querySelector('.position-card')
      content = Array.prototype.slice.call(content.children)
      this.addAttribute(content, this.els)
      content.forEach((el,i) => {
        this.els.forEach(function(e) {
         return i === e ? '' : el.classList.add("available")
        })
      })
      this.current = id
    },
    Replace(txt,index) {
      if(this.current){
        const id = document.getElementById(txt)
        const div = document.createElement('div')
        id.classList.add('border')
        div.classList.add('card-body')
        id.classList.remove('border')
        div.innerHTML = this.current.id
        id.style.background = this.current.color

        id.style.border = "none"
        id.appendChild(div)
        this.els.push({
          'id': parseInt(txt),
          'value': this.current.id
        })
        this.resultat.push({
          'id': parseInt(txt),
          'value': this.current.id
        })
        const content = Array.prototype.slice.call(document.querySelectorAll('.tile.available'))
        content.forEach(el => {
          el.classList.remove('available')
        })
        if(this.selected.length === 0) {
          this.VerifyArray(this.resultat)
        }
      }
      this.current = null
    },
    VerifyArray(arr) {
      const state = adjantes(arr)
      if(state) {
        this.success = true
      } else {
        this.error = true
      }
    },
    insert ( index, item ) {
      this.splice( index, 0, item );
    },
    addAttribute(arr, arr1) {
      arr.forEach((el,i) => {
        arr1.forEach(function(e) {
         return i === e ? '':el.classList.add("available")
        })
      })
    },
    removeAttribute(arr) {
      arr.forEach((el) => {
        el.classList.remove("available")
      })
    }
  }
}
</script>

<style>
.click > * + * {
  margin-left: calc(var(--space) * 2);
}
.selected {
  border: dashed black !important;
}

.tile {
  display: inline-block;
  height: 100px;
  width: 100px;
  font-size: 40px;
  line-height: 1;
  text-align: center;
  padding: 30px;
  box-shadow: 0 2px 8px rgb(33 33 33 / 40%);
  border-radius: 5px;
  transition: all .4s ease-in;
  border: 4px solid transparent;
}

.tile-file {
  display: inline-block;
    height: 60px;
    width: 60px;
    font-size: 30px;
    line-height: 1;
    padding: 13px;
    text-align: center;
    cursor: pointer;
    border: 4px dashed transparent;
}

.position-card {
  display: grid;
  grid-template-columns: repeat(3,100px);
  grid-gap: 30px;
}

.tile.available:hover {
  border: 4px dashed #add8e6;
}
</style>

