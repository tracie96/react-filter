
export const random =()=> {
  let arr = [ 
    {  
        "name":"Cheesecake Factory",
        "location":"Lagos",
        "cuisine":"American",
        "id":1
    },
    {  
        "name":"Shokolaat",
        "location":"Abuja",
        "cuisine":"American",
        "id":2
    },
    {  
        "name":"Gordon Biersch",
        "location":"Imo",
        "cuisine":"American",
        "id":3
    },
    {  
        "name":"Crepevine",
        "cuisine":"American",
        "location":"NewYork",
        "id":4
    },
    {  
        "name":"Creamery",
        "cuisine":"American",
        "location":"Gombe",
        "id":5
    },
    {  
        "name":"Old Pro",
        "cuisine":"American",
        "location":"Queens",
        "id":6
    },
    {  
        "name":"Nola\"s",
        "cuisine":"Cajun",
        "location":"Cajun Island",
        "id":7
    },
    {  
        "name":"House of Bagels",
        "cuisine":"Bagels",
        "location":"Kenya",
        "id":8
    },
    {  
        "name":"The Prolific Oven",
        "cuisine":"Sandwiches",
        "location":"Benin",
        "id":9
    },
    {  
        "name":"La Strada",
        "cuisine":"Italian",
        "location":"Italy",
        "id":10
    },
    {  
        "name":"Buca di Beppo",
        "cuisine":"Italian",
        "location":"Oyo",
        "id":11
    },
    {  
        "name":"Pasta?",
        "cuisine":"Italian",
        "location":"Sunnyville",
        "id":12
    },
    {  
        "name":"Madame Tam",
        "cuisine":"Asian",
        "location":"Jos",
        "id":13
    },
    {  
        "name":"Sprout Cafe",
        "cuisine":"Salad",
        "location":"Benue",
        "id":14
    },
    {  
        "name":"Pluto\"s",
        "cuisine":"Salad",
        "location":"Bini",
        "id":15
    },
    {  
        "name":"Junoon",
        "cuisine":"Indian",
        "location":"Lagos",
        "id":16
    },
    {  
        "name":"Bistro Maxine",
        "cuisine":"French",
        "location":"Benin",
        "id":17
    },
    {  
        "name":"Three Seasons",
        "cuisine":"Vietnamese",
        "location":"Vietnam",
        "id":18
    },
    {  
        "name":"Sancho\"s Taquira",
        "cuisine":"Mexican",
        "location":"Mexico",
        "id":19
    },
    {  
        "name":"Reposado",
        "cuisine":"Mexican",
        "location":"Mexico",
  
        "id":20
    },
    {  
        "name":"Siam Royal",
        "cuisine":"Thai",
        "location":"Thailand",
        "id":21
    },
    {  
        "name":"Krung Siam",
        "cuisine":"Thai",
        "location":"Thailand",
        "id":22
    },
    {  
        "name":"Thaiphoon",
        "cuisine":"Thai",
        "location":"Thailand",
        "id":23
    },
    {  
        "name":"Tamarine",
        "cuisine":"Vietnamese",
        "location":"Vietnam",
  
        "id":24
    },
    {  
        "name":"Joya",
        "cuisine":"Tapas",
        "location":"Tapa",
        "id":25
    },
    {  
        "name":"Jing Jing",
        "cuisine":"Chinese",
        "location":"Chinese",
        "id":26
    },
    {  
        "name":"Patxi\"s Pizza",
        "cuisine":"Pizza",  
           "location":"France",
  
        "id":27
    },
    {  
        "name":"Evvia Estiatorio",
        "cuisine":"Mediterranean",
        "location":"Atlanta",
        "id":28
    },
    {  
        "name":"Cafe 220",
        "cuisine":"Mediterranean",
        "location":"Sweden",
        "id":29
    },
    {  
        "name":"Cafe Renaissance",
        "cuisine":"Mediterranean",
        "location":"Greece",
        "id":30
    },
    {  
        "name":"Kan Zeman",
        "cuisine":"Mediterranean",
        "location":"Greece",
        "id":31
    },
    {  
        "name":"Gyros-Gyros",
        "cuisine":"Mediterranean",
        "location":"Greece",
        "id":32
    },
    {  
        "name":"Mango Caribbean Cafe",
        "cuisine":"Caribbean",
        "location":"Jamaica",
        "id":33
    },
    {  
        "name":"Coconuts Caribbean Restaurant & Bar",
        "cuisine":"Caribbean",
        "location":"Jamaica",
  
        "id":34
    },
    {  
        "name":"Rose & Crown",
        "cuisine":"English",
        "location":"UK",
        "id":35
    },
    {  
        "name":"Baklava",
        "cuisine":"Mediterranean",
        "location":"UK",
        "id":36
    },
    {  
        "name":"Mandarin Gourmet",
        "cuisine":"Chinese",
        "location":"Chinese",
        "id":37
    },
    {  
        "name":"Bangkok Cuisine",
        "cuisine":"Thai",
        "location":"Thailand",
        "id":38
    },
    {  
        "name":"Darbar Indian Cuisine",
        "cuisine":"Indian",
        "location":"India",
        "id":39
    },
    {  
        "name":"Mantra",
        "cuisine":"Indian",
        "location":"India",
        "id":40
    },
    {  
        "name":"Janta",
        "cuisine":"Indian",
        "location":"India",
        "id":41
    },
    {  
        "name":"Hyderabad House",
        "cuisine":"Indian",
        "location":"India",
  
        "id":42
    },
    {  
        "name":"Starbucks",
        "cuisine":"Coffee",
        "location":"New York",
  
        "id":43
    },
    {  
        "name":"Peet\"s Coffee",
        "cuisine":"Coffee",
        "id":44
    },
    {  
        "name":"Coupa Cafe",
        "cuisine":"Coffee",
        "location":"Pennyslvania",
        "id":45
    },
    {  
        "name":"Lytton Coffee Company",
        "cuisine":"Coffee",
        "location":"Germany",
        "id":46
    },
    {  
        "name":"Il Fornaio",
        "cuisine":"Italian",
        "location":"France",
        "id":47
    },
    {  
        "name":"Lavanda",
        "cuisine":"Mediterranean",
        "location":"India",
        "id":48
    },
    {  
        "name":"MacArthur Park",
        "cuisine":"American",
        "location":"America",
        "id":49
    },
    {  
        "name":"St Michael\"s Alley",
        "cuisine":"Californian",
        "location":"California",
        "id":50
    },
    {  
        "name":"Osteria",
        "cuisine":"Italian",
        "location":"Italia",
        "id":51
    },
    {  
        "name":"Vero",
        "cuisine":"Italian",
        "location":"Italia",
        "id":52
    },
    {  
        "name":"Cafe Renzo",
        "cuisine":"Italian",
        "location":"Italia",
        "id":53
    },
    {  
        "name":"Miyake",
        "cuisine":"Sushi",
        "location":"Japan",
        "id":54
    },
    {  
        "name":"Sushi Tomo",
        "cuisine":"Sushi",
        "location":"Japan",
        "id":55
    },
    {  
        "name":"Kanpai",
        "cuisine":"Sushi",
        "location":"Japan",
        "id":56
    },
    {  
        "name":"Pizza My Heart",
        "cuisine":"Pizza",
        "location":"Japan",
        "id":57
    },
    {  
        "name":"New York Pizza",
        "cuisine":"Pizza",
        "location":"New York",
        "id":58
    },
    {  
        "name":"California Pizza Kitchen",
        "cuisine":"Pizza",
        "location":"California",
  
        "id":59
    },
    {  
        "name":"Round Table",
        "cuisine":"Pizza",
        "location":"Algiers",
        "id":60
    },
    {  
        "name":"Loving Hut",
        "cuisine":"Vegan",
        "location":"Mali",
  
        "id":61
    },
    {  
        "name":"Garden Fresh",
        "cuisine":"Vegan",
        "location":"Sydney",
  
        "id":62
    },
    {  
        "name":"Cafe Epi",
        "cuisine":"French",
        "location":"France",
  
        "id":63
    },
    {  
        "name":"Tai Pan",
        "cuisine":"Chinese",
        "location":"Chinese",
        "id":64
    },
    {  
      "name":"Cheeseca Factory",
      "location":"America",
      "cuisine":"American",
      "id":65
  },
  {  
      "name":"Shokolaate",
      "location":"American",
      "cuisine":"American",
      "id":66
  },
  {  
      "name":"Gordon Biersch",
      "location":"Imo",
      "cuisine":"Traditional",
      "id":67
  },
  {  
      "name":"Crepevine",
      "cuisine":"American",
      "location":"NewYork",
      "id":68
  },
  {  
      "name":"Creamery",
      "cuisine":"American",
      "location":"Gombe",
      "id":69
  },
  {  
      "name":"Old Pro",
      "cuisine":"American",
      "location":"Queens",
      "id":70
  },
  {  
      "name":"Nola\"s",
      "cuisine":"Cajun",
      "location":"Cajun",
  
      "id":71
  },
  {  
      "name":"House of Bagels",
      "cuisine":"Bagels",
      "location":"Kenya",
      "id":72
  },
  {  
      "name":"The Prolific Oven",
      "cuisine":"Sandwiches",
      "location":"Benin",
      "id":73
  },
  {  
      "name":"La Strada",
      "cuisine":"Italian",
      "location":"Italy",
      "id":74
  },
  {  
      "name":"Buca di Beppo",
      "cuisine":"Italian",
      "location":"Oyo",
      "id":75
  },
  {  
      "name":"Pasta?",
      "cuisine":"Italian",
      "location":"Sunnyville",
      "id":76
  },
  {  
      "name":"Madame Tam",
      "cuisine":"Asian",
      "location":"Jos",
      "id":77
  },
  {  
      "name":"Sprout Cafe",
      "cuisine":"Salad",
      "location":"Benue",
      "id":78
  },
  {  
      "name":"Pluto\"s",
      "cuisine":"Salad",
      "location":"Bini",
      "id":79
  },
  {  
      "name":"Junoon",
      "cuisine":"Indian",
      "location":"Lagos",
      "id":80
  },
  {  
      "name":"Bistro Maxine",
      "cuisine":"French",
      "location":"Benin",
      "id":81
  },
  {  
      "name":"Three Seasons",
      "cuisine":"Vietnamese",
      "location":"Vietnam",
      "id":82
  },
  {  
      "name":"Sancho\"s Taquira",
      "cuisine":"Mexican",
      "location":"Mexico",
      "id":83
  },
  {  
      "name":"Reposado",
      "cuisine":"Mexican",
      "location":"Mexico",
  
      "id":84
  },
  {  
      "name":"Siam Royal",
      "cuisine":"Thai",
      "location":"Thailand",
      "id":85
  },
  {  
      "name":"Krung Siam",
      "cuisine":"Thai",
      "location":"Thailand",
      "id":86
  },
  {  
      "name":"Thaiphoon",
      "cuisine":"Thai",
      "location":"Thailand",
      "id":87
  },
  {  
      "name":"Tamarine",
      "cuisine":"Vietnamese",
      "location":"Vietnam",
  
      "id":88
  },
  {  
      "name":"Joya",
      "cuisine":"Tapas",
      "location":"Tapa",
      "id":89
  },
  {  
      "name":"Jing Jing",
      "cuisine":"Chinese",
      "location":"Chinese",
      "id":89
  },
  {  
      "name":"Patxi\"s Pizza",
      "cuisine":"Pizza",  
         "location":"France",
  
      "id":90
  },
  {  
      "name":"Evvia Estiatorio",
      "cuisine":"Mediterranean",
      "location":"Atlanta",
      "id":91
  },
  {  
      "name":"Cafe 220",
      "cuisine":"Mediterranean",
      "location":"Sweden",
      "id":92
  },
  {  
      "name":"Cafe Renaissance",
      "cuisine":"Mediterranean",
      "location":"Greece",
      "id":93
  },
  {  
      "name":"Kan Zeman",
      "cuisine":"Mediterranean",
      "location":"Greece",
      "id":94
  },
  {  
      "name":"Gyros-Gyros",
      "cuisine":"Mediterranean",
      "location":"Greece",
      "id":95
  },
  {  
      "name":"Mango Caribbean Cafe",
      "cuisine":"Caribbean",
      "location":"Jamaica",
      "id":96
  },
  {  
      "name":"Coconuts Caribbean Restaurant & Bar",
      "cuisine":"Caribbean",
      "location":"Jamaica",
  
      "id":97
  },
  {  
      "name":"Rose & Crown",
      "cuisine":"English",
      "location":"UK",
      "id":98
  },
  {  
      "name":"Baklava",
      "cuisine":"Mediterranean",
      "location":"UK",
      "id":99
  },
  {  
      "name":"Mandarin Gourmet",
      "cuisine":"Chinese",
      "location":"Chinese",
      "id":100
  },
  {  
      "name":"Bangkok New Cuisine",
      "cuisine":"Thai",
      "location":"Thailand",
      "id":101
  },
  {  
      "name":"Darbar Indian Cuisine",
      "cuisine":"Indian",
      "location":"India",
      "id":102
  },
  {  
      "name":"Mantra Desserts",
      "cuisine":"Indian",
      "location":"India",
      "id":40
  },
  {  
      "name":"Janta Lounge",
      "cuisine":"Indian",
      "location":"India",
      "id":103
  },
  {  
      "name":"Hyderabad New House",
      "cuisine":"Indian",
      "location":"India",
  
      "id":104
  },
  {  
      "name":"Starbucks NY",
      "cuisine":"Coffee",
      "location":"New York",
  
      "id":105
  },
  {  
      "name":"Peet\"s Coffee",
      "cuisine":"Coffee",
      "id":106
  },
  {  
      "name":"Coupa",
      "cuisine":"Coffee",
      "location":"Pennyslvania",
      "id":107
  },
  {  
      "name":"Lytton Company",
      "cuisine":"Coffee",
      "location":"Germany",
      "id":108
  },
  {  
      "name":"Il de la Fornaio",
      "cuisine":"Italian",
      "location":"France",
      "id":109
  },
  {  
      "name":"Lavanda Kitchen",
      "cuisine":"Mediterranean",
      "location":"India",
      "id":110
  },
  {  
      "name":"MacArthur New Park",
      "cuisine":"American",
      "location":"America",
      "id":111
  },
  {  
      "name":"St Michael\"s Alley",
      "cuisine":"Californian",
      "location":"California",
      "id":112
  },
  {  
      "name":"Osteria Kitchen",
      "cuisine":"Italian",
      "location":"Italia",
      "id":113
  },
  {  
      "name":"Vero's Bar",
      "cuisine":"Italian",
      "location":"Italia",
      "id":114
  },
  {  
      "name":"Cafe de Renzo",
      "cuisine":"Italian",
      "location":"Italia",
      "id":115
  },
  {  
      "name":"Miyake Restaurant",
      "cuisine":"Sushi",
      "location":"Japan",
      "id":116
  },
  {  
      "name":"Sushi da Tomo",
      "cuisine":"Sushi",
      "location":"Japan",
      "id":117
  },
  {  
      "name":"Kanpai Sushi",
      "cuisine":"Sushi",
      "location":"Japan",
      "id":118
  },
  {  
      "name":"Pizza to My Heart",
      "cuisine":"Pizza",
      "location":"Japan",
      "id":119
  },
  {  
      "name":"New York New Pizza",
      "cuisine":"Pizza",
      "location":"New York",
      "id":120
  },
  {  
      "name":"California Kitchen",
      "cuisine":"Pizza",
      "location":"California",
  
      "id":121
  },
  {  
      "name":"Round Red Table",
      "cuisine":"Pizza",
      "location":"Amazon",
      "id":122
  },
  {  
      "name":"Loving 'd' Hut",
      "cuisine":"Vegan",
      "location":"Sychelles",
      "id":123
  },
  {  
      "name":"GardenaFresh",
      "cuisine":"Vegan",
      "location":"Turkey",
      "id":124
  },
  {  
      "name":"CafeEpi",
      "cuisine":"French",
      "location":"Italy",
      "id":125
  },
  {  
      "name":"TaiPana",
      "cuisine":"Chinese",
      "location":"China",
      "id":126
  },
  {  
    "name":"Cheesecake Factory",
    "location":"Lagos",
    "cuisine":"American",
    "id":127
  },
  {  
    "name":"Shokolaat",
    "location":"Abuja",
    "cuisine":"American",
    "id":128
  },
  {  
    "name":"Gordon Biersch",
    "location":"Imo",
    "cuisine":"American",
    "id":129
  },
  {  
    "name":"Crepevine",
    "cuisine":"American",
    "location":"NewYork",
    "id":130
  },
  {  
    "name":"Creamery",
    "cuisine":"American",
    "location":"Gombe",
    "id":131
  },
  {  
    "name":"Old Pro",
    "cuisine":"American",
    "location":"Queens",
    "id":132
  },
  {  
    "name":"Nola\"s",
    "cuisine":"Cajun",
    "id":133
  },
  {  
    "name":"House of Bagels",
    "cuisine":"Bagels",
    "location":"Kenya",
    "id":134
  },
  {  
    "name":"The Prolific Oven",
    "cuisine":"Sandwiches",
    "location":"Benin",
    "id":135
  },
  {  
    "name":"La Strada",
    "cuisine":"Italian",
    "location":"Italy",
    "id":136
  },
  {  
    "name":"Buca di Beppo",
    "cuisine":"Italian",
    "location":"Oyo",
    "id":137
  },
  {  
    "name":"Pasta?",
    "cuisine":"Italian",
    "location":"Sunnyville",
    "id":138
  },
  {  
    "name":"Madame Tam",
    "cuisine":"Asian",
    "location":"Jos",
    "id":139
  },
  {  
    "name":"Sprout Cafe",
    "cuisine":"Salad",
    "location":"Benue",
    "id":140
  },
  {  
    "name":"Pluto\"s",
    "cuisine":"Salad",
    "location":"Bini",
    "id":141
  },
  {  
    "name":"Junoon",
    "cuisine":"Indian",
    "location":"Lagos",
    "id":142
  },
  {  
    "name":"Bistro Maxine",
    "cuisine":"French",
    "location":"Benin",
    "id":143
  },
  {  
    "name":"Three Seasons",
    "cuisine":"Vietnamese",
    "location":"Vietnam",
    "id":144
  },
  {  
    "name":"Sancho\"s Taquira",
    "cuisine":"Mexican",
    "location":"Mexico",
    "id":145
  },
  {  
    "name":"Reposado",
    "cuisine":"Mexican",
    "location":"Mexico",
  
    "id":146
  },
  {  
    "name":"Siam Royal",
    "cuisine":"Thai",
    "location":"Thailand",
    "id":147
  },
  {  
    "name":"Krung Siam",
    "cuisine":"Thai",
    "location":"Thailand",
    "id":148
  },
  {  
    "name":"Thaiphoon",
    "cuisine":"Thai",
    "location":"Thailand",
    "id":149
  },
  {  
    "name":"Tamarine",
    "cuisine":"Vietnamese",
    "location":"Vietnam",
  
    "id":150
  },
  {  
    "name":"Joya",
    "cuisine":"Tapas",
    "location":"Tapa",
    "id":151
  },
  {  
    "name":"Jing Jing",
    "cuisine":"Chinese",
    "location":"Chinese",
    "id":152
  },
  {  
    "name":"Patxi\"s Pizza",
    "cuisine":"Pizza",  
       "location":"France",
  
    "id":153
  },
  {  
    "name":"Evvia Estiatorio",
    "cuisine":"Mediterranean",
    "location":"Atlanta",
    "id":154
  },
  {  
    "name":"Cafe 220",
    "cuisine":"Mediterranean",
    "location":"Sweden",
    "id":155
  },
  {  
    "name":"Cafe Renaissance",
    "cuisine":"Mediterranean",
    "location":"Greece",
    "id":156
  },
  {  
    "name":"Kan Zeman",
    "cuisine":"Mediterranean",
    "location":"Greece",
    "id":157
  },
  {  
    "name":"Gyros-Gyros",
    "cuisine":"Mediterranean",
    "location":"Greece",
    "id":158
  },
  {  
    "name":"Mango Caribbean Cafe",
    "cuisine":"Caribbean",
    "location":"Jamaica",
    "id":159
  },
  {  
    "name":"Coconuts Caribbean Restaurant & Bar",
    "cuisine":"Caribbean",
    "location":"Jamaica",
  
    "id":160
  },
  {  
    "name":"Rose & Crown",
    "cuisine":"English",
    "location":"UK",
    "id":161
  },
  {  
    "name":"Baklava",
    "cuisine":"Mediterranean",
    "location":"UK",
    "id":162
  },
  {  
    "name":"Mandarin Gourmet",
    "cuisine":"Chinese",
    "location":"Chinese",
    "id":163
  },
  {  
    "name":"Bangkok Cuisine",
    "cuisine":"Thai",
    "location":"Thailand",
    "id":164
  },
  {  
    "name":"Darbar Indian Cuisine",
    "cuisine":"Indian",
    "location":"India",
    "id":165
  },
  {  
    "name":"Mantra",
    "cuisine":"Indian",
    "location":"India",
    "id":166
  },
  {  
    "name":"Janta",
    "cuisine":"Indian",
    "location":"India",
    "id":167
  },
  {  
    "name":"Hyderabad House",
    "cuisine":"Indian",
    "location":"India",
  
    "id":168
  },
  {  
    "name":"Starbucks",
    "cuisine":"Coffee",
    "location":"New York",
  
    "id":169
  },
  {  
    "name":"Peet\"s Coffee",
    "cuisine":"Coffee",
    "id":170
  },
  {  
    "name":"Coupa Cafe",
    "cuisine":"Coffee",
    "location":"Pennyslvania",
    "id":171
  },
  {  
    "name":"Lytton Coffee Company",
    "cuisine":"Coffee",
    "location":"Germany",
    "id":172
  },
  {  
    "name":"Il Fornaio",
    "cuisine":"Italian",
    "location":"France",
    "id":173
  },
  {  
    "name":"Lavanda",
    "cuisine":"Mediterranean",
    "location":"India",
    "id":174
  },
  {  
    "name":"MacArthur Park",
    "cuisine":"American",
    "location":"America",
    "id":175
  },
  {  
    "name":"St Michael\"s Alley",
    "cuisine":"Californian",
    "location":"California",
    "id":176
  },
  {  
    "name":"Osteria",
    "cuisine":"Italian",
    "location":"Italia",
    "id":177
  },
  {  
    "name":"Vero",
    "cuisine":"Italian",
    "location":"Italia",
    "id":178
  },
  {  
    "name":"Cafe Renzo",
    "cuisine":"Italian",
    "location":"Italia",
    "id":179
  },
  {  
    "name":"Miyake",
    "cuisine":"Sushi",
    "location":"Japan",
    "id":180
  },
  {  
    "name":"Sushi Tomo",
    "cuisine":"Sushi",
    "location":"Japan",
    "id":181
  },
  {  
    "name":"Kanpai",
    "cuisine":"Sushi",
    "location":"Japan",
    "id":182
  },
  {  
    "name":"Pizza My Heart",
    "cuisine":"Pizza",
    "location":"Japan",
    "id":183
  },
  {  
    "name":"New York Pizza",
    "cuisine":"Pizza",
    "location":"New York",
    "id":184
  },
  {  
    "name":"California Pizza Kitchen",
    "cuisine":"Pizza",
    "location":"California",
  
    "id":185
  },
  {  
    "name":"Round Table",
    "cuisine":"Pizza",
    "location":"Algiers",
    "id":186
  },
  {  
    "name":"Loving Hut",
    "cuisine":"Vegan",
    "location":"Mali",
  
    "id":187
  },
  {  
    "name":"Garden Fresh",
    "cuisine":"Vegan",
    "location":"Sydney",
  
    "id":188
  },
  {  
    "name":"Cafe Epi",
    "cuisine":"French",
    "location":"France",
  
    "id":189
  },
  {  
    "name":"Tai Pan",
    "cuisine":"Chinese",
    "location":"Chinese",
    "id":190
  },
  {  
  "name":"Cheeseca Factory",
  "location":"America",
  "cuisine":"American",
  "id":191
  },
  {  
  "name":"Shokolaate",
  "location":"American",
  "cuisine":"American",
  "id":192
  },
  {  
  "name":"Gordon Biersch",
  "location":"Imo",
  "cuisine":"Traditional",
  "id":193
  },
  {  
  "name":"Crepevine",
  "cuisine":"American",
  "location":"NewYork",
  "id":194
  },
  {  
  "name":"Creamery",
  "cuisine":"American",
  "location":"Damaturu",
  "id":195
  },
  {  
  "name":"Old Pro",
  "cuisine":"American",
  "location":"Queens",
  "id":196
  },
  {  
  "name":"Nola\"s Haven",
  "cuisine":"Cajun",
  "location":"Benin",
  
  "id":197
  },
  {  
  "name":"Bagels",
  "cuisine":"Bagels",
  "location":"Kenya",
  "id":198
  },
  {  
  "name":"The Patron",
  "cuisine":"Sandwiches",
  "location":"Benin",
  "id":199
  },
  {  
  "name":"La Bongo",
  "cuisine":"Italian",
  "location":"Enugu",
  "id":200
  },
  ];
  return arr;
};

export const headers = [
    { Header: 'ID', accessor: 'id'},
    { Header: 'Restaurant Name', accessor: 'name' },
    { Header: 'Cuisine', accessor: 'cuisine' },
    { Header: 'Location', accessor: 'location' },

];
