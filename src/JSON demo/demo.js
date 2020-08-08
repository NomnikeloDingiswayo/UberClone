console.log("JSON Demo");

const response = {
    "status": "OK",
    "origin_addresses": [
        "Vancouver, BC, Canada",
        "Seattle, État de Washington, États-Unis"
    ],
    "destination_addresses": [
        "San Francisco, Californie, États-Unis",
        "Victoria, BC, Canada"
    ],
    "rows": [
        {
            "elements": [
                {
                    "status": "OK",
                    "duration": {
                        "value": 340110,
                        "text": "3 jours 22 heures"
                    },
                    "distance": {
                        "value": 1734542,
                        "text": "1 735 km"
                    }
                },
                {
                    "status": "OK",
                    "duration": {
                        "value": 24487,
                        "text": "6 heures 48 minutes"
                    },
                    "distance": {
                        "value": 129324,
                        "text": "129 km"
                    }
                }
            ]
        },
        {
            "elements": [
                {
                    "status": "OK",
                    "duration": {
                        "value": 288834,
                        "text": "3 jours 8 heures"
                    },
                    "distance": {
                        "value": 1489604,
                        "text": "1 490 km"
                    }
                },
                {
                    "status": "OK",
                    "duration": {
                        "value": 14388,
                        "text": "4 heures 0 minutes"
                    },
                    "distance": {
                        "value": 135822,
                        "text": "136 km"
                    }
                }
            ]
        }
    ]
}

console.log(response.rows[0].elements[0].distance.text);


