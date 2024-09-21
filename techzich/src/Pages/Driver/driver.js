import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

function Driver() {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

    const navigate = useNavigate();
    const [coords,setCoords] = useState(null);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords: {longitude,latitude}})=>{
            setCoords({lat:latitude,lng:longitude})
        })
    },[])

    const handleAccept = () =>{
        
    }
    
    const getPatient = () => {
        const FetchData = async () => {};
    };

    return (
        <div className="">
            <div>
                <span>Thong tin bệnh nhân</span>
                <div></div>
            </div>
            <div className="flex">
                <div className="">
                    <div className="">
                        <span>Phone</span>
                        <span>Address</span>
                        <span></span>
                        <button onClick={handleAccept} className=" bg-green-500" type="submit">Accept</button>
                    </div>
                </div>
                    <div style={{ height: '50vh', width: '100%' }}>
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBcg10Ol9dm7qA9Osus98i-pgWkptnmHPE" }}
                        defaultCenter={coords}
                        defaultZoom={11}
                        center={coords}
                    >
                        
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
}
export default Driver;
