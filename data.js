import bcrypt from 'bcrypt';
const data={
    users:[
        { 
            name:'Lina',
            email:'laroussilina056@gmail.com',
            password:bcrypt.hashSync('12345' , 8),
            isAdmin:true,
        },
        { 
            name:'Rouaida',
            email:'Rouaida056@gmail.com',
            password:bcrypt.hashSync('123' , 8),
            isAdmin:false,
        },
    ],

    products:[
        {
            name:'Madame Bovary',
            Type:'Amour',
            image:'/images/book1.jpg',
            price:30,
            brand:'book',
            rating:4.5,
            numReviews:10,
            description:'very interesting novel to read',
            countInStock:0

        },
         {
            
            name:'Le rouge et le noir',
            Type:'Amour',
            image:'/images/book2.jpg',
            price:40,
            brand:'book',
            rating:4,
            numReviews:14,
            description:'very interesting novel to read',
            countInStock:14

        },
         {
            
            name:'Ana karenina',
            Type:'Amour',
            image:'/images/book7.jpg',
            price:80,
            brand:'book',
            rating:4.5,
            numReviews:15,
            description:'very interesting novel to read',
            countInStock:13


        },
         {
           
            name:'Ce que le jour doit à la nuit',
            Type:'Amour',
            image:'/images/book4.jpg',
            price:39,
            brand:'book',
            rating:4,
            numReviews:20,
            description:'very interesting novel to read',
            countInStock:1

        },
         {
            
            name:'Seras tu la',
            Type:'Amour',
            image:'/images/book6.jpg',
            price:35,
            brand:'book',
            rating:3.5,
            numReviews:20,
            description:'very interesting novel to read',
            countInStock:8

        },
         {
            
            name:'sense and sensibility',
            Type:'Amour',
            image:'/images/book5.jpg',
            price:60,
            brand:'book',
            rating:4,
            numReviews:5,
            description:'very interesting novel to read',
            countInStock:7

        },
         {
            
            name:'The secret Adversary',
            Type:'Policier',
            image:'/images/book8.jpg',
            price:80,
            brand:'book',
            rating:3.5,
            numReviews:8,
            description:'very interesting novel to read',
            countInStock:5

        },
         {
            
            name:'Sparkling Cyanide',
            Type:'Policier',
            image:'/images/book11.jpg',
            price:80,
            brand:'book',
            rating:2,
            numReviews:18,
            description:'very interesting novel to read',
            countInStock:5

        },
         {
            
            name:'Loin de vous ce printemps',
            Type:'Policier',
            image:'/images/book10.jpg',
            price:70,
            brand:'book',
            rating:4.5,
            numReviews:10,
            description:'very interesting novel to read',
            countInStock:20


        },
         {
            
            name:'La femme qui en savait trop',
            Type:'Autobigraphie',
            image:'/images/book13.jpg',
            price:60,
            brand:'book',
            rating:4,
            numReviews:18,
            description:'very interesting novel to read',
            countInStock:10

        },
         {
            
            name:'La petite maision dans la prairie',
            Type:'Autobigraphie',
            image:'/images/book12.jpg',
            price:45,
            brand:'book',
            rating:5,
            numReviews:20,
            description:'very interesting novel to read',
            countInStock:0

        },
         {
            
            name:'La reine des lumiéres',
            Type:'Autobiographie',
            image:'/images/book14.jpg',
            price:50,
            brand:'book',
            rating:4.5,
            numReviews:9,
            description:'very interesting novel to read',
            countInStock:0

        },
         {
            
            name:'Le monde des réves',
            Type:'Science fiction',
            image:'/images/book15.jpg',
            price:150,
            brand:'book',
            rating:5,
            numReviews:10,
            description:'very interesting novel to read',
            countInStock:1

        },
         {
            
            name:'Hisper Tintin',
            Type:'Bande dessiné',
            image:'/images/book16.jpg',
            price:90,
            brand:'book',
            rating:3,
            numReviews:12,
            description:'very interesting novel to read',
            countInStock:2

        },
         {
            
            name:'Tintin en Afrique',
            Type:'Bande dessiné',
            image:'/images/book19.jpg',
            price:160,
            brand:'book',
            rating:3.5,
            numReviews:11,
            description:'very interesting novel to read',
            countInStock:6

        },
         {
            
            name:'La Princesse Sarah',
            Type:'Bande dessiné',
            image:'/images/book18.jpg',
            price:100,
            brand:'book',
            rating:2.5,
            numReviews:13,
            description:'very interesting novel to read',
            countInStock:5

        },
    ]
}

export default data;