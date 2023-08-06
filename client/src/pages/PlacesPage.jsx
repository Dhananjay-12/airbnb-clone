import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { LiaDogSolid } from "react-icons/lia";
import { BsDoorOpen } from "react-icons/bs";
import axios from "axios";
import {
  HiOutlineInboxStack,
  HiOutlineMusicalNote,
  HiOutlineTv,
  HiPlus,
  HiWifi,
} from "react-icons/hi2";

import Checkbox from "../ui/Checkbox";
import ErrorMessage from "../ui/ErrorMessage";
import toast from "react-hot-toast";
import { useState } from "react";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 0.8rem;
  border-radius: var(--border-radius-sm);
  &::file-selector-button {
    font: inherit;
    padding: 0.2rem 0.6rem;
    border-radius: 2rem;
    border: none;
    color: white;
    background-color: #f5385d;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    &:hover {
      background-color: #e7113c;
    }
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid #8c8a8a;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  width: 100%;
  height: 8rem;
`;

function PlacesPage() {
  const { action } = useParams();
  const [multipleImages, setMultipleImages] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      wifi: false,
      parking: false,
      tv: false,
      pets: false,
      privateEntrance: false,
      music: false,
    },
  });

  async function onSubmit(data) {
    console.log(data);
    const formData = new FormData();
    for (const file of data.photos) {
      formData.append("photos", file);
    }

    formData.append("title", data.title);
    formData.append("address", data.address);
    formData.append("description", data.description);
    formData.append("wifi", data.wifi);
    formData.append("parking", data.parking);
    formData.append("tv", data.tv);
    formData.append("pets", data.pets);
    formData.append("privateEntrance", data.privateEntrance);
    formData.append("music", data.music);
    try {
      await axios.post("/user-apartment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMultipleImages([]);
      toast.success("Registration successful. Now you can log in!");
    } catch (err) {
      toast.error(err);
    }
  }

  // console.log(multipleImages);
  return (
    <>
      <div className="text-center mt-4">
        <Link
          to="/account/places/new"
          className="shadow-sm shadow-gray-500 bg-gray-700 text-gray-100 rounded-full py-1 px-4 inline-flex gap-1 items-center text-sm justify-center text-center hover:bg-gray-500 hover:text-gray-50"
        >
          <HiPlus />
          <span>Add new room</span>
        </Link>
      </div>
      {action === "new" && (
        <div className="w-[45rem] mx-auto  text-left ">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              {/* Title  */}
              <div>
                <label htmlFor="title" className="heading">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="My lovely apartment"
                  {...register("title", {
                    required: "This field is required",
                  })}
                />
                {errors?.title?.message && (
                  <ErrorMessage message={errors?.title?.message} />
                )}
              </div>
              {/* Title  */}
              {/* Address  */}
              <div>
                <label htmlFor="address" className="heading">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter the location of the apartment"
                  {...register("address", {
                    required: "This field is required",
                  })}
                />
                {errors?.address?.message && (
                  <ErrorMessage message={errors?.address?.message} />
                )}
              </div>
              {/* Address  */}
              {/* Photos  */}
              <div className="flex gap-2  items-center py-2">
                <label htmlFor="photos" className="heading">
                  Photos
                </label>
                <FileInput
                  id="photos"
                  accept="image/*"
                  name="photos"
                  type="file"
                  multiple
                  {...register("photos", {
                    required: "Please upload a photo",
                  })}
                />

                {errors?.photos?.message && (
                  <ErrorMessage message={errors?.photos?.message} />
                )}
              </div>
              {/* Photos  */}
              {/* Description */}
              <div>
                <label htmlFor="description" className="heading">
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Tell some cool stuff about your apartment"
                  {...register("description", {
                    required: "This field is required",
                  })}
                />
                {errors?.description?.message && (
                  <ErrorMessage message={errors?.description?.message} />
                )}
              </div>
              {/* Description */}
              {/* checkbox */}
              <h2 className="heading">Perks</h2>
              <div className="grid grid-cols-3 ">
                <Checkbox
                  label="WiFi"
                  value="wifi"
                  control={control}
                  icon={<HiWifi />}
                />
                <Checkbox
                  label="Parking"
                  value="parking"
                  control={control}
                  icon={<HiOutlineInboxStack />}
                />
                <Checkbox
                  label="Television"
                  value="tv"
                  control={control}
                  icon={<HiOutlineTv />}
                />
                <Checkbox
                  label="Pets"
                  value="pets"
                  control={control}
                  icon={<LiaDogSolid />}
                />
                <Checkbox
                  label="Private Entrance"
                  value="privateEntrance"
                  control={control}
                  icon={<BsDoorOpen />}
                />
                <Checkbox
                  label="Music"
                  value="music"
                  control={control}
                  icon={<HiOutlineMusicalNote />}
                />
              </div>
              {/* checkbox */}

              <div className="flex items-center justify-between gap-1 py-2">
                {/* maxguests */}
                <div className="flex flex-col items-center justify-center">
                  <label htmlFor="maxGuests" className="heading">
                    Capacity
                  </label>
                  <input
                    id="maxGuests"
                    type="number"
                    name="maxGuests"
                    placeholder="Enter the number"
                    {...register("maxGuests", {
                      required: "This field is required",
                    })}
                  />
                  {errors?.maxGuests?.message && (
                    <ErrorMessage message={errors?.maxGuests?.message} />
                  )}
                </div>
                {/* maxguests */}
                {/* Pricings  */}
                <div className="flex flex-col items-center justify-center">
                  <label htmlFor="price" className="heading">
                    Pricings
                  </label>
                  <input
                    type="number"
                    id="price"
                    placeholder="Amount here..."
                    {...register("price", {
                      required: "This field is required",
                    })}
                  />
                  {errors?.price?.message && (
                    <ErrorMessage message={errors?.price?.message} />
                  )}
                </div>
                {/* Pricings  */}
              </div>
              {/* ExtraInfo */}
              <div className="flex items-center justify-center flex-col">
                <label htmlFor="extra" className="heading">
                  Extra Information(optional)
                </label>
                <input
                  type="text"
                  id="extra"
                  placeholder="Anything extra to mention about the stay/apartment"
                />
              </div>
              {/* ExtraInfo */}
              <button className="primary">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PlacesPage;
