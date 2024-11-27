import React, { useState } from "react";
import Layout from "../components/Layout";
import { MdCancel, MdLocationPin } from "react-icons/md";
import ActionBtn from "../components/ActionBtn";
import SuccessModal from "../components/SuccessModal";

const CreateEvent = () => {
  const [online, setOnline] = useState(false);
  const [file, setFile] = useState(null);
  const [free, setFree] = useState(false);
  const [imgPreview, setImgPreview] = useState(null);
  const [photoError, setPhotoError] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
    category: "",
    regularPrice: "",
    vipPrice: "",
  });

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const handleImage = () => {
    const fileInput = document.getElementById("imgInput");
    fileInput.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 2 * 1024 * 1024) {
        setImgPreview(URL.createObjectURL(file));
        setFile(file);
      } else {
        setPhotoError("Picture must not exceed 2MB");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Append all formData fields
    for (const key in formData) {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    }

    // Append the tags array as a stringified JSON
    formDataToSend.append("tags", JSON.stringify(tags));

    // Append online and free fields
    formDataToSend.append("online", online);
    formDataToSend.append("free", free);
    formDataToSend.append("image", file);

    // Debugging: Log the formData entries
    for (let pair of formDataToSend.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    // Make the API request (you can use fetch/axios here)
  };

  return (
    <Layout>
      {showModal && <SuccessModal showModal={showModal} />}
      <div className="container my-4">
        <h2 className="fs-4">Create Event</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Image Upload */}
          <div className="mb-2 position-relative">
            <label htmlFor="photo" className="form-label fs-5 fw-semibold">
              Upload Photo
            </label>
            <small className=" ms-3 text-danger">{photoError}</small>
            {imgPreview && (
              <p
                role="button"
                onClick={() => setImgPreview(null)}
                className="z-1 text-danger position-absolute"
                style={{ top: "55px", right: "30px" }}
              >
                <MdCancel size={28} />
              </p>
            )}
            <div
              onClick={handleImage}
              className="rounded-2"
              style={{
                backgroundImage: imgPreview ? `url(${imgPreview})` : "none",
                backgroundColor: imgPreview ? "transparent" : "#d9d9d9",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                id="imgInput"
                onChange={handleFileChange}
              />
              {!imgPreview && (
                <p className="bg-white rounded-2 p-2 fw-medium">Upload Photo</p>
              )}
            </div>
          </div>

          {/* Date and Time */}
          <div className="mt-3">
            <label className="form-label fs-4 fw-semibold">
              Time & Location
            </label>
            <div>
              <label htmlFor="date" className="form-label fs-6 fw-semibold">
                Date
              </label>
              <input
                id="date"
                type="date"
                className="form-control shadow-none bg-secondary-subtle py-2"
                name="date"
                onChange={handleChange}
                style={{ width: "279px" }}
              />
            </div>
            <div className="d-flex flex-wrap gap-3 my-3">
              <div>
                <label htmlFor="start" className="form-label fs-6 fw-semibold">
                  Time (Start)
                </label>
                <input
                  id="start"
                  type="time"
                  className="form-control shadow-none bg-secondary-subtle py-2"
                  name="startTime"
                  onChange={handleChange}
                  style={{ width: "279px" }}
                />
              </div>
              <div>
                <label htmlFor="end" className="form-label fs-6 fw-semibold">
                  Time (End)
                </label>
                <input
                  type="time"
                  id="end"
                  className="form-control shadow-none bg-secondary-subtle py-2"
                  name="endTime"
                  onChange={handleChange}
                  style={{ width: "279px" }}
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="my-2">
            <label htmlFor="location" className="form-label fs-6 fw-semibold">
              Location
            </label>
            <div className="d-flex justify-content-between gap-3 align-items-center position-relative">
              <MdLocationPin
                className="position-absolute"
                style={{ left: "3px" }}
              />
              <input
                id="location"
                type="text"
                style={{ cursor: online ? "not-allowed" : "" }}
                className="form-control shadow-none bg-secondary-subtle py-2 w-100 ps-4"
                placeholder="Enter Location"
                name="location"
                disabled={online}
                onChange={handleChange}
              />
              <div className="form-check form-check-reverse form-switch">
                <input
                  className="form-check-input shadow-none"
                  type="checkbox"
                  role="switch"
                  checked={online}
                  onChange={() => {
                    setOnline(!online);
                  }}
                />
                <label
                  htmlFor="online"
                  className="form-check-label fs-6 fw-semibold"
                >
                  Online
                </label>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="my-2">
            <label htmlFor="desc" className="form-label fs-4 fw-semibold my-2">
              Description
            </label>
            <textarea
              id="desc"
              className="form-control bg-secondary-subtle shadow-none"
              rows="12"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Categories */}
          <div className="my-4">
            <label className="form-label fs-4 fw-semibold my-2">
              Categories
            </label>
            <div className="d-flex gap-3 flex-wrap align-items-center">
              <div>
                <label
                  htmlFor="category"
                  className="form-label fs-6 fw-semibold"
                >
                  Select Category
                </label>
                <select
                  id="category"
                  className="form-select shadow-none border border-1 py-2"
                  name="category"
                  onChange={handleChange}
                  style={{ width: "241px" }}
                >
                  <option value="">Category</option>
                  <option value="sport">Sports</option>
                  <option value="party">Party</option>
                  <option value="concert">Concert</option>
                  <option value="tech">Tech</option>
                  <option value="religion">Religion</option>
                  <option value="eductaion">Education</option>
                </select>
              </div>
              <div>
                <label htmlFor="tags" className="form-label fs-6 fw-semibold">
                  Tags
                </label>
                <div
                  className="d-flex flex-wrap gap-2"
                  style={{ maxWidth: "454px" }}
                >
                  <input
                    type="text"
                    className="form-control bg-secondary-subtle py-2 shadow-none"
                    placeholder="Type a tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex gap-2 my-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-2 bg-white border border-2 border-secondary text-dark d-flex align-items-center gap-2 px-2 py-1"
                >
                  <span>{tag}</span>
                  <MdCancel
                    size={18}
                    role="button"
                    className="bg-white text-dark rounded-circle border-0"
                    onClick={() => handleRemoveTag(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div style={{ maxWidth: "400px" }}>
            <label className="form-label fs-4 fw-semibold my-2">Pricing</label>
            <div className="my-2 d-flex align-items-center justify-content-between">
              <label className="form-label fs-6 fw-semibold">Free</label>
              <div className="form-switch">
                <input
                  className="form-check-input shadow-none"
                  type="checkbox"
                  role="switch"
                  checked={free}
                  onChange={() => {
                    setFree(!free);
                    setFormData({
                      ...formData,
                      regularPrice: free ? "" : 0,
                      vipPrice: free ? "" : 0,
                    });
                  }}
                />
              </div>
            </div>
            {!free && (
              <div className="my-2">
                <div className="mb-3">
                  <label
                    htmlFor="regularPrice"
                    className="form-label fs-6 fw-semibold"
                  >
                    Regular
                  </label>
                  <input
                    id="regularPrice"
                    type="number"
                    className="form-control shadow-none bg-secondary-subtle py-2"
                    name="regularPrice"
                    onChange={handleChange}
                    placeholder="Enter Regular Price"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vipPrice"
                    className="form-label fs-6 fw-semibold"
                  >
                    VIP
                  </label>
                  <input
                    id="vipPrice"
                    type="number"
                    className="form-control shadow-none bg-secondary-subtle py-2"
                    name="vipPrice"
                    onChange={handleChange}
                    placeholder="Enter VIP Price"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit button */}
          <div className="d-flex gap-3 align-items-center my-5">
            <button
              style={{ height: "50px", width: "150px" }}
              className="btn-outline-dark btn border border-2 border-dark fw-bold"
              type="button"
            >
              Cancel
            </button>
            <ActionBtn type="submit" width={"172px"} content="Create Event" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateEvent;
