/**
 * generateur de coleurs aléatoire
 * @returns { String }
 */
export function generateRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

/**
 * permettant si le trie du tableau est bien places dans un sense adjasants
 * @param { Array } items
 */
export function adjantes(items) {
  const arr = [[{
    "id": 5,
    "value": 1
  },
  {
    "id": 3,
    "value": 2
  },
  {
    "id": 6,
    "value": 3
  },
  {
    "id": 2,
    "value": 4
  },
  {
    "id": 1,
    "value": 5
  },
  {
    "id": 4,
    "value": 6
  },
  {
    "id": 7,
    "value": 7
  },
  {
    "id": 8,
    "value": 8
  },
  {
    "id": 9,
    "value": 9
  }], [{
    "id": 1,
    "value": 1
  },
  {
    "id": 2,
    "value": 2
  },
  {
    "id": 3,
    "value": 3
  },
  {
    "id": 6,
    "value": 4
  },
  {
    "id": 5,
    "value": 5
  },
  {
    "id": 4,
    "value": 6
  },
  {
    "id": 7,
    "value": 7
  },
  {
    "id": 8,
    "value": 8
  },
  {
    "id": 9,
    "value": 9
  }], [{
    "id": 5,
    "value": 9
  },
  {
    "id": 3,
    "value": 8
  },
  {
    "id": 6,
    "value": 7
  },
  {
    "id": 2,
    "value": 6
  },
  {
    "id": 1,
    "value": 5
  },
  {
    "id": 4,
    "value": 4
  },
  {
    "id": 7,
    "value": 3
  },
  {
    "id": 8,
    "value": 2
  },
  {
    "id": 9,
    "value": 1
  }], [{
    "id": 1,
    "value": 9
  },
  {
    "id": 2,
    "value": 8
  },
  {
    "id": 3,
    "value": 7
  },
  {
    "id": 6,
    "value": 6
  },
  {
    "id": 5,
    "value": 5
  },
  {
    "id": 4,
    "value": 4
  },
  {
    "id": 7,
    "value": 3
  },
  {
    "id": 8,
    "value": 2
  },
  {
    "id": 9,
    "value": 1
  }]]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === items.length) {
      let j = 0;
      while (j < items.length && items[j].id === arr[i][j].id && items[j].value === arr[i][j].value) j++;
      if (j === items.length) return true;
    }
  }
  return false;
}
