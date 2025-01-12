"use server"
import { ImageGenerationFormSchema } from "@/components/image-generation/configurations"
import { z } from "zod";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN
})

interface ImageResponse {
    error: string | null,
    success: boolean,
    data: unknown | null
}

export async function generateImage(input: z.infer<typeof ImageGenerationFormSchema>): Promise<ImageResponse> {
    try {
        const modelInput = {
            prompt: input.prompt,
            go_fast: true,
            guidance: input.guidance,
            megapixels: "1",
            num_outputs: input.num_outputs,
            aspect_ratio: input.aspect_ratio,
            output_format: input.output_format,
            output_quality: input.output_quality,
            prompt_strength: 0.8,
            num_inference_steps: input.num_inference_steps
        };

        const output = await replicate.run(input.model as `${string}/${string}`, { input: modelInput });
        console.log(output);

        return ({
            error: null,
            success: true,
            data: output
        })
    } catch (err: any) {
        return ({
            error: err.message || "Failed to generate image",
            success: false,
            data: null
        })
    }
}