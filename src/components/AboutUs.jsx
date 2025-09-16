import React from 'react'

const AboutUs = () => {
  return (
    <section class="bg-[#FAF7F3] ">
    <div class="items-center mx-auto md:grid md:grid-cols-2 ">
        <div class="sm:text-lg h-full content-center p-4 md:m-0 m-1 bg-white">
            <h2 class="mb-4 text-4xl tracking-tight ">ABOUT US</h2>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8 p-4 ">
            <img class="w-full rounded-lg" src="https://thumbs.dreamstime.com/b/geometric-platform-podium-pastel-silk-satin-background-blank-minimal-cylinder-form-mock-up-presentation-cosmetic-product-210820050.jpg" alt=""/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://www.shutterstock.com/image-photo/beige-white-pearl-wave-silk-260nw-2309964037.jpg" alt="office content 2"/>
        </div>
    </div>
</section>
  )
}

export default AboutUs
