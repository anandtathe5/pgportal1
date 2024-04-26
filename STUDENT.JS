const pgData = [
    // Pune PGs
    {
        city: "pune",
        name: "Ganesh Residenxy",
        location: "Hinjewadi Phase 1",
        amenities: ["Wi-Fi", "Laundry", "Security"],
        price: 5000
    },
    {
        city: "pune",
        name: "Sapphire Heights",
        location: "Kothrud",
        amenities: ["Swimming Pool", "Gym", "Parking"],
        price: 7000
    },
    {
        city: "pune",
        name: "Orchid Apartments",
        location: "Wakad",
        amenities: ["Garden", "Clubhouse", "Elevator"],
        price: 5500
    },
    {
        city: "pune",
        name: "Green Meadows",
        location: "Aundh",
        amenities: ["Lawn", "24/7 Water Supply", "Security Guard"],
        price: 5800
    },
    {
        city: "pune",
        name: "Golden Nest",
        location: "Baner",
        amenities: ["Balcony", "Intercom", "Fitness Center"],
        price: 6500
    },
    {
        city: "pune",
        name: "Sunrise PG",
        location: "Hadapsar",
        amenities: ["Wi-Fi", "Laundry", "Security"],
        price: 5300
    },
    {
        city: "pune",
        name: "Moonlight Residency",
        location: "Viman Nagar",
        amenities: ["Swimming Pool", "Parking", "Gym"],
        price: 7200
    },
    {
        city: "pune",
        name: "Starlight Apartments",
        location: "Kharadi",
        amenities: ["Garden", "Clubhouse", "Elevator"],
        price: 5600
    },
    {
        city: "pune",
        name: "Rainbow PG",
        location: "Katraj",
        amenities: ["Lawn", "24/7 Water Supply", "Security Guard"],
        price: 5900
    },
    {
        city: "pune",
        name: "Silver Lining PG",
        location: "Magarpatta",
        amenities: ["Balcony", "Intercom", "Fitness Center"],
        price: 6600
    },
    // Hyderabad PGs
    {
        city: "hyderabad",
        name: "Sunshine PG",
        location: "Some Location",
        amenities: ["Wi-Fi", "Laundry", "Security"],
        price: 6000
    },
    {
        city: "hyderabad",
        name: "Hilltop PG",
        location: "Hitech City",
        amenities: ["Swimming Pool", "Gym", "Parking"],
        price: 6800
    },
    {
        city: "hyderabad",
        name: "Lakeside Apartments",
        location: "Banjara Hills",
        amenities: ["Garden", "Clubhouse", "Elevator"],
        price: 5700
    },
    {
        city: "hyderabad",
        name: "Cityscape PG",
        location: "Gachibowli",
        amenities: ["Lawn", "24/7 Water Supply", "Security Guard"],
        price: 5900
    },
    {
        city: "hyderabad",
        name: "Green City PG",
        location: "Mehdipatnam",
        amenities: ["Balcony", "Intercom", "Fitness Center"],
        price: 6400
    },
    {
        city: "hyderabad",
        name: "Golden City PG",
        location: "Manikonda",
        amenities: ["Wi-Fi", "Laundry", "Security"],
        price: 6100
    },
    {
        city: "hyderabad",
        name: "Sunset Residency",
        location: "Kondapur",
        amenities: ["Swimming Pool", "Parking", "Gym"],
        price: 7000
    },
    {
        city: "hyderabad",
        name: "City Central PG",
        location: "Miyapur",
        amenities: ["Garden", "Clubhouse", "Elevator"],
        price: 6200
    },
    {
        city: "hyderabad",
        name: "Skyline PG",
        location: "Ameerpet",
        amenities: ["Balcony", "Intercom", "Fitness Center"],
        price: 6500
    },
    {
        city: "hyderabad",
        name: "Lakeview PG",
        location: "Kukatpally",
        amenities: ["Lawn", "24/7 Water Supply", "Security Guard"],
        price: 5800
    },
    // Bangalore PGs
    {
        city: "bangalore",
        name: "Silver Oak PG",
        location: "HSR Layout",
        amenities: ["Wi-Fi", "Laundry", "Security"],
        price: 5500
    },
    {
        city: "bangalore",
        name: "Green Meadows PG",
        location: "Koramangala",
        amenities: ["Swimming Pool", "Gym", "Parking"],
        price: 6700
    },
    {
        city: "bangalore",
        name: "City Heights PG",
        location: "Indiranagar",
        amenities: ["Garden", "Clubhouse", "Elevator"],
        price: 5800
    },
    {
        city: "bangalore",
        name: "Lakeview PG",
        location: "Whitefield",
        amenities: ["Lawn", "24/7 Water Supply", "Security Guard"],
        price: 6000
    },
    {
        city: "bangalore",
        name: "Tech City PG",
        location: "Marathahalli",
        amenities: ["Balcony", "Intercom", "Fitness Center"],
        price: 6600
    },
    {
        city: "bangalore",
        name: "Silicon Valley PG",
        location: "Electronic City",
        amenities: ["Wi-Fi", "Laundry", "Security"],
        price: 6300
    },
    {
        city: "bangalore",
        name: "Garden City PG",
        location: "Jayanagar",
        amenities: ["Swimming Pool", "Parking", "Gym"],
        price: 6900
    },
    {
        city: "bangalore",
        name: "Central PG",
        location: "MG Road",
        amenities: ["Garden", "Clubhouse", "Elevator"],
        price: 5700
    },
    {
        city: "bangalore",
        name: "Skyline PG",
        location: "Bannerghatta",
        amenities: ["Balcony", "Intercom", "Fitness Center"],
        price: 6400
    },
    {
        city: "bangalore",
        name: "Urban Residency",
        location: "BTM Layout",
        amenities: ["Lawn", "24/7 Water Supply", "Security Guard"],
        price: 5900
    },
    // Delhi PGs
    {
        city: "delhi",
        name: "Mlabar PG",
        location: "Pitampura",
        amenities: ["Wi-Fi", "Laundry", "Security"],
        price: 5200
    },
    {
        city: "delhi",
        name: "Metro Heights PG",
        location: "Rohini",
        amenities: ["Swimming Pool", "Gym", "Parking"],
        price: 6100
    },
    {
        city: "delhi",
        name: "Capital City PG",
        location: "Connaught Place",
        amenities: ["Garden", "Clubhouse", "Elevator"],
        price: 5400
    },
    {
        city: "delhi",
        name: "Green Park PG",
        location: "Green Park",
        amenities: ["Lawn", "24/7 Water Supply", "Security Guard"],
        price: 5700
    },
    {
        city: "delhi",
        name: "South City PG",
        location: "South Extension",
        amenities: ["Balcony", "Intercom", "Fitness Center"],
        price: 5900
    },
    {
        city: "delhi",
        name: "Northview PG",
        location: "Pitampura",
        amenities: ["Wi-Fi", "Laundry", "Security"],
        price: 5300
    },
    {
        city: "delhi",
        name: "Delhi Heights PG",
        location: "Nehru Place",
        amenities: ["Swimming Pool", "Parking", "Gym"],
        price: 6000
    },
    {
        city: "delhi",
        name: "East End PG",
        location: "Laxmi Nagar",
        amenities: ["Garden", "Clubhouse", "Elevator"],
        price: 5500
    },
    {
        city: "delhi",
        name: "West View PG",
        location: "Janakpuri",
        amenities: ["Balcony", "Intercom", "Fitness Center"],
        price: 5600
    },
    {
        city: "delhi",
        name: "Central PG",
        location: "Karol Bagh",
        amenities: ["Lawn", "24/7 Water Supply", "Security Guard"],
        price: 5800
    }
];
