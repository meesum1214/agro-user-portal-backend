// const app = require('express')();

// const { Pool, Client } = require('pg')


// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'cropdb',
//     password: '12345',
//     port: 5432,
// })


// app.get('/', (req, res) => {
//     pool.query('SELECT DISTINCT "cropNameEng","cropNameUrdu" FROM public.landcrops', (err, response) => {
//         console.log(err, response)
//         //   pool.end()
//         if (err) {
//             console.log(err);

//         }
//         else {
//             res.send(response.rows);
//         }
//     })
// })


// app.listen(5600, () => {
//     console.log('server started');
// })




// initialize puppeteer and open url google.com
// const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('https://www.fiverr.com');
//     // await page.screenshot({ path: 'google.png' });
//     // await browser.close();
// })();

