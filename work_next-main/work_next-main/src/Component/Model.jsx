import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";


import { X } from "lucide-react";

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Open Form
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Submit Your Details
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Mobile Number
                  </label>
                  <input
                    {...register("mobile")}
                    type="number"
                    className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Highest Qualification
                  </label>
                  <input
                    {...register("qualification")}
                    type="text"
                    className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Upload CV
                  </label>
                  <input
                    {...register("cv")}
                    type="file"
                    className="w-full border p-2 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Upload Image
                  </label>
                  <input
                    {...register("image")}
                    type="file"
                    accept="image/*"
                    className="w-full border p-2 rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
