"use client";
import Configurations from "@/components/image-generation/configurations";
import GeneratedImages from "@/components/image-generation/GeneratedImages";

const ImageGeneration = () => {
  return (
    <section className="container mx-auto min-h-screen p-4">
      <div className="grid md:grid-cols-3 gap-10 h-full">
        <div className="md:col-span-1">
          <Configurations />
        </div>
        <div className="md:col-span-2 h-fit w-full rounded-xl flex items-center justify-center">
          <GeneratedImages/>
        </div>
      </div>
    </section>
  );
};

export default ImageGeneration;