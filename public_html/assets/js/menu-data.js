/* =========================================================================
   DELHI PALACE  |  Menu data
   Transcribed from thedelhipalace.ca/menu
   Edit prices and dishes here only. menu.html renders straight from this file.
   Fields: name, price, variants (optional), desc
   Section photos are NOT here. They live in images.py -> CATEGORY
   ========================================================================= */

const MENU = [
{
  id:"tandoori-non-veg", fm:"tandoori-non-veg-appetizers", title:"Tandoori Non-Veg",
  items:[
    {name:"Fish Tikka", price:"$18", desc:"Tender chunks of fish marinated in yogurt, lemon and aromatic spices, grilled with a light smoky char."},
    {name:"Chicken Tikka Platter", price:"$20", desc:"Three types of boneless, juicy marinated chicken pieces grilled to a smoky finish."},
    {name:"Chef's Special Non-Veg Platter", price:"$20", desc:"Lamb seekh kebab, chicken seekh kebab and fish tikka served with house-made chutneys."},
    {name:"Lamb Seekh Kebab", price:"$18", desc:"Juicy minced lamb blended with aromatic spices, skewered and grilled in the tandoor."},
    {name:"Chicken Seekh Kebab", price:"$17", desc:"Minced chicken blended with aromatic spices, skewered and grilled for a tender, smoky bite."},
    {name:"Tandoori Shrimp", price:"$21", desc:"Tiger shrimp marinated with roasted chickpea flour and fresh spices, cooked in the tandoor."},
    {name:"Chicken Tikka", price:"$18", desc:"Tender chicken marinated in yogurt and spices, grilled in the tandoor for a smoky finish."},
    {name:"Chicken Malai Tikka", price:"$18", desc:"Chicken marinated in cream, cheese and mild spices, grilled to a rich, creamy perfection."},
    {name:"Chicken Hariyali Tikka", price:"$18", desc:"Chicken marinated in fresh herbs, mint and green spices, grilled for a vibrant, juicy bite."},
    {name:"Tandoori Chicken", price:"$10 / $18", variants:"2 PCS / 4 PCS", desc:"Marinated thighs and drumsticks cooked in the tandoor, served with salad and chutneys."}
  ]
},
{
  id:"tandoori-veg", fm:"tandoori-veg-appetizers", title:"Tandoori Veg",
  items:[
    {name:"Tandoori Veg Platter", price:"$19", desc:"Assorted cottage cheese, mushrooms and soya chaap skewered in the tandoor."},
    {name:"Paneer Tikka", price:"$18", desc:"Soft paneer cubes marinated in spiced yogurt, grilled in the tandoor for a smoky finish."},
    {name:"Hariyali Paneer Tikka", price:"$18", desc:"Paneer marinated in fresh mint, herbs and spices, grilled for a refreshing, smoky flavour."},
    {name:"Tandoori Mushrooms", price:"$17", desc:"Juicy mushrooms marinated in spiced yogurt and herbs, grilled for a smoky, flavourful bite."},
    {name:"Malai Soya Chaap", price:"$17", desc:"Soya chaap in cream, cheese and mild spices, grilled for a rich, soft, smoky finish."},
    {name:"Tandoori Soya Tikka", price:"$17", desc:"Tender soya chaap marinated in yogurt with Indian herbs and spices, cooked in the tandoor."}
  ]
},
{
  id:"soups", fm:"soups", title:"Soups",
  items:[
    {name:"Cream of Tomato Soup", price:"$6", desc:"Smooth, velvety tomato soup with ripe tomatoes, cream and mild spices."},
    {name:"Tomato Dhania Shorba", price:"$6", desc:"Light, tangy tomato shorba infused with aromatic Indian spices and herbs."},
    {name:"Manchow Soup", price:"$6 / $7 / $8", variants:"VEG / CHICKEN / SHRIMP", desc:"Indo-Chinese soup loaded with vegetables, herbs and crispy noodles."},
    {name:"Hot &amp; Sour Soup", price:"$6 / $7 / $8", variants:"VEG / CHICKEN / SHRIMP", desc:"A bold Indo-Chinese soup balancing spicy heat and tang, loaded with vegetables."},
    {name:"Lentil Soup", price:"$6", desc:"Slow-cooked lentils blended with aromatic spices and herbs, hearty and comforting."}
  ]
},
{
  id:"momo-dumplings", fm:"momo-dumplings", title:"Momo / Dumplings",
  items:[
    {name:"Tandoori Momos", price:"$16 / $17", variants:"VEG / CHICKEN", desc:"Steamed dumplings tossed in bold tandoori spices and roasted to a smoky finish."},
    {name:"Honey Chilli Momos", price:"$16 / $17", variants:"VEG / CHICKEN", desc:"Momos tossed in a sweet-and-spicy honey chilli sauce for a bold Indo-Chinese twist."},
    {name:"Chilli Garlic Momos", price:"$16 / $17", variants:"VEG / CHICKEN", desc:"Deep-fried momos tossed in a spicy garlic chilli sauce with a fiery kick."},
    {name:"Manchurian Style Momos", price:"$16 / $17", variants:"VEG / CHICKEN", desc:"Deep-fried momos tossed in a rich, tangy Manchurian sauce with garlic and spices."},
    {name:"Steamed / Fried Momos", price:"$14 / $16", variants:"VEG / CHICKEN", desc:"Veggie or chicken dumplings served with our special hot garlic sauce."}
  ]
},
{
  id:"indian-appetizers", fm:"indian-appetizers", title:"Indian Appetizers",
  items:[
    {name:"Masala Papad", price:"$6", desc:"Two fried papads served with onions, tomatoes, cucumber and coriander."},
    {name:"Veg. Samosa", price:"$5", desc:"Crispy pastry filled with spiced potatoes and peas, deep-fried until golden."},
    {name:"Veg. Pakora", price:"$10", desc:"Mixed vegetable fritters in seasoned chickpea batter, deep-fried until crunchy."},
    {name:"Chicken Pakora", price:"$15", desc:"Tender chicken in spiced chickpea batter, deep-fried until crispy and golden."},
    {name:"Fish Amritsari", price:"$16", desc:"Crispy battered fish marinated in traditional Amritsari spices, fried to perfection."},
    {name:"Chaat Papri", price:"$8", desc:"Crispy papdi with potatoes, chickpeas, yogurt, chutneys and spices, sweet, tangy, crunchy."},
    {name:"Pani Poori", price:"$8", desc:"Crispy puris filled with spicy-tangy water, potatoes and chutneys."},
    {name:"Dahi Bhalla", price:"$7", desc:"Soft lentil dumplings in creamy yogurt with tangy chutneys and spices."},
    {name:"Vada Pav", price:"$5", desc:"Spiced potato fritter in a soft bun with chutneys and fried chilli, a Mumbai classic."},
    {name:"Pav Bhaji", price:"$10", desc:"Rich, spiced vegetable mash in butter, served with toasted pav buns."},
    {name:"Aloo Tikki", price:"$10", desc:"Spiced potato patties pan-fried to perfection, served with tangy chutneys."},
    {name:"Aloo Tikki Chaat", price:"$8", desc:"Mashed potato patties topped with yogurt, chutneys and Indian spices."},
    {name:"Samosa Chana Chaat", price:"$7", desc:"Crispy samosa topped with spiced chickpeas, yogurt and tangy chutneys."},
    {name:"French Fries", price:"$6", desc:"Golden, crispy fries lightly seasoned and fried to perfection."}
  ]
},
{
  id:"hakka-appetizers", fm:"hakka-appetizers", title:"Hakka Appetizers",
  items:[
    {name:"Crispy Honey Chilli Cauliflower", price:"$17", desc:"Crispy cauliflower florets in a sweet-and-spicy honey chilli glaze."},
    {name:"Crispy Honey Chilli Potato", price:"$12", desc:"Crispy fried potatoes in a sweet-and-spicy honey chilli sauce."},
    {name:"Chicken Honey Wings", price:"$18", desc:"Batter-fried chicken wings sauteed in Chef's special sweet-and-spicy sauce."},
    {name:"Manchurian Style Chicken Wings", price:"$18", desc:"Batter-fried wings sauteed with onions and bell peppers in a Manchurian sauce."},
    {name:"Veg. Spring Rolls", price:"$8", desc:"Crispy golden rolls filled with finely chopped vegetables and Asian spices."},
    {name:"Manchurian Dry", price:"$15 / $16 / $18", variants:"VEG / CAULIFLOWER / CHICKEN", desc:"Batter-fried dumplings sauteed with onions and bell peppers in a Manchurian sauce."},
    {name:"Chilli Dry", price:"$18", variants:"PANEER / CHICKEN / FISH", desc:"Battered protein sauteed with julienne onions, bell peppers, ginger, garlic and chillies."}
  ]
},
{
  id:"indian-non-veg-mains", fm:"indian-non-vegetarian-mains", title:"Indian Non-Veg Mains",
  items:[
    {name:"Butter Chicken", price:"$18 / $15", variants:"BONELESS / WITH BONE", desc:"Tender chicken in a rich, creamy tomato-butter gravy with aromatic spices."},
    {name:"Mango Chicken Curry", price:"$18", desc:"Chicken simmered in a curry sauce with ripe mango, ginger and aromatic spices."},
    {name:"Kadhai Chicken", price:"$18", desc:"Chicken in an aromatic tomato-onion gravy with bell peppers and traditional spices."},
    {name:"Kadhai", price:"$19 / $18 / $20", variants:"LAMB / GOAT / SHRIMP", desc:"Tender meat in a rich onion-based gravy with bell peppers and aromatic spices."},
    {name:"Chicken Tikka Masala", price:"$18", desc:"Chicken tikka in a rich, creamy tomato-based gravy, a smooth North Indian classic."},
    {name:"Madras", price:"$18 / $19", variants:"CHICKEN / LAMB", desc:"Cooked in an onion-based gravy with mustard seeds and a coconut flavour."},
    {name:"Chicken Curry", price:"$17", desc:"Chicken simmered in a spiced onion-tomato gravy with aromatic Indian herbs."},
    {name:"Chicken Malai Methi", price:"$18", desc:"Chicken in a creamy sauce with fresh fenugreek (methi) and mild spices."},
    {name:"Chicken Shahi Korma", price:"$18", desc:"Chicken slow-cooked in a rich cashew-and-yogurt gravy with aromatic spices."},
    {name:"Vindaloo", price:"$18 / $19", variants:"CHICKEN / LAMB", desc:"A fiery Goan-style curry with bold spices and vinegar, tangy, hot and flavourful."},
    {name:"Chicken Jalfrezi", price:"$19", desc:"Stir-fried chicken with bell peppers, onions and spices in a tangy tomato sauce."},
    {name:"Chicken Lababdar", price:"$18", desc:"Chicken in a rich, creamy tomato gravy, smooth, mildly sweet and indulgent."},
    {name:"Saag", price:"$18 / $19 / $18", variants:"CHICKEN / LAMB / GOAT", desc:"Cooked in a rich, spiced spinach (saag) gravy with garlic and Indian herbs."},
    {name:"Rara", price:"$18 / $19", variants:"CHICKEN / LAMB", desc:"Boneless meat cooked with minced meat in a rich, spicy onion-tomato gravy."},
    {name:"Rogan Josh", price:"$19 / $18", variants:"LAMB / GOAT", desc:"A Kashmiri curry of tender meat slow-cooked in a rich, aromatic gravy."},
    {name:"Bhuna Gosht", price:"$19 / $18", variants:"LAMB / GOAT", desc:"Tender meat slow-cooked with onions, tomatoes and spices until thick and deep."},
    {name:"Fish Curry / Masala", price:"$17", desc:"Fish simmered in a spiced onion-tomato masala gravy with aromatic Indian spices."},
    {name:"Goan Fish Curry", price:"$17", desc:"A traditional Goan-style curry of tender fish in a tangy coconut-based gravy."}
  ]
},
{
  id:"indian-veg-mains", fm:"indian-vegetarian-mains", title:"Indian Veg Mains",
  items:[
    {name:"Kadhai Paneer", price:"$17", desc:"Soft paneer in a spicy onion-tomato gravy with bell peppers and aromatic spices."},
    {name:"Paneer Tikka Masala", price:"$18", desc:"Grilled paneer tikka in a rich, creamy tomato-based gravy, a North Indian classic."},
    {name:"Soya Tikka Masala", price:"$17", desc:"Soya chaap tikka in a creamy tomato gravy with bell peppers, onions and spices."},
    {name:"Shahi Paneer", price:"$17", desc:"Paneer in a rich, creamy cashew-and-tomato gravy with aromatic Mughlai spices."},
    {name:"Adraki Dhaniya Paneer", price:"$17", desc:"Paneer in a fragrant ginger (adrak) and fresh coriander (dhaniya) gravy."},
    {name:"Paneer Makhni", price:"$17", desc:"Paneer in a rich, creamy tomato-butter gravy with aromatic spices."},
    {name:"Palak Paneer", price:"$18", desc:"Paneer in a smooth, spiced spinach (palak) gravy with garlic and Indian herbs."},
    {name:"Paneer Lababdar", price:"$17", desc:"Paneer in a creamy tomato-cashew gravy with onions and bell peppers."},
    {name:"Mutter Paneer", price:"$17", desc:"Paneer and green peas in a spiced tomato-based gravy with aromatic spices."},
    {name:"Malai Kofta", price:"$17", desc:"Paneer-and-potato koftas in a rich cashew-and-tomato gravy with Mughlai spices."},
    {name:"Mutter Malai Methi", price:"$17", desc:"Grated cottage cheese in a cashew sauce with peas and crushed fenugreek."},
    {name:"Veg. Jalfrezi", price:"$16", desc:"Fresh vegetables sauteed with bell peppers and onions in a tangy tomato gravy."},
    {name:"Mixed Vegetables", price:"$16", desc:"Fresh seasonal vegetables in a lightly spiced, comforting home-style gravy."},
    {name:"Navratan Korma", price:"$16", desc:"A creamy Mughlai curry with vegetables, nuts and fruit in a mild cashew gravy."},
    {name:"Chana Masala", price:"$15", desc:"Chickpeas in a tangy onion-tomato gravy with aromatic Indian spices."},
    {name:"Eggplant Bhartha", price:"$16", desc:"Smoky roasted eggplant mashed with onions, tomatoes and aromatic spices."},
    {name:"Bhindi Masala", price:"$16", desc:"Tender okra sauteed with onions, tomatoes and aromatic Indian spices."},
    {name:"Mushroom Masala", price:"$16", desc:"Fresh mushrooms in a rich, spiced onion-tomato gravy."},
    {name:"Aloo Gobhi Masala", price:"$16", desc:"Potatoes and cauliflower cooked with onions, tomatoes and aromatic spices."},
    {name:"Dal Makhni", price:"$15", desc:"Slow-cooked black lentils with butter, cream and aromatic spices."},
    {name:"Yellow Dal Tadka", price:"$14", desc:"Comforting yellow lentils cooked with mild spices, garlic and herbs."},
    {name:"Dal Panchrangi", price:"$14", desc:"House-special slow-cooked mixed lentils with traditional spices and herbs."},
    {name:"Chana Bhatura", price:"$13", desc:"Fluffy deep-fried bhatura served with chickpea curry, pickles and onions."},
    {name:"Amritsari Chana Kulcha", price:"$15", desc:"Stuffed kulcha with spicy chickpea curry, pickles and onions."},
    {name:"Kaju Butter Masala", price:"$19", variants:"CHEF'S SPECIAL", desc:"Chef's special — whole cashews simmered in a rich, buttery tomato-cream masala."}
  ]
},
{
  id:"hakka-mains", fm:"hakka-mains", title:"Hakka Mains",
  items:[
    {name:"Hakka Noodles", price:"$15 / $16 / $18", variants:"VEG / CHICKEN / SHRIMP", desc:"Stir-fried noodles with fresh vegetables, soy sauce and Indo-Chinese spices."},
    {name:"Chilli Garlic Noodles", price:"$15 / $16 / $18", variants:"VEG / CHICKEN / SHRIMP", desc:"Stir-fried noodles with spicy chilli, garlic and fresh vegetables."},
    {name:"Hakka Fried Rice", price:"$15 / $16 / $18", variants:"VEG / CHICKEN / SHRIMP", desc:"Stir-fried rice with fresh vegetables, soy sauce and Indo-Chinese spices."},
    {name:"Chilli Garlic Fried Rice", price:"$16 / $17 / $18", variants:"VEG / CHICKEN / SHRIMP", desc:"Stir-fried rice with spicy chilli, garlic and fresh vegetables."},
    {name:"Manchurian Gravy", price:"$15 / $17", variants:"VEG / CHICKEN", desc:"Simmered in a rich, tangy soy-based gravy with garlic, ginger and spices."},
    {name:"Chilli Gravy", price:"$17 / $18 / $18", variants:"PANEER / CHICKEN / FISH", desc:"A spicy Indo-Chinese gravy with chilli, garlic, soy and aromatic spices."}
  ]
},
{
  id:"rice-biryani", fm:"rice-biryani", title:"Rice &amp; Biryani",
  items:[
    {name:"Steamed Rice", price:"$4", desc:"Soft, fluffy steamed basmati rice cooked to perfection."},
    {name:"Jeera Rice", price:"$5", desc:"Fragrant basmati rice tempered with cumin seeds and light spices."},
    {name:"Vegetable Pulao", price:"$9", desc:"Aromatic basmati rice cooked with fresh mixed vegetables and mild spices."},
    {name:"Vegetable Biryani", price:"$15", desc:"Fragrant basmati with fresh vegetables and aromatic spices. Served with raita."},
    {name:"Chicken Biryani", price:"$18", desc:"Fragrant basmati with tender chicken and aromatic spices. Served with raita."},
    {name:"Lamb / Goat Biryani", price:"$18", desc:"Fragrant basmati with tender, slow-cooked meat and aromatic spices. With raita."},
    {name:"Shrimp Biryani", price:"$20", desc:"Fragrant basmati with juicy shrimp and aromatic spices. Served with raita."}
  ]
},
{
  id:"breads", fm:"breads", title:"Breads",
  items:[
    {name:"Naan", price:"$3", desc:"Soft, fluffy Indian flatbread freshly baked in the tandoor."},
    {name:"Butter Naan", price:"$3", desc:"Soft naan freshly baked in the tandoor and brushed with melted butter."},
    {name:"Garlic Naan", price:"$4", desc:"Soft naan baked in the tandoor, topped with fresh garlic and butter."},
    {name:"House Naan", price:"$5", desc:"House-special naan with onions, garlic, coriander and chili flakes."},
    {name:"Tandoori Roti / Butter Roti", price:"$3", desc:"Whole-wheat flatbread baked in the tandoor."},
    {name:"Bhatura", price:"$3", desc:"Fluffy deep-fried Indian bread made from fermented dough."},
    {name:"Lachha Paratha", price:"$5", desc:"Layered whole-wheat bread cooked with butter, crisp outside, soft inside."},
    {name:"Aloo Paratha", price:"$6", desc:"Whole-wheat flatbread stuffed with spiced mashed potatoes."},
    {name:"Onion Kulcha", price:"$6", desc:"Soft leavened flatbread stuffed with spiced onions and herbs."},
    {name:"Paneer Kulcha", price:"$7", desc:"Tandoor-baked flatbread stuffed with spiced paneer, brushed with butter."},
    {name:"Keema Naan", price:"$10 / $12", variants:"CHICKEN / LAMB", desc:"Tandoor-baked naan stuffed with spiced minced meat, brushed with butter."}
  ]
},
{
  id:"sides", fm:"sides", title:"Sides",
  items:[
    {name:"Pav Bun", price:"$2", desc:""},
    {name:"Plain Yogurt", price:"$3", desc:"Fresh, house-made creamy yogurt."},
    {name:"Mixed Raita", price:"$4", desc:"Cool, refreshing yogurt with finely chopped vegetables and mild spices."},
    {name:"Plain Onions", price:"$2", desc:"Freshly sliced onions, crisp and raw."},
    {name:"Vinegar Onions", price:"$3", desc:"Onions soaked in vinegar and mild spices, tangy and zesty."},
    {name:"Lachha Pyaaz", price:"$3", desc:"Finely sliced onion seasoned with lemon, salt and spices."},
    {name:"Fresh Garden Salad", price:"$6", desc:"Cucumbers, onions, carrots, tomatoes and lemon with green chillies."},
    {name:"Achar", price:"$2", desc:"Traditional Indian mixed pickles."},
    {name:"Mango Chutney", price:"$2", desc:"Sweet-and-sour mango sauce."},
    {name:"Papad (roasted)", price:"$2", desc:""}
  ]
},
{
  id:"desserts", fm:"desserts", title:"Desserts",
  items:[
    {name:"Moong Dal Halwa", price:"$6", desc:"Slow-roasted moong dal with ghee, sugar and cardamom, garnished with nuts."},
    {name:"Gajar Ka Halwa", price:"$6", desc:"Grated carrots slow-cooked in milk, ghee and sugar with cardamom and nuts."},
    {name:"Gulab Jamun", price:"$5", desc:"Milk-solid sweet soaked in sugar syrup, served hot. 2 pieces."},
    {name:"Ras Malai", price:"$5", desc:"Cottage-cheese dumplings in sweetened thick milk, served cold. 2 pieces."},
    {name:"Sizzling Chocolate Brownie", price:"$9", desc:"Warm brownie with vanilla ice cream, chocolate and caramel sauce."},
    {name:"Ice Cream", price:"$5", variants:"VANILLA / CHOCOLATE / STRAWBERRY", desc:"Two scoops of your choice."}
  ]
},
{
  id:"drinks", fm:"pops", title:"Drinks",
  items:[
    {name:"Pops", fm:"pops", price:"$2.5", variants:"COKE / DIET COKE / SPRITE / GINGER ALE / COKE ZERO / ICED TEA", desc:"Chilled soft drinks served over ice."},
    {name:"Shakes", fm:"shakes", price:"$5", variants:"MANGO / CHOCOLATE / VANILLA / STRAWBERRY", desc:"Thick, creamy milkshakes blended fresh to order."},
    {name:"Lassi", fm:"lassi", price:"$5", variants:"SWEET / SALTED / MANGO / STRAWBERRY", desc:"Traditional churned yogurt drink, smooth, cooling and refreshing."},
    {name:"Juices", fm:"juices", price:"$4", variants:"MANGO / LYCHEE / PINEAPPLE / ORANGE / APPLE / CRANBERRY", desc:"Refreshing chilled fruit juices."},
    {name:"Smoothies", fm:"smoothies", price:"$5", variants:"MANGO / STRAWBERRY / VIRGIN PINA COLADA", desc:"Fruit blended with ice into a thick, refreshing smoothie."},
    {name:"Virgin Mojito", fm:"mocktails", price:"$6", variants:"MOCKTAIL", desc:"Fresh mint, lime, sugar and soda, crisp and refreshing."},
    {name:"Blue Mojito", fm:"mocktails", price:"$6", variants:"MOCKTAIL", desc:"Mint, lime, sugar, blue curacao and soda for a vibrant twist."},
    {name:"Lychee Sunrise", fm:"mocktails", price:"$6", variants:"MOCKTAIL", desc:"Lychee juice, Sprite and grenadine, sweet and fruity."},
    {name:"Pineapple Mint Cooler", fm:"mocktails", price:"$6", variants:"MOCKTAIL", desc:"Pineapple juice, mint, lime and soda, tropical and cooling."},
    {name:"Mango Tango", fm:"mocktails", price:"$6", variants:"MOCKTAIL", desc:"Mango juice, lime, Sprite and grenadine, sweet with a citrus kick."},
    {name:"Tropical Mint Delight", fm:"mocktails", price:"$6", variants:"MOCKTAIL", desc:"Mango and pineapple juices with mint, lime and soda."},
    {name:"Shirley Temple", fm:"mocktails", price:"$6", variants:"MOCKTAIL", desc:"Orange juice, Sprite and grenadine, a bubbly classic."},
    {name:"Masala Chai", fm:"tea-coffee", price:"$4", desc:"Traditional Indian tea brewed with milk, spices and herbs."},
    {name:"Green Tea", fm:"tea-coffee", price:"$4", desc:"Light, soothing green tea brewed fresh."},
    {name:"Mint Tea", fm:"tea-coffee", price:"$4", desc:"Refreshing tea infused with fresh mint leaves."},
    {name:"Coffee", fm:"tea-coffee", price:"$4", desc:"Freshly brewed hot coffee."}
  ]
}
,{
  id:"combo-thali", fm:"combo-thali", title:"Combo &amp; Thali",
  items:[
    {name:"Veg Thali", price:"$17", desc:"A complete vegetarian platter: curries of the day, dal, rice, bread, salad and dessert."},
    {name:"Non Veg Thali", price:"$18", desc:"A complete platter with a non-veg curry, dal, rice, bread, salad and dessert."},
    {name:"Rajma Rice", price:"$13.99", desc:"Slow-cooked red kidney bean curry served over steamed basmati rice."},
    {name:"Veg. Pasta", price:"$15", desc:"Pasta tossed in a spiced, creamy tomato sauce with fresh vegetables."},
    {name:"Chicken Pasta", price:"$16", desc:"Pasta tossed with tender chicken in a spiced, creamy tomato sauce."}
  ]
}
];
