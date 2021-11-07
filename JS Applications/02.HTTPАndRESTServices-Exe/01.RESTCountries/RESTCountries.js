//01. Get request for name, capital, region and population:

// GET: https://restcountries.eu/rest/v2/name/Italy?fields=name;capital;region;population

//where '?fields=name;capital;region;population' is the searched information of task

// return JSON:

[{
    "name": "Italy",
    "capital": "Rome",
    "region": "Europe",
    "population": 60665551
}]

//02. Get request for German-speaking countries:

// GET: https://restcountries.eu/rest/v2/lang/de?fields=name

//where ?fields=name gives us information only of name of countries

// return JSON:

[{
        "name": "Austria"
    },
    {
        "name": "Belgium"
    },
    {
        "name": "Germany"
    },
    {
        "name": "Holy See"
    },
    {
        "name": "Liechtenstein"
    },
    {
        "name": "Luxembourg"
    },
    {
        "name": "Switzerland"
    }
]