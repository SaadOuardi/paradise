const menu = {
    Food :{
        Burgers:{
            CheeseBurger:"Cheeseburges",
            CheeseBurger:"Cheeseburges",
            CheeseBurger:"Cheeseburges",
            CheeseBurger:"Cheeseburges",
        },
        Pizzas:{

        }
    },
    Juice :{

    },

    Desert:{

    }
}


for( const all in menu.Food.Burgers){
    console.log(menu.Food.Burgers[all])
}