"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { deleteMethod, editMethod, getAllDetails } from "@/lib/dbOperations";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PropertyTypes, SelectedPropertyType } from "@/lib/types";
import { ArrowBigRight, FilePenLine, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { imgUrl } from "@/lib/axiosInstance";
import Modal from "@/app/admin/properties/_components/Model";

const Property = () => {
  const [properties, setProperties] = useState<PropertyTypes[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] =
    useState<SelectedPropertyType>(null);
  const router = useRouter();

  const handleImageClick = (property: SelectedPropertyType) => {
    setSelectedProperty(property);
    setShowModal(true);
  };
  const handleDelete = (id: number) => {
    deleteMethod(`properties/${id}`);
    window.location.reload();
  };
  const handleEdit = (id: number) => {
    router.push(`properties/form/${id}`);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  const fetchProperties = async () => {
    const data = await getAllDetails({ uri: "properties" });
    setProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <>
      <h1 className="uppercase font-bold text-3xl text-center p-8">
        Our Properties
      </h1>
      <div className="px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {properties &&
          properties.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col w-full mx-auto shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="relative w-full h-48 cursor-pointer"
                onClick={() => handleImageClick(item)}
              >
                <Image
                  src={`${imgUrl}${item.image}`}
                  alt="House"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5 flex-grow">
                <h1 className="font-bold text-xl">{item.title}</h1>
                <p className="mt-2 text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      {selectedProperty && (
        <Modal show={showModal} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">{selectedProperty.title}</h2>
          <Image
            src={`http://localhost:5001/${selectedProperty.image}`}
            alt="House"
            width={500}
            height={300}
            className="mb-4"
          />
          <p>
            {" "}
            <span className="text-xl font-bold">Details: </span>
            {selectedProperty.description}
          </p>
          <div className="gap-5">
            <p>
              <span className="text-xl font-bold">Address: </span>
              {selectedProperty.address}
            </p>
            <h1>
              <span className="text-xl font-bold">Cost: </span> ₹{" "}
              {selectedProperty.cost}
            </h1>
          </div>
          <div
            className="flex text-sky-800 hover:text-sky-400 justify-end cursor-pointer"
            onClick={() => router.push("/buyer/contact")}
          >
            <p className="text-xl font-semibold">Contact</p>
            <ArrowBigRight />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Property;
