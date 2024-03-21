import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"
const SpecialOffer = () => {
  return (
   <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1 ">
      <img className="object-contain w-full" src={offer} alt="" width={773} height={687}/>
    </div>
    <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey thet redefines your experience with unbeatable deals. From premier selections to incedible savings,we offer unparelled value that sets us apart .</p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fullfill your unique desirres, surpassing the loftiest expectaions. Your journey with us is nothing short of exceptional. </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now"  iconURL={arrowRight}/>
        <Button label="Learn more"  backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>

        </div>

      </div>
   </section>
  )
}

export default SpecialOffer
