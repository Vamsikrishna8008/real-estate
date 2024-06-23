"use client";
import { SuccessToast } from "@/components/Toaster";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { editMethod, getAllDetails, postAll } from "@/lib/dbOperations";
import { propertyFormSchema, propertyFormSchemaType } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { id } = useParams();
  const router = useRouter();
  const form = useForm<propertyFormSchemaType>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: {
      title: "",
      description: "",
      address: "",
      cost: 0,
      image: null as unknown as File, // Initialize image as null
    },
  });

  const processForm = async (data: propertyFormSchemaType) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("address", data.address);
    formData.append("cost", data.cost.toString());
    formData.append("image", data.image);
    const res = await editMethod({ uri: `properties/${id}`, data: formData });
    SuccessToast(res.msg);
    router.back();
  };
  const fetchProperty = async () => {
    const data = await getAllDetails({ uri: `properties/${id}` });
    console.log(data, "jjjj");
    form.reset({
      title: data.title,
      description: data.description,
      address: data.address,
      cost: data.cost,
      image: data.image,
    });
    setImagePreview(`http://localhost:5001/${data.image}`);
  };
  console.log(form, "kkkkkkkk");
  useEffect(() => {
    fetchProperty();
  }, []);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      form.setValue("image", file);
    }
  };

  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className="shadow-md w-[95%] md:w-[70%] lg:w-[80%] py-4 px-8"
        >
          <h1 className="text-2xl text-center">Update Property</h1>
          <div className="flex flex-col gap-4 mt-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cost</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter amount"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="w-32 h-32 object-cover"
                />
              </div>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Forms;
