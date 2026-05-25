"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";
import { initializeRazorpay } from "@/lib/razorpay";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  guests: z.string().min(1, "Number of guests is required"),
  villaType: z.string().min(1, "Villa type is required"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsProcessing(true);
    try {
      const response = await initializeRazorpay(5000, "USD");
      console.log("Razorpay Initialized:", response);
      alert(
        `Reservation confirmed for ${data.fullName}. Razorpay session started.`
      );
      reset();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Payment initialization failed.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-ocean-900/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="relative w-full max-w-2xl bg-stark-white rounded-sm overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Top accent */}
            <div className="h-[2px] w-full bg-gradient-to-r from-turquoise-500 via-turquoise-400 to-coral-400" />

            <div className="p-8 md:p-12">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-deep-dark/40 hover:text-deep-dark transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-8">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-turquoise-600 mb-2">
                  Azure Haven Resort
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-deep-dark">
                  Reserve Your Stay
                </h2>
                <p className="mt-2 font-sans text-sm text-deep-dark/50">
                  A refundable deposit secures your preferred dates and villa.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name"
                    error={errors.fullName?.message}
                    {...register("fullName")}
                  />
                  <InputField
                    label="Email Address"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <InputField
                    label="Phone Number"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                  <div className="space-y-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-deep-dark/70">
                      Villa Type
                    </label>
                    <select
                      {...register("villaType")}
                      className="w-full border-b border-deep-dark/15 py-2.5 focus:outline-none focus:border-turquoise-500 bg-transparent transition-all text-deep-dark text-sm appearance-none"
                    >
                      <option value="">Select a villa</option>
                      <option value="ocean-suite">Ocean Suite</option>
                      <option value="garden-villa">Garden Villa</option>
                      <option value="presidential">Presidential Villa</option>
                      <option value="overwater">Overwater Bungalow</option>
                    </select>
                    {errors.villaType && (
                      <p className="text-coral-500 text-xs">
                        {errors.villaType.message}
                      </p>
                    )}
                  </div>
                  <InputField
                    label="Check-in"
                    type="date"
                    error={errors.checkIn?.message}
                    {...register("checkIn")}
                  />
                  <InputField
                    label="Check-out"
                    type="date"
                    error={errors.checkOut?.message}
                    {...register("checkOut")}
                  />
                </div>

                <InputField
                  label="Number of Guests"
                  type="number"
                  error={errors.guests?.message}
                  {...register("guests")}
                />

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="group relative w-full py-4 mt-4 overflow-hidden border border-deep-dark text-deep-dark hover:text-stark-white transition-colors duration-500 font-sans text-[11px] tracking-[0.3em] uppercase font-bold disabled:opacity-50"
                >
                  <span className="absolute inset-0 bg-deep-dark transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
                  <span className="relative z-10">
                    {isProcessing
                      ? "Processing..."
                      : "Confirm — $5,000 Deposit"}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* Reusable Input Field */
import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, ...props }, ref) => (
    <div className="space-y-2">
      <label className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-deep-dark/70">
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className="w-full border-b border-deep-dark/15 py-2.5 focus:outline-none focus:border-turquoise-500 bg-transparent transition-all text-deep-dark text-sm placeholder:text-deep-dark/30"
      />
      {error && <p className="text-coral-500 text-[11px]">{error}</p>}
    </div>
  )
);
InputField.displayName = "InputField";
