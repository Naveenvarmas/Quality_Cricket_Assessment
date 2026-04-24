import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { UploadCloud, Plus, Minus } from "lucide-react";

function AddProducts() {
  const [qty, setQty] = useState(1);
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <AdminLayout title="Add Products">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT FORM */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-6">
            Product Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Product Name */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium block mb-2">
                Product Name
              </label>

              <input
                type="text"
                placeholder="Enter product name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Category
              </label>

              <select className="w-full border rounded-lg px-4 py-3 outline-none">
                <option>Bat</option>
                <option>Helmet</option>
                <option>Gloves</option>
                <option>Stumps</option>
                <option>Kit</option>
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Brand
              </label>

              <select className="w-full border rounded-lg px-4 py-3 outline-none">
                <option>MRF</option>
                <option>SS</option>
                <option>SG</option>
                <option>TON</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Price
              </label>

              <input
                type="number"
                placeholder="$0"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />
            </div>

            {/* Old Price */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Old Price
              </label>

              <input
                type="number"
                placeholder="$0"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Quantity
              </label>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setQty(Math.max(1, qty - 1))
                  }
                  className="w-10 h-10 border rounded-lg flex items-center justify-center"
                >
                  <Minus size={16} />
                </button>

                <div className="w-16 h-10 border rounded-lg flex items-center justify-center font-medium">
                  {qty}
                </div>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 border rounded-lg flex items-center justify-center"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* SKU */}
            <div>
              <label className="text-sm font-medium block mb-2">
                SKU / Barcode
              </label>

              <input
                type="text"
                placeholder="SKU-12564"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium block mb-2">
                Description
              </label>

              <textarea
                rows="5"
                placeholder="Enter product details..."
                className="w-full border rounded-lg px-4 py-3 outline-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Upload */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4">
              Upload Images
            </h3>

            <label className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition">
              <UploadCloud
                size={38}
                className="text-indigo-600"
              />

              <p className="mt-3 text-sm text-gray-600">
                Click to upload images
              </p>

              <input
                type="file"
                multiple
                onChange={handleImages}
                className="hidden"
              />
            </label>

            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-5">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="border rounded-lg p-2 text-xs truncate"
                  >
                    {img.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Status */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4">
              Product Status
            </h3>

            <div className="space-y-3 text-sm">
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="status"
                  defaultChecked
                />
                Publish Now
              </label>

              <label className="flex gap-2">
                <input
                  type="radio"
                  name="status"
                />
                Draft
              </label>
            </div>
          </div>

          {/* Save */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium">
            Save Product
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddProducts;