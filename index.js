const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
        // req merupakan variabel yang berisi data request
        // res merupakan variabel yang berisi data response dari end-point
     // membuat objek yang berisi data yang akan dijadikan response
        let response = {
                message: "Ini end-point pertama ku",
                method: req.method,
                code: res.statusCode
            }
        
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
        })

        // menjalankan server pada port 8000
app.listen(8000, () => {
        console.log("Server run on port 8000");
    })

    // endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
        // :name dan :age  diberikan titik dua didepan menunjukkan "name" dan "age" 
        // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
    
        // menampung data yang dikirimkan
        let name = req.params.name // mengambil nilai pada parameter name
        let age = req.params.age // mengambil nilai pada parameter age
    
        // membuat objek yang berisi data yang akan dijadikan response
        // response berisi data nama dan umur sesuai dengan nilai parameter
        let response = {
            nama: name,
            umur: age
        }
    
        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
    
    })

    // end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
        // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
        let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
        let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    
        let luas = panjang * lebar
        let keliling = 2 * (panjang + lebar)
    
        // membuat objek yang berisi data yang akan dijadikan response
        let response = {
            panjang: panjang,
            lebar: lebar,
            luas: luas,
            keliling: keliling
        }
    
        // memberikan response dengan format JSON yang berisi objek di atas
        res.json(response)
    })


// bangun ruang tabung
app.post("/tabung", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) 
    let tinggi = Number(req.body.tinggi) 
    let volume = 3.14 * (jarijari**2) * tinggi
    let luas_permukaan = 2 * 3.14 * jarijari * (jarijari + tinggi)

    //membuat objek ynag berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// bangun ruang kerucut
app.post("/kerucut", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) 
    let tinggi = Number(req.body.tinggi) 
    let volume = 1/3 * 3.14 * (jarijari**2) * tinggi
    let luas_permukaan = 3.14 * jarijari * (jarijari + tinggi)

    //membuat objek ynag berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// bangun ruang bola
app.post("/bola", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari)
    let volume = 4/3 * 3.14 * (jarijari**3)
    let luas_permukaan = 4 * 3.14 * (jarijari**2)

    //membuat objek ynag berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// bangun ruang balok
app.post("/balok", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luas_permukaan = (2 * panjang * lebar) + (2 * panjang * tinggi) + (2 * tinggi * lebar)
    let volume = panjang * lebar * tinggi

    //membuat objek ynag berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    //memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})




app.get("/convert/celcius/:brpcelcius", (req,res) => {

    let brpcelcius = req.params.brpcelcius

    let reamur = 4/5 * brpcelcius
    let fahrenheit = 9/5 * brpcelcius + 32
    let kelvin = 1 * brpcelcius + 273
        
    let response = {
                celcius: brpcelcius,
                result: {
                    reamur: reamur,
                    fahrenheit: fahrenheit,
                    kelvin: kelvin
                }   
            }
        
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
        
    })

app.get("/convert/reamur/:brpreamur", (req,res) => {

    let brpreamur = req.params.brpreamur

    let celcius = 5/4 * brpreamur
    let fahrenheit = 9/4 * brpreamur + 32
    let kelvin = 5/4 * brpreamur + 273
        
    let response = {
                reamur: brpreamur,
                result: {
                    celcius: celcius,
                    fahrenheit: fahrenheit,
                    kelvin: kelvin
                }   
            }
        
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
        
    })

app.get("/convert/kelvin/:brpkelvin", (req,res) => {

    let brpkelvin = req.params.brpkelvin

    let celcius = 1 * brpkelvin - 273
    let fahrenheit = 9/5 * (brpkelvin - 273 ) + 32
    let reamur = 4/5 * (brpkelvin - 273)
        
    let response = {
                kelvin: brpkelvin,
                result: {
                    celcius: celcius,
                    fahrenheit: fahrenheit,
                    reamur: reamur
                }   
            }
        
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
        
    })

app.get("/convert/fahrenheit/:brpfahrenheit", (req,res) => {

    let brpfahrenheit = req.params.brpfahrenheit

    let celcius = 5/9 * (brpfahrenheit - 32)
    let reamur = 4/9 * (brpfahrenheit - 32)
    let kelvin = 5/9 * (brpfahrenheit - 32) + 273
        
    let response = {
                fahrenheit: brpfahrenheit,
                result: {
                    celcius: celcius,
                    reamur: reamur,
                    kelvin: kelvin
                }   
            }
        
            // memberikan response dengan format JSON yang berisi objek di atas
            res.json(response)
        
    })


app.post("/desimal",(req,res) => {
    var bilangan = parseInt(req.body.bilangan)
    let hexadesimal =  (bilangan).toString(16)
    let oktal = (bilangan).toString(8)
    let biner = (bilangan).toString(2)
  
    res.json({
      Desimal : bilangan,
      Hexadesimal : hexadesimal,
      oktal : oktal,
      biner : biner
    })
  })
  
  app.post("/biner",(req,res) => {
    var bilangan = parseInt(req.body.bilangan)
    let desimal = parseInt(bilangan, 2)
    let hexadesimal = (desimal).toString(16)
    let oktal = (desimal).toString(8)
  
    res.json({
      Biner : bilangan,
      Hexadesimal : hexadesimal,
      Oktal : oktal,
      Desimal : desimal
    })
  })
  
  app.post("/oktal",(req,res) => {
    var bilangan = parseInt(req.body.bilangan)
    let desimal = parseInt(bilangan, 8)
    let hexadesimal = (desimal).toString(16)
    let biner = (desimal).toString(2)
  
    res.json({
      Oktal : bilangan,
      Hexadesimal : hexadesimal,
      Biner : biner,
      Desimal : desimal
    })
  })
  
  app.post("/hexadesimal",(req,res) => {
    var bilangan = parseInt(req.body.bilangan)
    let desimal = parseInt(bilangan, 16)
    let oktal = (desimal).toString(8)
    let biner = (desimal).toString(2)
  
    res.json({
      Hexadesimal : bilangan,
      Biner : biner,
      Oktal : oktal,
      Desimal : desimal
    })
  })


app.post("/bmi", (req, res) => {
    let beratbadan = Number(req.body.beratbadan)
    let tinggibadan = Number(req.body.tinggibadan)

    let bmi = beratbadan / (tinggibadan * tinggibadan)

    var status = status
    if (bmi < 18.5) {
        status = "Kekurangan berat badan"
    } else if (bmi < 25) {
        status = "Normal (Ideal)"
    } else if (bmi < 30) {
        status = "Kelebihan Berat Badan"
    } else {
        status = "Kegemukan (Obesitas)"
    }

    let response = {
        tinggi: tinggibadan,
        berat: beratbadan,
        bmi: bmi,
        status: status
    }

    res.json(response)
})

