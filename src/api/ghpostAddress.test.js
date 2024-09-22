import getAddress,{ findAddressWithCoords } from "./{PostCode}";

describe("Test for UK Post Code Api",()=>{

    it("testing with UK adddress",()=>{
        return getAddress("IP1 2AR",
            (res)=>{
                expect(res.found).toBeTruthy();
                expect(res.data.Table[0].Area).toBe(result.Table[0].Area);
                expect(res.data.Table[0].CenterLatitude).toBe(result.Table[0].CenterLatitude);
                expect(res.data.Table[0].CenterLongitude).toBe(result.Table[0].CenterLongitude)
        
            }
        ,
        ()=>{
            console.log("error")
        })
    
    });

    it("testing with coordinates", ()=>{
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
             "PostCode": "string",
    "Availability": [{
        "UPRN": 0,
        "AddressShortDescription": "string",
        "PostCode": "string",
        "MaxBbPredictedDown": 0.0,
        "MaxBbPredictedUp": 0.0,
        "MaxSfbbPredictedDown": 0.0,
        "MaxSfbbPredictedUp": 0.0,
        "MaxUfbbPredictedDown": 0.0,
        "MaxUfbbPredictedUp": 0.0,
        "MaxPredictedDown": 0.0,
        "MaxPredictedUp": 0.0
    }]
        }
    ],
    "found": true
}
