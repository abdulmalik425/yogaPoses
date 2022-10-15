const e = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const poses = {
    'happybaby':{
        'pose': 'Happy Baby',
        'description': 'On your back lift your legs',
        'quote': 'We got this, happiness'
    },
    'cow pose':{
        'pose': 'Cow',
        'description': 'In a crawl position, lift your back toward the sky',
        'quote': 'Winners, Win :P'
    },
    'unknown':{
        'pose': 'unknown' ,
        'description': 'unknown',
        'quote': 'unknown' ,
    }

}
app.get('/api/:name', (request, response) => {
    const yogaPoseName = request.params.name.toLowerCase()
    
    if(poses[yogaPoseName]){
        response.json(poses[yogaPoseName])
    }else{
        response.json(poses['unknown'])
    }
})

app.get('/api', (request, response)=>{
    response.json(poses)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Lets get to the money!`)
})