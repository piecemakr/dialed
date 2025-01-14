// import layouts
import Hero from "~/components/layouts/hero";
import Product from "~/components/layouts/product";
// import Quicksome from "~/components/layouts/quicksome";
import Features from "~/components/layouts/features/features";
import Ingredients from "~/components/layouts/ingredients/ingredients";
import Reviews from "~/components/layouts/product-reviews/reviews";
import Faq from "~/components/layouts/faq/faq";
import Guarantee from "~/components/layouts/guarantee";
// import Eons from "~/components/layouts/eons";
import Footer from "~/components/layouts/footer";


export default function Home() {
  return (
    <>
      <Hero /> 
      <Product /> 
      {/* <Quicksome />  */}
      <Features />
      <Ingredients />
      <Reviews />
      <Faq />
      <Guarantee />
     {/*  <Eons /> */}
      <Footer />
    </>
  );
}
