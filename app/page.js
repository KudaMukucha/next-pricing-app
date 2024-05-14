"use client"
import Package from "@/components/Package";
import { annualPricing, monthlyPricing } from "@/pricingData";
import { useState } from "react";

export default function Home() {
  // console.log(monthlyPricing)
  const [pricing,setPricing] = useState('monthly')
  // console.log(pricing)
  const handleMonthlyPricing=()=>{
    setPricing('monthly')
  }

  const handleAnnualPricing=()=>{
    setPricing('annual')
  }
  return (
   <main className="p-12 flex flex-col items-center justify-center">
      <section className="flex flex-col justify-center items-center gap-6 max-w-[600px] m-auto text-center">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="text-sm">Sign up in less than 30 seconds. Try out our 14 day risk free trial. Upgrade anytime,no questions,no hussle.</p>
        <div>
          <button onClick={handleMonthlyPricing} className={pricing ==='monthly' ? "py-2 px-5  uppercase bg-emerald-500 text-white rounded-tl-md rounded-bl-md":"py-2 px-5  uppercase bg-slate-300 text-slate-800 rounded-tl-md rounded-bl-md"}>Monthly</button>
          <button onClick={handleAnnualPricing} className={pricing ==='annual' ? "py-2 px-5  uppercase bg-emerald-500 text-white rounded-tr-md rounded-br-md":"py-2 px-5  uppercase bg-slate-300 text-slate-800 rounded-tr-md rounded-br-md"}>Annually</button>
        </div>
      </section>

      <section className="flex py-16">
       {
        pricing ==='monthly' ? (
          monthlyPricing.map((packageData,i)=>{
            return(
              <Package key={i} data={packageData}/>
            )
          })
        )
        :
        (
          annualPricing.map((packageData,i)=>{
            return(
              <Package key={i} data={packageData}/>
            )
          })
        )
       }
      </section>
   </main>
  );
}
