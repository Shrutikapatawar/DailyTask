"use client";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-[#f5f1ea] w-full max-w-xl mx-4 rounded-xl shadow-xl p-8">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-[#0d2005] mb-2">
          Contact Us
        </h2>

        <p className="text-gray-600 text-sm mb-6">
          Drop your details and we'll get back to you.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-[#e5ded3] rounded-md px-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#546b47]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-[#e5ded3] rounded-md px-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#546b47]"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-[#e5ded3] rounded-md px-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#546b47]"
          />
          <textarea
            rows={3}
            placeholder="Your message / concern"
            className="w-full border border-[#e5ded3] rounded-md px-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#546b47]"
          />

          <button
            type="submit"
            className="w-full bg-[#546b47] text-white py-2 rounded-md hover:bg-[#4e6541] transition"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
