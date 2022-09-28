import { Banner } from "./Banner";
import { Delivery } from "./Delivery";
import { Hour } from "./Hour";
import { InfoBox } from "./InfoBox";
import { Instagram } from "./Instagram";
import { Location } from "./Location";
import { MenuFood } from "./MenuFood";
import { Order } from "./Order";
import { Personalized } from "./Personalized";
import { SpecialOffers } from "./SpecialOffers";
import { Testimonials } from "./Testimonials";

export function Home() {
  return (
    <>
      <Banner />
      <InfoBox />
      <SpecialOffers />
      <Hour />
      <MenuFood />
      <Personalized />
      <Testimonials />
      <Instagram />
      <Delivery />
      <Order />
      <Location />
    </>
  )
}