import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="section-gap">
      <div className="container grid grid-cols-1 md:grid-cols-2 ">
        <div className="md:py-12">
          <h1 className="text-4xl font-semibold">Slice into Happiness</h1>
          <p className="text-accent my-4">
            Discover the joy of pizza with our artisanal creations, crafted with
            love and the finest ingredients. Whether you&apos;re a fan of
            classic Margherita or adventurous toppings, we have something for
            everyone.
          </p>
          <div className="flex gap-4 items-center mt-6">
            <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: "lg",
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
              order Now
              <ArrowRightCircle className={`!w-5 !h-5`} />
            </Link>

            <Link
              href={`/${Routes.ABOUT}`}
              className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
            >
              Learn More
              <ArrowRightCircle className={`!w-5 !h-5 `} />
            </Link>
          </div>
        </div>
         <div className='relative hidden md:block'>
          <Image
            src='/assets/images/pizza.png'
            alt='Pizza'
            fill
            className='object-contain !h-full'
            loading='eager'
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
