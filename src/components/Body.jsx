import AppStore from "./AppStore"
import HeroBanner from "./HeroBanner"
import Service from "./Service"
import Testimonial from "./Testimonial"
import Transformation from "./Transformation"
import WhyChooseUs from "./WhyChooseUs"
import Pricing from "./Pricing"
import Rediscover from "./Rediscover"
const Body = () => {
  return (
    <div>
        <HeroBanner />
        <Testimonial />
        <WhyChooseUs />
        <AppStore />
        <Service />
        <Transformation />
        <Pricing />
        <Rediscover />
    </div>
  )
}

export default Body
