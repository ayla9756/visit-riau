// components/RatingInput.jsx
"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export function InputRating({
   label = "Rating",
   name = "rating",
   value = 0,
   setValue,
   maxRating = 5,
   size = "sm", // 'sm' | 'md' | 'lg'
   showNumber = true,
   required = false,
   onChange,
   disabled = false,
   className = "",
}) {
   const [rating, setRating] = useState(value);
   const [hoverRating, setHoverRating] = useState(0);

   const sizes = {
      sm: { star: 16, text: "text-sm" },
      md: { star: 24, text: "text-base" },
      lg: { star: 32, text: "text-lg" },
   };

   const handleRating = (value) => {
      if (disabled) return;
      setRating(value);
      if (onChange) {
         onChange({ target: { name, value } });
      }
      if (setValue) {
         setValue((prev) => ({ ...prev, [name]: value }));
      }
   };

   return (
      <div className={`space-y-2 ${className}`}>
         {label && (
            <label
               className={`block font-medium ${sizes[size].text} text-gray-700`}
            >
               {label}
               {required && <span className="text-red-500 ml-1">*</span>}
            </label>
         )}

         <div className="flex items-center gap-2">
            <div className="flex">
               {[...Array(maxRating)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                     <button
                        key={index}
                        type="button"
                        disabled={disabled}
                        onClick={() => handleRating(ratingValue)}
                        onMouseEnter={() =>
                           !disabled && setHoverRating(ratingValue)
                        }
                        onMouseLeave={() => !disabled && setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label={`Rate ${ratingValue} out of ${maxRating}`}
                     >
                        <Star
                           size={sizes[size].star}
                           className={`
                    ${
                       (hoverRating || rating) >= ratingValue
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                    }
                    transition-colors duration-150
                  `}
                        />
                     </button>
                  );
               })}
            </div>

            {showNumber && (
               <span
                  className={`font-semibold ${sizes[size].text} ${
                     rating > 0 ? "text-amber-600" : "text-gray-400"
                  }`}
               >
                  {rating.toFixed(1)}
               </span>
            )}
         </div>

         {/* Hidden input for form submission */}
         <input type="hidden" name={name} value={rating} required={required} />
      </div>
   );
}
