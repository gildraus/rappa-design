import Image from "next/image";
import styles from "./citiescards.module.css";

export default function Page() {
  return (
    <section className="section-container bg-sky-500 text-white">
      <div className="inner-flex">
        <div className="flex flex-col items center mb-14"></div>
        <h2 className="flex text-size-12 mb-4 text-center text-balance">
          RappaDesign is born of passion to inspire dozens of happy customers
          worldwide.
        </h2>
      </div>
      <div className="inner-grid gap-8 md:grid-cols-12">
        <div className="flex flex-col h-full col-span-4 md:col-span-6 lg:col-span-4 justify-between">
          <div>
            {" "}
            <div className="mb-4 rounded-lg aspect-[400/290] w-full overflow-hidden relative">
              <Image
                src="/Vienna.jpg"
                alt="Vienna tours"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>{" "}
            <h3 className="mt-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              We visited Wien
            </h3>
            <div
              className="flex w-4/5 md:w-3/4 text-size-4 font-normal leading-6 
									mb-4"
            >
              {" "}
              <p>
                Vienna's interior design is a harmonious blend of imperial
                elegance and contemporary flair. The city's rich history is
                reflected in its grandiose architecture, while modern Viennese
                interiors often incorporate minimalist design elements and
                luxurious materials.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full col-span-4 md:col-span-6 lg:col-span-4 justify-between">
          <div>
            {" "}
            <div className="mb-4 rounded-lg aspect-[400/290] w-full overflow-hidden relative">
              <Image
                src="/Paris.jpeg"
                alt="Paris tours"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>{" "}
            <h3 className="mt-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              We visited Paris
            </h3>
            <div
              className="flex w-4/5 md:w-3/4 text-size-4 font-normal leading-6 
									mb-4"
            >
              {" "}
              <p>
                Vienna's interior design is a harmonious blend of imperial
                elegance and contemporary flair. The city's rich history is
                reflected in its grandiose architecture, while modern Viennese
                interiors often incorporate minimalist design elements and
                luxurious materials.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full col-span-4 md:col-span-6 lg:col-span-4 justify-between">
          <div>
            {" "}
            <div className="mb-4 rounded-lg aspect-[400/290] w-full overflow-hidden relative">
              <Image
                src="/Belgrade.jpg"
                alt="Belgrade"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>{" "}
            <h3 className="mt-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              We visited Belgrade
            </h3>
            <div
              className="flex w-4/5 md:w-3/4 text-size-4 font-normal leading-6 
									mb-4"
            >
              {" "}
              <p>
                Vienna's interior design is a harmonious blend of imperial
                elegance and contemporary flair. The city's rich history is
                reflected in its grandiose architecture, while modern Viennese
                interiors often incorporate minimalist design elements and
                luxurious materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
