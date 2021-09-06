import getAddress,{ findAddressWithCoords } from "./ghpostAddress";

describe("Test for Ghana Post Address Api",()=>{

    test("testing with adddress",()=>{
        return getAddress("AK-484-9321").then(
            (res)=>{
                expect(res.found).toBeTruthy();
                expect(res.data.Table[0].Area).toBe(result.Table[0].Area);
                expect(res.data.Table[0].CenterLatitude).toBe(result.Table[0].CenterLatitude);
                expect(res.data.Table[0].CenterLongitude).toBe(result.Table[0].CenterLongitude)
        
            }
        )
    
    });

    test("testing with coordinates", ()=>{
        const latitude = result.Table[0].CenterLatitude;
        const longitude = result.Table[0].CenterLongitude;
        
        return findAddressWithCoords({latitude,longitude}).then(
            (res)=>{
                expect(res.found).toBeTruthy();
                expect(res.data.Table[0].Area).toBe(result.Table[0].Area);
                expect(res.data.Table[0].GPSName).toBe(result.Table[0].GPSName);
            }
        )
    });


})


const result={
    "Table": [
        {
            "Area": "NEW KAGYASI",
            "CenterLatitude": 6.650080145273592,
            "CenterLongitude": -1.648700346667856,
            "District": "Kumasi",
            "EastLat": 6.65005768739201,
            "EastLong": -1.6486780409076,
            "GPSName": "AK4849321",
            "NorthLat": 6.65010262239948,
            "NorthLong": -1.6487229566718,
            "PostCode": "AK484",
            "Region": "Ashanti",
            "SouthLat": 6.65005768739201,
            "SouthLong": -1.6487229566718,
            "Street": "Kumasi, Ashanti, GHA",
            "WestLat": 6.65010262239948,
            "WestLong": -1.6486780409076
        }
    ],
    "found": true
}
