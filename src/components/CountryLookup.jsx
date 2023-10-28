"use client";
import { useEffect, useState } from "react"

export default function CountryLookup() {
    const [country, setCountry] = useState('Bangladesh');
    useEffect(()=>{
        fetch("https://extreme-ip-lookup.com/json/?key=demo2").then((res) => res.json()).then((data) =>setCountry(data.country));
    },[])
  return (
    <div>{country}</div>
  )
}
