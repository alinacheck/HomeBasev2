
const config = {
    style: "mapbox://styles/mapbox/streets-v11",
    accessToken: "pk.eyJ1IjoiYmhhcnJ5IiwiYSI6ImNrZmVmd3hkbDA0aWEyeXRqaGpxbDBzNWsifQ.bIHGogBJUCCaraWEZv8KHA",
    CSV: "./Example.csv",
    center: [-71.0932,42.3592], //Lng, Lat
    zoom: 13, //Default zoom
    title: "Search for Shelter",
    description: "You can sort shelter options by distance, or use the filters below to search options that match your needs.",
    sideBarInfo: ["address","posteremail","postername","livingsituation","typeofaccomodation","numberofguests","familyfriendly","femalefriendly","femaleonly","petfriendly","smokingfriendly"],
    popupInfo: ["address"],
    filters: [
        {
            type: "dropdown",
            title: "Number of guests: ",
            columnHeader: "numberofguests",
            listItems: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10'
            ]

        },
        {
            type: "checkbox",
            title: "Type of Accommodation: ",
            columnHeader: "typeofaccomodation",
            listItems: [
                'Apartment',
                'House',
                'Hotel',
                'Camping',
                'Other use building'
            ]
        },
        {
            type: "checkbox",
            title: "Living situation: ",
            columnHeader: "livingsituation",
            listItems: ["Private quarters", "Shared quarters", "Entire accommodation"]
        },
        {
            type: "checkbox",
            title: "Family friendly: ",
            columnHeader: "familyfriendly",
            listItems: ["Family friendly"]
        },
        {
            type: "checkbox",
            title: "Female only: ",
            columnHeader: "femaleonly",
            listItems: ["Female only"]
        },
        {
            type: "checkbox",
            title: "Female friendly: ",
            columnHeader: "femalefriendly",
            listItems: ["Female friendly"]
        },
        {
            type: "checkbox",
            title: "Pet friendly: ",
            columnHeader: "petfriendly",
            listItems: ["Pet friendly"]
        },
        {
            type: "checkbox",
            title: "Smoking friendly: ",
            columnHeader: "smokingfriendly",
            listItems: ["Smoking friendly"]
        }
        
    ]

};
