const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

// const handler = (req, res)=>{
//     res.send('Hello world from my second node app')
// };

// app.get('/', handler)

app.get('/', (req,res) =>{
    res.send('I am excited to learn node experss and asjdfk')
});

const users = [
    {id:0, name: "json", email: "json@gmail.com", phone:"017888888888"},
    {id:1, name: "jonson", email: "jonson@gmail.com", phone:"017888888888"},
    {id: 2, name: "jakis", email: "jakis@gmail.com", phone: "017888888888"},
    {id: 3, name: "jack", email: "jack@gmail.com", phone: "017888888888"}
    
];

app.get('/users', (req, res)=>{
    // use query parametar
    const search = req.query.search;
    if(search){
        const searchResult = users.find(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users);
    }
});

app.get('/users', (req, res) =>{
    res.send(users)
})
// app method 
app.post('/users', (req, res) =>{
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('hiting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// use dinamic api 
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res)=>{
    res.send(["banana", "mango", "jackfruit", "cocont"])
})

app.get('/fruits/mango', (req, res)=>{
    res.send(['fazli', 'gopalvog', 'amrupai', 'khissa'])
})


app.get('/fruits/mango/fazli', (req, res)=>{
    res.send(["fazli aam"])
})

app.listen(port, ()=>{
    console.log('example app listening', port)
})