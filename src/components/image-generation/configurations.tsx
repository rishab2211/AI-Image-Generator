"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "../ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

/*
const input = {
  prompt: "black forest gateau cake spelling out the words \"FLUX DEV\", tasty, food photography, dynamic shot",
  go_fast: true,
  guidance: 3.5,
  megapixels: "1",
  num_outputs: 1,
  aspect_ratio: "1:1",
  output_format: "webp",
  output_quality: 80,
  prompt_strength: 0.8,
  num_inference_steps: 28
};

const output = await replicate.run("black-forest-labs/flux-dev", { input });
console.log(output);

*/
const formSchema = z.object({
  model: z.string({
    required_error: "Model is required",
  }).min(4,{
    message : "Select a model"
  }),
  prompt: z.string({
    required_error: "Prompt is required",
  }).nonempty({
    message:"Prompt cannot be empty"
  }),
  guidance: z
    .number({
      required_error: "Guidance scale is required",
    })
    .min(1, {
      message: "Minimum guidance is 1",
    })
    .max(10, {
      message: "Maximum guidance should be 10",
    }),
  num_outputs: z
    .number()
    .min(1, {
      message: "Number of output should be aleast 1",
    })
    .max(4, {
      message: "Number of output must be less than 4",
    }),
  output_format: z.string({
    message: "Output format is required",
  }),
  output_quality: z
    .number()
    .min(1, {
      message: "Output quality should be atleast 1",
    })
    .max(100, {
      message: "output quality must be less than or equal to 100",
    }),
  aspect_ratio: z.string({
    message: "aspect ratio is required",
  }),
  num_inference_steps: z
    .number()
    .min(10, {
      message: "Output quality should be atleast 10",
    })
    .max(50, {
      message: "output quality must be less than or equal to 50",
    }),
});

const Configurations = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "",
      prompt: "",
      guidance: 3,
      num_outputs: 1,
      output_format: "jpg",
      output_quality: 70,
      num_inference_steps: 28,
      aspect_ratio: "1:1",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="h-full w-full">
        <TooltipProvider>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <fieldset className="grid gap-6 p-4 bg-background rounded-lg border ">
                <legend className="text-sm ml-1 px-1 ">Settings</legend>
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Model
                        <Tooltip>
                          <TooltipTrigger>
                            <Info size={12} className="ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Select the model for image generation</p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="black-forest-labs/flux-devs">
                            flux dev
                          </SelectItem>
                          <SelectItem value="black-forest-labs/flux-schnell">
                            flux schnell
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4 ">
                  <FormField
                    control={form.control}
                    name="aspect_ratio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex">
                          Aspect ratio
                          <Tooltip>
                            <TooltipTrigger>
                              <Info size={12} />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Select the aspect ratio of output image</p>
                            </TooltipContent>
                          </Tooltip>
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a aspect ratio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1:1">1:1</SelectItem>
                            <SelectItem value="16:9">16:9</SelectItem>
                            <SelectItem value="9:16">9:16</SelectItem>
                            <SelectItem value="21:9">21:9</SelectItem>
                            <SelectItem value="9:21">9:21</SelectItem>
                            <SelectItem value="4:5">4:5</SelectItem>
                            <SelectItem value="5:4">5:4</SelectItem>
                            <SelectItem value="4:3">4:3</SelectItem>
                            <SelectItem value="3:4">3:4</SelectItem>
                            <SelectItem value="2:3">2:3</SelectItem>
                            <SelectItem value="3:2">3:2</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="num_outputs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Number of Outputs
                          <Tooltip>
                            <TooltipTrigger>
                              <Info size={12} className="ml-1" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Select the number of output you want</p>
                            </TooltipContent>
                          </Tooltip>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            max={4}
                            onChange={(event) =>
                              field.onChange(+event.target.value)
                            }
                            defaultValue={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="guidance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1 ">
                        <div>Guidance:</div>
                        <span>{field.value}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info size={12} className="ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              Select the guidance for image generation process
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Slider
                          defaultValue={[field.value]}
                          className=" transition-all duration-300 "
                          min={0}
                          max={10}
                          step={0.5}
                          onValueChange={(value) => field.onChange(value[0])}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="num_inference_steps"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-end gap-1 ">
                        <div>Number of Inference steps:</div>
                        <span>{field.value}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info size={12}  />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              Number of denoising steps. Recommended range is
                              28-50,<br/> and lower number of steps produce lower
                              quality outputs, faster
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          className=" transition-all duration-300 "
                          min={1}
                          max={50}
                          step={1}
                          onValueChange={(value) => field.onChange(value[0])}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="output_quality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1 ">
                        <div>Output quality:</div>
                        <span>{field.value}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info size={12} className="ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                            Quality when saving the output images, from 0 to 100.
                            <br/>100 is best quality, 0 is lowest quality. Not relevant for .png outputs
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Slider
                          value={[field.value]}
                          className=" transition-all duration-300 "
                          min={1}
                          max={100}
                          step={1}
                          onValueChange={(value) => field.onChange(value[0])}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="aspect_ratio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Output format :
                      <Tooltip>
                          <TooltipTrigger>
                            <Info size={12} className="ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                           Format of the output image
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select output format" />
                          </SelectTrigger>
                        </FormControl >
                        <SelectContent  >
                          <SelectItem value="jpg">jpg</SelectItem>
                          <SelectItem value="png">png</SelectItem>
                          <SelectItem value="webp">webp</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prompt
                      <Tooltip>
                          <TooltipTrigger>
                            <Info size={12} className="ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                           Prompt for the generated image
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Write a prompt to generate image..." {...field} rows={6} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Submit</Button>
              </fieldset>
            </form>
          </Form>
        </TooltipProvider>
      </div>
    </>
  );
};

export default Configurations;
