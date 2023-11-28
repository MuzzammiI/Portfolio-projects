function CoinData() {
  const url = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"
  );
  let table_item = document.querySelector("#table-item");

  url
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let tablecoins = "";
      for (let i = 0; i < data.length; i++) {
        tablecoins += `<tr>
            <td>${i}</td>
            <td><img src="${data[i]}" alt="${data[i].name}" width="30px"><span>${data[i].name}</span><span>${data[i].symbol}</span></td>
            <td>${data[i].current_price}</td>
            <td>${data[i].market_cap}</td>
            <td>${data[i].total_volume}</td>
            <td>${data[i].usd_24h_change}</td>
            <td>${data[i].last_updated_at}</td>
            </tr>`;
      }
      table_item.innerHTML = tablecoins;
    })
    .catch((error) => {
      console.log(error);
    });
}
CoinData();
// window.$ = window.jquery = require('./node_modules/jquery');
// window.dt = require('./node_modules/datatables.net')();
// window.$('#table_id').DataTable();
// let table = new DataTable('#myTable');

// {x
//     "bitcoin": {
//       "usd": 36975.76078796985,
//       "usd_market_cap": 722699695378.4955,
//       "usd_24h_vol": 19279154064.775517,
//       "usd_24h_change": -1.140883711906825,
//       "last_updated_at": 1701162443
//     }
//   }
