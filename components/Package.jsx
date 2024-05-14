import { FaCheckCircle} from 'react-icons/fa'
export default function Package({data}) {
    const{title,price,features,isRecommended} = data
  return (
    <div className={`${isRecommended ? 'bg-white px-10 py-6 items-center justify-center flex flex-col gap-4 border border-emerald-400 ': 'bg-white px-10 py-6 items-center justify-center flex flex-col gap-4  border-r'}`}>
       {isRecommended && (<p className='bg-orange-400 py-2 px-2 text-white uppercase'>Recommended</p>) }
       <h4 className="font-bold">{title}</h4>
       <h3>$ <span className='text-4xl font-bold text-slate-700'>{price}</span>/mo</h3>
       <div className='flex flex-col gap-1'>
        {
            features.map((feature,i)=>{
                return(
                    <p key={i} className='flex items-center justify-center gap-2 text-sm'> <FaCheckCircle className='text-emerald-400'/>{feature}</p>
                )
            })
        }              
       </div>
       <button className={`${isRecommended ? 'text-sm py-2 px-5  uppercase bg-emerald-400 text-white hover:scale-105 transition-all duration-300':'text-sm py-2 px-5  uppercase bg-slate-200 text-slate-800 hover:scale-105 transition-all duration-300'}`}>Signup Today</button>
    </div>
  )
}
