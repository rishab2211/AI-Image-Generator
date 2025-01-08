
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "hero-images/img1.jpeg",
    alt: "abstract image",
  },
  {
    src: "hero-images/img2.jpeg",
    alt: "abstract image",
  },
  {
    src: "hero-images/img3.jpeg",
    alt: "abstract image",
  },
  {
    src: "hero-images/img4.jpeg",
    alt: "abstract image",
  },
  {
    src: "hero-images/img5.jpeg",
    alt: "abstract image",
  },
  {
    src: "hero-images/img6.jpeg",
    alt: "abstract image",
  },
  {
    src: "hero-images/img7.jpeg",
    alt: "abstract image",
  },
  {
    src: "hero-images/img8.jpeg",
    alt: "abstract image",
  },
  {
    src: "hero-images/img9.jpeg",
    alt: "abstract image",
  },
];

const GeneratedImages = () => {
  if (images.length === 0) {
    return (
      <Card className="w-full max-w-2xl  text-black">
        <CardContent className=" flex aspect-square items-center justify-center bg-muted ">
          <span>No images generated</span>
        </CardContent>
      </Card>
    );
  }
  return (
    <div>
      <Carousel
        className="w-full max-w-2xl  "
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1 flex relative justify-center items-center overflow-hidden rounded-lg">
                <img src={image.src} alt={image.alt}  className="w-full h-full object-cover " />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GeneratedImages;
